import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BookingRemote } from "./adapter/repository/booking/booking_remote";
import { LocationRemote } from "./adapter/repository/location/location_remote";
import { MessRemote } from "./adapter/repository/mess/mess_remote";
import { RoomRemote } from "./adapter/repository/room/room_remote";
import { VoucherRemote } from "./adapter/repository/voucher/voucher_remote";
import { AuthApi } from "./adapter/service/auth/auth_api";
import { AxiosClient } from "./adapter/service/http/axios_client";
import { LocalRoute } from "./common/config/local_route";
import { AppInteractor } from "./domain/interactor/app_interactor";
import { AuthInteractor } from "./domain/interactor/auth_interactor";
import { BookingInteractor } from "./domain/interactor/booking_interactor";
import { LocationInteractor } from "./domain/interactor/location_interactor";
import { MessInteractor } from "./domain/interactor/mess_interactor";
import { RoomInteractor } from "./domain/interactor/room_interactor";
import { VoucherInteractor } from "./domain/interactor/voucher_interactor";
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

const appInteractor = new AppInteractor();
const http = new AxiosClient(appInteractor);
const authService = new AuthApi(http);
const messRepository = new MessRemote(http);
const roomRepository = new RoomRemote(http);
const locationRepository = new LocationRemote(http);
const bookingRepository = new BookingRemote(http);
const voucherRepository = new VoucherRemote(http);

const authInteractor = new AuthInteractor(authService, appInteractor);
const messIntractor = new MessInteractor(messRepository);
const roomInteractor = new RoomInteractor(roomRepository);
const locationInteractor = new LocationInteractor(locationRepository);
const bookingInteractor = new BookingInteractor(bookingRepository);
const voucherInteractor = new VoucherInteractor(voucherRepository);

const appPageDepencies = {
  appInteractor: appInteractor,
};

const authPageDependencies = {
  authInteractor: authInteractor,
};

const homePageDependencies = {
  messInteractor: messIntractor,
  roomInteractor: roomInteractor,
};

const messPageDependencies = {
  messInteractor: messIntractor,
  roomInteractor: roomInteractor,
  locationInteractor: locationInteractor,
};

const locationPageDependencies = {
  locationInteractor: locationInteractor,
  roomInteractor: roomInteractor,
};

const roomPageDependencies = {
  roomInteractor: roomInteractor,
  bookingInteractor: bookingInteractor,
  appInteractor: appInteractor,
};

const bookingPageDependencies = {
  bookingInteractor: bookingInteractor,
  appInteractor: appInteractor,
};

const voucherPageDependencies = {
  voucherInteractor: voucherInteractor,
};

const router = createBrowserRouter([
  {
    path: LocalRoute.root,
    element: <RootPage {...authPageDependencies} />,
    children: [
      {
        path: LocalRoute.guest,
        element: <GuestLoginPage {...authPageDependencies} />,
      },
      {
        path: LocalRoute.app,
        element: <AppPage {...appPageDepencies} />,
        children: [
          {
            path: LocalRoute.home,
            element: <HomePage {...homePageDependencies} />,
          },
          {
            path: LocalRoute.status,
            element: <StatusPage {...bookingPageDependencies} />,
          },
          {
            path: LocalRoute.voucher,
            element: <VcsPage {...voucherPageDependencies} />,
          },
          {
            path: LocalRoute.user,
            element: <UserPage authInteractor={authInteractor} />,
          },
        ],
      },
      {
        path: `${LocalRoute.mess}/:id`,
        element: <MessPage {...messPageDependencies} />,
      },
      {
        path: `${LocalRoute.location}/:id`,
        element: <LocationPage {...locationPageDependencies} />,
      },
      {
        path: `${LocalRoute.room}/:id`,
        element: <RoomPage {...roomPageDependencies} />,
      },
      {
        path: `${LocalRoute.book}/:id`,
        element: <BookingPage {...bookingPageDependencies} />,
      },
      {
        path: `${LocalRoute.vcs}/:id`,
        element: <VcsPage {...voucherPageDependencies} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
