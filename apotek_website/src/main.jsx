import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="bottom-center"
        richColors
        toastOptions={{
          style: { marginBottom: "1.5rem" },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
