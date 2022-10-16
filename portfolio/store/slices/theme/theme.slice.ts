import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface ThemeState {
  bgColor: string;
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
}

const initialThemeState: ThemeState = {
  bgColor: "#FFFFFF",
  primaryColor: "#001621",
  secondaryColor: "#7a2626",
  thirdColor: "#faa7a7"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setStoreTheme: (
      state: Draft<typeof initialThemeState>,
      action: PayloadAction<typeof initialThemeState>
    ) => {
      state.bgColor = action.payload.bgColor;
      state.primaryColor = action.payload.primaryColor;
      state.secondaryColor = action.payload.secondaryColor;
      state.thirdColor = action.payload.thirdColor;
    }
  }
});

export const getTheme = (state: {theme: ThemeState}) => state.theme;
export const {setStoreTheme} = themeSlice.actions;
export default themeSlice.reducer;