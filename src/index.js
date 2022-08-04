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


// problem list
// 1. rating average
// 2. best deal rating not dynamic
// 3. product details page count not work with cart page
// 4. navbar responsive for mobile
// 5. user dashboard my order problem not rerender 
