import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BookingLocal } from "./adapter/repository/booking/booking_local";
import { LocationLocal } from "./adapter/repository/location/location_local";
import { MessLocal } from "./adapter/repository/mess/mess_local";
import { MessRemote } from "./adapter/repository/mess/mess_remote";
import { RoomLocal } from "./adapter/repository/room/room_local";
import { VoucherLocal } from "./adapter/repository/voucher/voucher_local";
import { AuthMock } from "./adapter/service/auth/auth_mock";
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
const authService = new AuthMock();
const messRepository = new MessLocal();
const roomRepository = new RoomLocal();
const locationRepository = new LocationLocal();
const bookingRepository = new BookingLocal();
const voucherRepository = new VoucherLocal();
const authInteractor = new AuthInteractor(authService, appInteractor);
const messIntractor = new MessInteractor(messRepository);
const roomInteractor = new RoomInteractor(roomRepository);
const locationInteractor = new LocationInteractor(locationRepository);
const bookingInteractor = new BookingInteractor(bookingRepository);
const voucherInteractor = new VoucherInteractor(voucherRepository);

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
};

const bookingPageDependencies = {
  bookingInteractor: bookingInteractor,
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
        element: <AppPage />,
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
            element: <VoucherPage {...voucherPageDependencies} />,
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
