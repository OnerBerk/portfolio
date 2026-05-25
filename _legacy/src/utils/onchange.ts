import {Dispatch, SetStateAction} from "react";

export const onchange = (
  setState: Dispatch<SetStateAction<any>>,
  target: string | number,
) => {
  setState(target);
};
