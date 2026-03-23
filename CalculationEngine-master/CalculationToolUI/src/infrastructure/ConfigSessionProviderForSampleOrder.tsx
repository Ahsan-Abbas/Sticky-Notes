import { ReactNode, useEffect, useReducer, createContext } from "react";
import { configureSampleOrder } from "../backend/configure";
import { getActionSpecificationOrEmpty, getCurrentValueInternalName } from "../utils/ace";
import { handleActionTrigger } from "../backend/integrations";
import { publish } from "../utils/events";
import { isCancel } from "axios";

interface IConfigSessionProviderForSampleOrderProps {
    input: IApplicationInput,
    children: ReactNode
}

type IConfigDispatch = {
    configuration: ConfigureResponse;
    interaction: IConfigInteractionSampleOrder;
    sectionId?: string;
}
let confDate = new Date()
confDate.setDate(confDate.getDate() - (confDate.getDay() - 1)); //Change to Monday current week
const initialConfig: IConfigState = {
    date: confDate,
    loading: true,
    assignments: [],
    configuration: {
        phases: [],
        removedAssignments: {
            variableAssignments: []
        },
        sections: [],
        isComplete: false,
        isConfigurable: true,
        packagePath: ""
    },
    input: {} as IApplicationInput,
    packageVersion: ""
};

const CONFIG_ERROR_CONTEXT = () => {
    throw Error("ConfigAssignmentContext can only be used in components under the ConfigSessionProviderForSampleOrder component");
};

let assignmentArray: Assignment[] = []; // To have local array of all the assignments for configure call
export const ConfigStateForSampleOrderContext = createContext<IConfigState>(initialConfig);
export const ConfigAssignmentForSampleOrderContext = createContext<IConfigInteractionSampleOrder>({
    assign: CONFIG_ERROR_CONTEXT,
    unassign: CONFIG_ERROR_CONTEXT,
    assignMultiple: CONFIG_ERROR_CONTEXT,
    reset: CONFIG_ERROR_CONTEXT,
    loadSection: CONFIG_ERROR_CONTEXT,
    setSection: CONFIG_ERROR_CONTEXT
});

const configReducer = (state: IConfigState, action: IConfigDispatch): IConfigState => {

    let packageVersion = action.configuration.packagePath.replace(/^[\w\/]*\~/, "");

    detectChangeEvents(state.configuration.sections, action.configuration.sections, state, action.interaction);

    let currentSection = action.sectionId ?? state.currentSection;
    let configuration = mergeConfigurationObjects(state.configuration, action.configuration, currentSection);

    return {
        ...state,
        loading: false,
        configuration,
        assignments: assignmentArray,
        packageVersion,
        currentSection
    };
};

const mergeConfigurationObjects = (oldConfig: ConfigureResponse, newConfig: ConfigureResponse, currentSection: string | undefined): ConfigureResponse => {
    if (typeof currentSection === "undefined")
        return newConfig;
    return {
        ...newConfig,
        sections: oldConfig.sections.map(s => newConfig.sections.find(ns => ns.id === s.id) ?? s)
    };
}

//TODO: in case of dynamic instances, it probably shouldn't ignore it if the section isn't found in the previous config
/**
 * Looks through the configuration, and detects if there are any variables that have a change event defined.
 * If one is defined, and the value has changed since last assignment, trigger the event handler
 * @param old List of sections from before the new assignment(s)
 * @param fresh List of sections after the new assignment(s)
 */
const detectChangeEvents = async (old: Section[], fresh: Section[], state: IConfigState, interaction: IConfigInteractionSampleOrder): Promise<void> => {
    for (let fs of fresh) {
        let os = old.find(o => o.id === fs.id);
        if (typeof os === "undefined")
            continue; //TODO: handle model instances
        for (let fv of fs.variables) {
            let ov = os.variables.find(ov => ov.id === fv.id);
            if (typeof ov === "undefined")
                continue;

            //check if there is an action value
            let act = fv.properties.find(p => p.id == "ACTION");
            if (typeof act === "undefined" || !act.value || typeof act.value !== "string")
                continue;

            //compare if value has changed
            let oldValue = getCurrentValueInternalName(ov);
            let freshValue = getCurrentValueInternalName(fv);
            if (oldValue != freshValue) {
                let spec = {
                    ...getActionSpecificationOrEmpty(fv),
                    action: act.value as Action
                };
                console.log(`trigger action on variable ${fv.id} - value changed from '${oldValue}' to '${freshValue}'`, spec);
                await handleActionTrigger(spec, fv, fs, "ROOT", state, interaction);
            }
        }
        await detectChangeEvents(os.sections, fs.sections, state, interaction);
    }
}

