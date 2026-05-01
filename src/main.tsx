import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootEl = document.getElementById("root")!;

// Clear any static SEO content (it was only there for crawlers).
// React will replace it with the real interactive UI.
rootEl.innerHTML = "";

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
