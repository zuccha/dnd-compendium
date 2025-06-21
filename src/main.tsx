import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import { Provider } from "./components/ui/provider";
import "./styles/fonts.css";
import I18nLanguageProvider from "./i18n/i18n-language-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <I18nLanguageProvider>
        <App />
      </I18nLanguageProvider>
    </Provider>
  </StrictMode>
);
