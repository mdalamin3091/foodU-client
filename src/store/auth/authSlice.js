import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        showModal: false,
    },
    reducers: {
        showModalTrue: (state, { payload }) => {
            state.showModal = payload
        },
        showModalFalse: (state, { payload }) => {
            state.showModal = payload
        }
    }
})

export const { showModalTrue, showModalFalse } = authSlice.actions;
export default authSlice.reducer;