import {returnTheme} from "./return-theme";
import {ThemeEnum} from "../domain/domain";
import mangas from "../assets/collage.webp";
import istanbul from "../assets/istanbul.jpg";
import moi1 from "../assets/moi1.jpeg";

export const returnBackground = (theme: ThemeEnum) => {
  switch (returnTheme(theme)) {
    case ThemeEnum.dark: {
      return moi1;
    }
    case ThemeEnum.yellow: {
      return istanbul;
    }
    case ThemeEnum.light: {
      return mangas;
    }
  }
};
