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
import { StatusPage } from "./view/page/StatusPage";
import { RootPage } from "./view/page/RootPage";
import { VoucherPage } from "./view/page/VoucherPage";
import { UserPage } from "./view/page/UserPage";
import { MessPage } from "./view/page/MessPage";
import { MessLocal } from "./adapter/repository/mess/mess_local";
import { MessInteractor } from "./domain/interactor/mess_interactor";
import { RoomLocal } from "./adapter/repository/room/room_local";
import { RoomInteractor } from "./domain/interactor/room_interactor";
import { LocationPage } from "./view/page/LocationPage";
import { RoomPage } from "./view/page/RoomPage";
import { BookingPage } from "./view/page/BookingPage";
import { VcsPage } from "./view/page/VcsPage";

const authService = new AuthMock();
const messRepository = new MessLocal();
const roomRepository = new RoomLocal();

const appInteractor = new AppInteractor();
const authInteractor = new AuthInteractor(authService, appInteractor);
const messIntractor = new MessInteractor(messRepository);
const roomInteractor = new RoomInteractor(roomRepository);

const authPageDepencies = {
  authInteractor: authInteractor,
};

const homePageDepencies = {
  messInteractor: messIntractor,
  roomInteractor: roomInteractor,
};

const messPageDepencies = {
  messInteractor: messIntractor,
  roomInteractor: roomInteractor,
};

const router = createBrowserRouter([
  {
    path: LocalRoute.root,
    element: <RootPage {...authPageDepencies} />,
    children: [
      {
        path: LocalRoute.guest,
        element: <GuestLoginPage {...authPageDepencies} />,
      },
      {
        path: LocalRoute.app,
        element: <AppPage />,
        children: [
          {
            path: LocalRoute.home,
            element: <HomePage {...homePageDepencies} />,
          },
          {
            path: LocalRoute.status,
            element: <StatusPage />,
          },
          {
            path: LocalRoute.voucher,
            element: <VoucherPage />,
          },
          {
            path: LocalRoute.user,
            element: <UserPage authInteractor={authInteractor} />,
          },
        ],
      },
      {
        path: `${LocalRoute.mess}/:id`,
        element: <MessPage {...messPageDepencies} />,
      },
      {
        path: `${LocalRoute.location}/:id`,
        element: <LocationPage {...messPageDepencies} />,
      },
      {
        path: `${LocalRoute.room}/:id`,
        element: <RoomPage />,
      },
      {
        path: `${LocalRoute.book}/:id`,
        element: <BookingPage />,
      },
      {
        path: `${LocalRoute.vcs}/:id`,
        element: <VcsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
