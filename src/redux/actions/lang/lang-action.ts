import {createAsyncThunk} from "@reduxjs/toolkit";
import {Lang} from "../../../domain/domain";

export {};
export const changeLang = createAsyncThunk<Lang, Lang>(
  "lang/change",
  async (lang: Lang) => {
    return lang;
  },
);
