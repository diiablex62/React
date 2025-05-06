import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import { router } from "./routes"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
