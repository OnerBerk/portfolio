import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export enum ThemeEnum {
  dark = "dark",
  light = "light",
  yellow = "yellow",
}

export interface Iicon {
  icon: any;
  size?: SizeProp;
  navigatePath?: string;
  classname?: string;
  theme?: ThemeEnum;
}
