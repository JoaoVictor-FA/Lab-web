import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Edit from "./pages/Edit";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts/edit/:id",
    element: <Edit />,
  },
  {
    path: "/contacts/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);

