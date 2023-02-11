import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthMock } from "./adapter/service/auth/auth_mock";
import { LocalRoute } from "./common/config/local_route";
import { AppInteractor } from "./domain/interactor/app_interactor";
import { AuthInteractor } from "./domain/interactor/auth_interactor";
import "./index.css";
import { AppPage } from "./view/page/AppPage";
import { GuestLoginPage } from "./view/page/GuestLoginPage";
import { HomePage } from "./view/page/HomePage";
import { RootPage } from "./view/page/RootPage";

const authService = new AuthMock();
const appInteractor = new AppInteractor();
const authInteractor = new AuthInteractor(authService, appInteractor);

const router = createBrowserRouter([
  {
    path: LocalRoute.root,
    element: <RootPage authInteractor={authInteractor} />,
    children: [
      {
        path: LocalRoute.guest,
        element: <GuestLoginPage authInteractor={authInteractor} />,
      },
      {
        path: LocalRoute.app,
        element: <AppPage />,
        children: [
          {
            path: LocalRoute.home,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
