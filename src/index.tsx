import React from "react";

import reportWebVitals from "./conf/reportWebVitals";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";

import "./styles/index.scss";
import "normalize.css";
import {store} from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
