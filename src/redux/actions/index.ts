import {createAsyncThunk} from "@reduxjs/toolkit";
import {Lang} from "../../domain/domain";

const changeLang = createAsyncThunk("lang/change", async (lang: Lang) => {
  return lang;
});
