export const textStyleToCssClass = (textStyle?: TextStyle): string => {
  if (typeof textStyle === "undefined" || textStyle === "No label" || typeof textStyle !== "string")
    return "";
  return textStyle.toLowerCase().replaceAll(" ", "");
}

export const maxHeight = (className: string, height: number) => {
  const allClassElement = document.getElementsByClassName(className);
  for (let i: number = 0; i < allClassElement.length; ++i) {
    const currentHeight: number = allClassElement[i].clientHeight;
    if (currentHeight > height) {
      height = currentHeight;
    }
  }
  for (let i: number = 0; i < allClassElement.length; ++i) {
    const divComponent: HTMLElement | null = document.getElementById(`${className}-${i}`);
    if (divComponent) divComponent.style.height = `${height}px`;
  }
}