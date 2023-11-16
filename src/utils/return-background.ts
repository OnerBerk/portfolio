import {returnTheme} from "./return-theme";
import {ThemeEnum} from "../domain/domain";
import mangas from "../assets/collage.webp";
import it from "../assets/it.jpeg";
import istanbul from "../assets/istanbul.jpg";

export const returnBackground = (theme: ThemeEnum) => {
  switch (returnTheme(theme)) {
    case ThemeEnum.dark: {
      return istanbul;
    }
    case ThemeEnum.yellow: {
      return mangas;
    }
    case ThemeEnum.light: {
      return it;
    }
  }
};