//doesn't support multi-value variables
const combine = (newAssignment: Assignment, doPublish: boolean = true): Assignment[] => {
    if (doPublish)
        publish({
            event: typeof (newAssignment.value) === "undefined" ? "unassign" : "assign",
            eventValue: newAssignment
        });
    let asn = assignmentArray.filter(a => a.variableId != newAssignment.variableId || (a.variableId === newAssignment.variableId && a.instanceId != newAssignment.instanceId));
    if (typeof newAssignment.value !== "undefined" && newAssignment.value !== null)
        asn.push(newAssignment);
    assignmentArray = asn;
    return asn;
};

const combineMultiple = (newAssignments: Assignment[]): Assignment[] => {
    publish({
        event: "assign-multiple",
        eventValue: newAssignments
    });
    let combinedAssignments: Assignment[] = [];
    for (let newAssignment of newAssignments)
        combinedAssignments = combine(newAssignment, false);
    return combinedAssignments;
};

const getInstanceAssignments = (assignments: Assignment[]): Assignment[] => {
    return assignments.map(a => a.instanceId) //only look at instanceId from the assignments
        .filter((val, i, arr) => val != "ROOT" && arr.indexOf(val) === i) //only get non-root instanceIds and filter out duplicates
        .map(v => ({
            type: "Instance",
            instanceId: v
        }));
}

const removeInvalidAssignments = (assignments: Assignment[], invalid: IncompatibleAssignment[]) => {
    return assignments.filter(a => !invalid.some(inv => a.variableId === inv.variable.id && a.instanceId === inv.instanceId));
}

let controller = new AbortController();
const callConfigure = async (state: IConfigState, sectionId?: string | null, tempSectionId?: string) => {
    controller.abort();
    controller = new AbortController();
    const req: AceConfigureRequest = {
        date: state.date,
        viewId: "ROCKFON-NA-SAMPLE-ORDER-TOOL_VIEW",
        line: {
            productId: "ROCKFON-NA-SAMPLE-ORDER-TOOL",
            variableAssignments: [
                { variableId: "DIM_BUILDDATE", value: state.date.toISOString().substring(0, 11) + "00:00:00Z", instanceId: "ROOT" },
                { variableId: "ROCKFON_PRODUCT_MODEL", value: state.input.model, instanceId: "ROOT" },
                ...getInstanceAssignments(assignmentArray),
                ...assignmentArray
            ]
        }
    };

    let sections = [];
    let current = sectionId ?? state.currentSection;
    if (typeof current !== "undefined") {
        sections.push(current);
        if (tempSectionId !== null && typeof tempSectionId !== "undefined" && tempSectionId !== current)
            sections.push(tempSectionId);
        if (sections.length > 0)
            req.settings = {
                ...req.settings,
                includeSections: sections
            };
    }

    return await configureSampleOrder(req, controller.signal, state.input.wi ? parseInt(state.input.wi) : null);
}

export default function ConfigSessionProviderForSampleOrder({ input, children }: IConfigSessionProviderForSampleOrderProps) {
    const [config, dispatch] = useReducer(configReducer, {
        ...initialConfig,
        input
    });

    const handleInteraction = async (assignments: Assignment[], sectionId?: string | null, tempSectionId?: string) => {
        try {
            let lastRequest = callConfigure(config, sectionId, tempSectionId);
            let configuration = await lastRequest;
            assignmentArray = removeInvalidAssignments(assignmentArray, configuration.removedAssignments.variableAssignments);
            dispatch({ configuration, interaction, sectionId: sectionId ?? void 0 });
        }
        catch (err) {
            if (!isCancel(err))
                console.error(err);
        }
    }

    const interaction: IConfigInteractionSampleOrder = {
        assign: async (variableId, value, instanceId, priority, tempSectionId) => handleInteraction(combine({ variableId, value, instanceId, priority }), void 0, tempSectionId),
        unassign: async (variableId, instanceId, tempSectionId) => handleInteraction(combine({ variableId, instanceId }), void 0, tempSectionId),
        assignMultiple: async (newAssignments, tempSectionId) => handleInteraction(combineMultiple(newAssignments), void 0, tempSectionId),
        reset: async (sectionId) => {
            if (typeof sectionId !== "undefined")
                interaction.setSection(sectionId);
            handleInteraction([], void 0, sectionId);
        },
        loadSection: async (sectionId) => handleInteraction(assignmentArray, sectionId),
        setSection: (sectionId) => dispatch({ configuration: config.configuration, interaction, sectionId: sectionId ?? void 0 })
    };

    useEffect(() => {
        callConfigure(config).then(configuration => {
            dispatch({ configuration, interaction });
        }).catch(err => {
            if (!isCancel(err))
                console.error(err);
        });
    }, []);
    return (
        <ConfigStateForSampleOrderContext.Provider value={config}>
            <ConfigAssignmentForSampleOrderContext.Provider value={interaction}>
                {children}
            </ConfigAssignmentForSampleOrderContext.Provider>
        </ConfigStateForSampleOrderContext.Provider>
    );
}
