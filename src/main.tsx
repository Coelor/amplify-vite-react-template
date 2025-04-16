import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Authenticator>
        <App />
      </Authenticator>
    </Provider>
  </React.StrictMode>
);
