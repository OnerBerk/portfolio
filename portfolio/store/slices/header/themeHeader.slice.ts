import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export interface ThemeHeaderState {
    open: boolean
}

const initialState: ThemeHeaderState = {
    open: false
}

export const themeHeaderSlice = createSlice({
    name: 'themeHeader',
    initialState,
    reducers: {
        //setTest: (
        //  state: Draft<typeof initialState>,
        //action: PayloadAction<typeof initialState.open>
        //) => {state.open = action.payload},
        setOpenThemeHeader: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.open>
        ) => {
            state.open = true
        },
        setCloseThemeHeader: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.open>
        ) => {
            state.open = false
        }
    }
});

export const getThemeHeaderState = (state: { open: ThemeHeaderState }) => state.open
export const {setOpenThemeHeader, setCloseThemeHeader} = themeHeaderSlice.actions
export default themeHeaderSlice.reducer