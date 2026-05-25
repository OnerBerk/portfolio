import {ThemeEnum} from "../domain/domain";

export const returnColors = (theme: ThemeEnum) => {
  switch (theme) {
    case "dark": {
      return "#cea10b";
    }
    case "light": {
      return "#b01515";
    }
    case "yellow": {
      return "#381002";
    }
    default: {
      return "red";
    }
  }
};
