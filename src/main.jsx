import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { FiltersProvider } from "./context/Filters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </BrowserRouter>
  </StrictMode>,
);
