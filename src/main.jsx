import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { FiltersProvider } from "./context/Filters.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <FiltersProvider>
          <BasketProvider>
          <App />
          </BasketProvider>
        </FiltersProvider>
      </WishlistProvider>
    </BrowserRouter>
  </StrictMode>,
);
