import { createSlice } from "@reduxjs/toolkit";
const getToken = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    showModal: false,
    token: getToken ? getToken : null,
    user: user ? user : null,
  },
  reducers: {
    showModalTrue: (state, { payload }) => {
      state.showModal = payload;
    },
    showModalFalse: (state, { payload }) => {
      state.showModal = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { showModalTrue, showModalFalse, setToken, setUser } =
  authSlice.actions;
export default authSlice.reducer;
