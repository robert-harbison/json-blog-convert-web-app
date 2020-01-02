import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { ThemeProvider } from "styled-components";
import "./index.css";

/**
 * Styled components theme.
 */
const theme = {
  fieldBorderRadius: "3px",
  fieldBorderColor: "#d5d5d5"
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
