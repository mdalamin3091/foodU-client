import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices"
const store = configureStore({
    reducer: {
        [authServices.reducerPath]: authServices.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authServices.middleware])
})

export default store;