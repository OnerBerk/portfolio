import {createAsyncThunk} from "@reduxjs/toolkit";
import {Lang, ThemeEnum} from '../../../domain/domain';

export {};
export const changeTheme = createAsyncThunk(
  "theme/change",
  async (color: ThemeEnum) => {
    return color;
  },
);
