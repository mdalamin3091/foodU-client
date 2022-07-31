import React from "react";
import ReactDOM from "react-dom/client";
import "./styled/index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer position="top-right" autoClose={1000} />
    </Provider>
  </React.StrictMode>
);
