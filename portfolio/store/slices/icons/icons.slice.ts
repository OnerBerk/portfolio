import {createSlice} from "@reduxjs/toolkit";

export type IconState = {
    icon: string
}
const initialIconState: IconState = {
    icon: 'moon'
}

export const iconslice = createSlice({
    name: 'icon',
    initialState: initialIconState,
    reducers: {
        iconMoon: state => {
            state.icon = 'moon'
        },
        iconSun: state => {
            state.icon = "sun"
        }
    }
})

export const iconAction = iconslice.actions