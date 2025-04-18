import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { persistor, store } from "./app/store/index.js";
// import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
);
