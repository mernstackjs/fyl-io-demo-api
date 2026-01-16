import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProviderCar from "./context/store_cars.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderCar>
        <App />
      </ProviderCar>
    </BrowserRouter>
  </StrictMode>
);
