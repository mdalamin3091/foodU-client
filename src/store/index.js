import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices"
import authReducer from "./auth/authSlice"
const store = configureStore({
    reducer: {
        [authServices.reducerPath]: authServices.reducer,
        auth:authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authServices.middleware])
})

export default store;