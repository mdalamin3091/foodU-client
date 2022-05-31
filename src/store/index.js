import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices"
import authReducer from "./reducers/authSlice"
import drawerReducer from "./reducers/drawerSlice"
const store = configureStore({
    reducer: {
        [authServices.reducerPath]: authServices.reducer,
        auth:authReducer,
        drawer:drawerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authServices.middleware])
})

export default store;