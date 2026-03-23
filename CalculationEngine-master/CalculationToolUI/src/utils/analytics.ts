import { getCurrentValue, getIdWithoutPrefix, getVariablesWithProperty } from "./ace";

let maxPage = 0;
export const handleAnalytics = (ctx: EventContext) => {
  if (ctx.event == "paging") {
    if (ctx.eventValue > maxPage) {
      maxPage = ctx.eventValue;
      track({
        event: "events",
        eventCategory: ctx.input.model,
        eventAction: "Step " + ctx.eventValue,
        eventLabel: ctx.event
      }, ctx.state);
    }
    if (ctx.eventValue === ctx.state.configuration.sections.length - 1 && ctx.eventValue > 0) { //Track views of result page
      track({
        event: "events",
        eventCategory: ctx.input.model,
        eventAction: "Step " + (ctx.eventValue + 1),
        eventLabel: "view"
      }, ctx.state);
    }
  }
  else if (ctx.event === "reset") {
    maxPage = 0;
  }
  else if (ctx.event === "action") {
    if (ctx.variable.properties.find(p => p.id === "ANALYTICS_TRACKING")?.value === true) {
      track({
        event: "events",
        eventCategory: ctx.input.model,
        eventAction: ctx.eventValue.action,
        eventLabel: getIdWithoutPrefix(ctx.variable.id)
      }, ctx.state);
    }
  }
}

type AnalyticsEvent = {
  event: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
}

declare global {
  var dataLayer: any[] | undefined;
}

const track = (data: AnalyticsEvent, state?: IConfigState): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...data,
    ...mapValueByProperty(state)
  });
}

const mapValueByProperty = (state?: IConfigState): Record<string, any> => {
  let m: Record<string, any> = {};
  if (typeof state === "undefined")
    return m;

  let vars = getVariablesWithProperty(state.configuration.sections, "SOURCE_SYSTEM_ID_ANALYTICS");
  for (let v of vars) {
    let currVal = getCurrentValue(v);
    if (typeof currVal === "undefined" || currVal.value === "")
      continue;
    let key = v.properties.find(p => p.id === "SOURCE_SYSTEM_ID_ANALYTICS")!.value.toString();
    let valProp = currVal.properties.find(p => p.id === "SOURCE_SYSTEM_ID_ANALYTICS")?.value;
    m[key] = typeof valProp === "undefined" ? currVal.value : valProp;
  }
  return m;
}
