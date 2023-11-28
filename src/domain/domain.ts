import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {Dispatch, SetStateAction} from "react";

export enum ThemeEnum {
  dark = "dark",
  light = "light",
  yellow = "yellow",
}

export interface Iicon {
  setPdf?: Dispatch<SetStateAction<boolean>>;
  icon: any;
  size?: SizeProp;
  navigatePath?: string;
  classname?: string;
  theme?: ThemeEnum;
}
