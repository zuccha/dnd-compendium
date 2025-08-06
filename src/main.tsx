import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./theme/fonts.css";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./theme/theme-provider";
import { patchHistoryDispatch } from "./utils/history";

patchHistoryDispatch();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
