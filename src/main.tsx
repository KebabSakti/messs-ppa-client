import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { LocationLocal } from "./adapter/repository/location/location_local";
import { MessLocal } from "./adapter/repository/mess/mess_local";
import { RoomLocal } from "./adapter/repository/room/room_local";
import { AuthMock } from "./adapter/service/auth/auth_mock";
import { LocalRoute } from "./common/config/local_route";
import { AppInteractor } from "./domain/interactor/app_interactor";
import { AuthInteractor } from "./domain/interactor/auth_interactor";
import { LocationInteractor } from "./domain/interactor/location_interactor";
import { MessInteractor } from "./domain/interactor/mess_interactor";
import { RoomInteractor } from "./domain/interactor/room_interactor";
import "./index.css";
import { AppPage } from "./view/page/AppPage";
import { BookingPage } from "./view/page/BookingPage";
import { GuestLoginPage } from "./view/page/GuestLoginPage";
import { HomePage } from "./view/page/HomePage";
import { LocationPage } from "./view/page/LocationPage";
import { MessPage } from "./view/page/MessPage";
import { RoomPage } from "./view/page/RoomPage";
import { RootPage } from "./view/page/RootPage";
import { StatusPage } from "./view/page/StatusPage";
import { UserPage } from "./view/page/UserPage";
import { VcsPage } from "./view/page/VcsPage";
import { VoucherPage } from "./view/page/VoucherPage";

const authService = new AuthMock();
const messRepository = new MessLocal();
const roomRepository = new RoomLocal();
const locationRepository = new LocationLocal();

const appInteractor = new AppInteractor();
const authInteractor = new AuthInteractor(authService, appInteractor);
const messIntractor = new MessInteractor(messRepository);
const roomInteractor = new RoomInteractor(roomRepository);
const locationInteractor = new LocationInteractor(locationRepository);

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
  locationInteractor: locationInteractor,
};

const locationPageDepencies = {
  locationInteractor: locationInteractor,
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
        element: <LocationPage {...locationPageDepencies} />,
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
