import {ThemeEnum} from '../../domain/domain';
import {createSlice} from '@reduxjs/toolkit';
import {changeTheme} from '../actions/theme/theme-action';

export interface themeState {
  theme: ThemeEnum|undefined;
}
const initialState: themeState = {theme: undefined};


export const ThemeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeTheme.fulfilled, (state, action) => {
      localStorage.setItem('theme',action.payload)
      state.theme = action.payload;
    });
  },
});