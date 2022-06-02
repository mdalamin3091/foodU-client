import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices"
import uploadServices from "./services/authServices"
import authReducer from "./reducers/authSlice"
import drawerReducer from "./reducers/drawerSlice"
const Store = configureStore({
    reducer: {
        [authServices.reducerPath]: authServices.reducer,
        [uploadServices.reducerPath]: uploadServices.reducer,
        auth:authReducer,
        drawer:drawerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authServices.middleware, uploadServices.middleware])
})

export default Store;