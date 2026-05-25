import {returnTheme} from "./return-theme";
import {ThemeEnum} from "../domain/domain";

import eye from '@/assets/eye.jpg'
import koi from '@/assets/koi.jpg'
import moi1 from '@/assets/moi1.jpeg'

export const returnBackground = (theme: ThemeEnum) => {
  switch (returnTheme(theme)) {
    case ThemeEnum.dark: {
      return moi1;
    }
    case ThemeEnum.yellow: {
      return eye;
    }
    case ThemeEnum.light: {
      return koi;
    }
  }
};
