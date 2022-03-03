import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);

reportWebVitals();
