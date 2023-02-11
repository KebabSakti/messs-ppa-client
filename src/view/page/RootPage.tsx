import { Outlet, useLocation } from "react-router";
import { Flip, ToastContainer } from "react-toastify";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import { LoginPage } from "./LoginPage";

function RootPage({ authInteractor }: { authInteractor: AuthInteractor }) {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        transition={Flip}
      />
      {location.pathname != "/" ? (
        <Outlet />
      ) : (
        <LoginPage authInteractor={authInteractor} />
      )}
    </>
  );
}

export { RootPage };

