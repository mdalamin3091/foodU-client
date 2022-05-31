import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
    name: "drawer",
    initialState: {
        drawerOpen: false,
    },
    reducers: {
        drawerOpenTrue: (state, { payload }) => {
            state.drawerOpen = payload
        },
        drawerOpenFalse: (state, { payload }) => {
            state.drawerOpen = payload
        }
    }
})

export const { drawerOpenTrue, drawerOpenFalse } = drawerSlice.actions;
export default drawerSlice.reducer;