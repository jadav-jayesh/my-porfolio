import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import theme from "./Config/theme";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/Store/configureStore";

const ThemedApp = () => {
  const themeData = useSelector((state) => state.auth.themeData);
  return (
    <ThemeProvider theme={theme(themeData)}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />);
reportWebVitals();
