const t = {
  textStyle: {
    type: {
      name: "enum",
      value: ["Normal", "H1", "H2", "H3", "Warning", "Long text"]
    }
  },
  headerStyle: {
    type: {
      name: "enum",
      value: ["Normal", "H1", "H2", "H3", "Warning"]
    }
  },
  positionHorizontal: {
    type: {
      name: "enum",
      value: ["Left", "Center", "Right"]
    }
  },
  labelPosition: {
    type: {
      name: "enum",
      value: ["Left", "Center", "Right", "Top", "Bottom"]
    }
  },
  selectionMode: {
    type: {
      name: "enum",
      value: ["Single", "Multiple", "None"]
    }
  },
  imageDisplayMode: {
    type: {
      name: "enum",
      value: ["Responsive", "Thumbnail", "Column"]
    }
  }
}
const argTypes = (...arg: (keyof typeof t)[]) => {
  let r: Partial<typeof t> = {};
  for (let a of arg) {
    r[a] = t[a];
  }
  return r;
}
export default argTypes;
