
export const scrollToElement = (target: Element): void =>
  void setTimeout(() => (target as any)[("scrollIntoViewIfNeeded" in target) ? "scrollIntoViewIfNeeded" : "scrollIntoView"](), 1); //scrollIntoViewIfNeeded works best, but is not available in all browsers
