import {Lang} from "../../domain/domain";
import {createSlice} from "@reduxjs/toolkit";
import {changeLang} from "../actions/lang/lang-action";

export interface LangState {
  lang: Lang;
}
const initialState: LangState = {lang: Lang.fr};
export const LangReducer = createSlice({
  name: "lang",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeLang.fulfilled, (state, action) => {
      console.log(action.payload);
      state.lang = action.payload;
    });
  },
});
export default LangReducer.reducer;
