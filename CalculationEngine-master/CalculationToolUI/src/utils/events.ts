import { useMemo } from "react";

type SubscribeFunction = (ctx: EventContext) => void

const EVENT = "CALCULATION-TOOL-EVENT"

let root: Element | null = null;
let input: IApplicationInput;

export const initializeEvents = (rootElement: Element, appInput: IApplicationInput) => {
  root = rootElement;
  input = appInput;
}

/** Publishes an event. Should be called when the configuration changes and other noteworthy application events take place */
export const publish = (ctx: AppEvent): void => {
  root?.dispatchEvent(new CustomEvent<EventContext>(EVENT, {
    detail: {
      ...ctx,
      input
    }
  }));
}

export const subscribe = (fn: SubscribeFunction): () => void => {
  let handler = (e: Event) => {
    fn((e as CustomEvent<EventContext>).detail);
  }
  root?.addEventListener(EVENT, handler);
  return () => root?.removeEventListener(EVENT, handler);
}

export const useDebounce = <T>(f: (arg: T) => void, delay: number = 1500) => {
  let timer: NodeJS.Timeout | number;
  return {
    immediate: (arg: T) => {
      clearTimeout(timer);
      f(arg);
    },
    debounce: (arg: T) => {
      clearTimeout(timer);
      timer = setTimeout(() => f(arg), delay);
    }
  }
}
