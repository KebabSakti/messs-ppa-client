import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "./view/page/LoginPage";
import { HomePage } from "./view/page/HomePage";
import { ProfilePage } from "./view/page/ProfilePage";
import { LayoutComponent } from "./view/component/LayoutComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/app",
    element: <LayoutComponent />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
