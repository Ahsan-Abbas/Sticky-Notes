import { ReactNode, useEffect, useReducer, createContext } from "react";
import { configure } from "../backend/configure";
import { getActionSpecificationOrEmpty, getConfigStructureWithProperties, getCurrentValueInternalName } from "../utils/ace";
import { handleActionTrigger } from "../backend/integrations";
import { publish } from "../utils/events";
import { isCancel } from "axios";

interface IConfigSessionProviderProps {
  input: IApplicationInput,
  children: ReactNode
}

type IConfigDispatch = {
  configuration: ConfigureResponse;
  interaction: IConfigInteraction;
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
  throw Error("ConfigAssignmentContext can only be used in components under the ConfigSessionProvider component");
};

let assignmentArray: Assignment[] = []; // To have local array of all the assignments for configure call
export const ConfigStateContext = createContext<IConfigState>(initialConfig);
export const ConfigAssignmentContext = createContext<IConfigInteraction>({
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

  console.log("configuration structure", getConfigStructureWithProperties(configuration.sections));

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
const detectChangeEvents = async (old: Section[], fresh: Section[], state: IConfigState, interaction: IConfigInteraction): Promise<void> => {
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
    viewId: state.input.view,
    line: {
      productId: state.input.model,
      variableAssignments: [
        { variableId: "DIM_BUILDDATE", value: state.date.toISOString().substring(0, 11) + "00:00:00Z", instanceId: "ROOT" },
        { variableId: "IMV_LANGUAGE", value: state.input.language.toUpperCase(), instanceId: "ROOT" },
        { variableId: "IMV_MARKET", value: state.input.market, instanceId: "ROOT" },
        ...getInstanceAssignments(assignmentArray),
        ...assignmentArray
      ]
    },
    settings: {
      noStateHash: true
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

  return await configure(state.packageVersion || state.input.packageVersion, state.input.wi ? +state.input.wi : null, req, state.input.language, controller.signal);
}

export default function ConfigSessionProvider({ input, children }: IConfigSessionProviderProps) {
  const [config, dispatch] = useReducer(configReducer, {
    ...initialConfig,
    input
  });

  const handleInteraction = async (assignments: Assignment | Assignment[], sectionId?: string | null, tempSectionId?: string) => {
    try {

      if (Array.isArray(assignments)) {
        publish({
          event: "assign-multiple",
          eventValue: assignments
        });
      }
      else {
        publish({
          event: typeof (assignments.value) === "undefined" ? "unassign" : "assign",
          eventValue: assignments
        });
      }
      for (let assignment of Array.isArray(assignments) ? assignments : [assignments]) {
        let asn = assignmentArray.filter(a => a.variableId != assignment.variableId || (a.variableId === assignment.variableId && a.instanceId != assignment.instanceId));
        if (typeof assignment.value !== "undefined" && assignment.value !== null)
          asn.push(assignment);
        assignmentArray = asn;
      }

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

  const interaction: IConfigInteraction = {
    assign: async (variableId, value, instanceId, tempSectionId) => handleInteraction({ variableId, value, instanceId }, void 0, tempSectionId),
    unassign: async (variableId, instanceId, tempSectionId) => handleInteraction({ variableId, instanceId }, void 0, tempSectionId),
    assignMultiple: async (newAssignments, tempSectionId) => handleInteraction(newAssignments, void 0, tempSectionId),
    reset: async (sectionId) => {
      if (typeof sectionId !== "undefined")
        interaction.setSection(sectionId);
      assignmentArray = [];
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
    <ConfigStateContext.Provider value={config}>
      <ConfigAssignmentContext.Provider value={interaction}>
        {children}
      </ConfigAssignmentContext.Provider>
    </ConfigStateContext.Provider>
  );
}
