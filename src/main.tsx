import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import {App} from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <StrictMode>
      <CssBaseline/>
      <App />
    </StrictMode>
  </RelayEnvironmentProvider>
);
