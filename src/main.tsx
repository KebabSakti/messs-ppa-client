import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "./view/page/LoginPage";
import { GuestLoginPage } from "./view/page/GuestLoginPage";
import { HomePage } from "./view/page/HomePage";
import { ProfilePage } from "./view/page/ProfilePage";
import { LayoutComponent } from "./view/component/LayoutComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { LocalRoute } from "./common/config/local_route";

const router = createBrowserRouter([
  {
    path: LocalRoute.employee,
    element: <LoginPage />,
  },
  {
    path: LocalRoute.guest,
    element: <GuestLoginPage />,
  },
  {
    path: LocalRoute.root,
    element: <LayoutComponent />,
    children: [
      {
        path: LocalRoute.home,
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
