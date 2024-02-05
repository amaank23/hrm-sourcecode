import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import themeConfig from "./config/themeConfig.js";
import { Provider } from "react-redux";
import store from './redux/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
