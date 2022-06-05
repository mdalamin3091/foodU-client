import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices";
import uploadServices from "./services/authServices";
import authReducer from "./reducers/authSlice";
import drawerReducer from "./reducers/drawerSlice";
import userServices from "./services/userServices";
import productServices from "./services/productServices";
const Store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
    [userServices.reducerPath]: userServices.reducer,
    [uploadServices.reducerPath]: uploadServices.reducer,
    [productServices.reducerPath]: productServices.reducer,
    auth: authReducer,
    drawer: drawerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authServices.middleware,
      uploadServices.middleware,
      userServices.middleware,
      productServices.middleware,
    ]),
});

export default Store;
