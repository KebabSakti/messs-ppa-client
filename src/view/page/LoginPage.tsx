import { useState } from "react";
import { AuthMock } from "../../adapter/service/auth/auth_mock";
import logo from "../../assets/logo.png";
import { AppModel } from "../../domain/entity/app_model";
import { AppInteractor } from "../../domain/interactor/app_interactor";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import ButtonComponent from "../component/ButtonComponent";
import { ToastComponent } from "../component/ToastComponent";

const authService = new AuthMock();
const appInteractor = new AppInteractor();
const authInteractor = new AuthInteractor(authService, appInteractor);

interface StateModel<T> {
  loading: boolean;
  data?: T | null;
  error?: string | null;
}

function LoginPage() {
  const [results, setResults] = useState<StateModel<AppModel>>({
    loading: false,
  });

  async function authLogin() {
    setResults({
      loading: true,
    });

    await authInteractor.login({ username: "", password: "" });

    const conf = appInteractor.config();

    setResults({
      loading: false,
      data: conf,
    });

    alert(results.data?.auth);
  }

  function loginOnPressed(): void {
    authLogin();
  }

  return (
    <div>
      {results.error != null && (
        <ToastComponent show={true} message={results.error!} />
      )}
      <div
        className="flex flex-col h-screen justify-center 
items-center px-6"
      >
        <div className="flex flex-col w-full max-w-sm items-center space-y-10 mb-6">
          <img src={logo} alt="PPA LOGO" className="h-32" />
          <p className="text-2xl md:text-3xl font-semibold text-onBackground">
            Login Karyawan
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-6 w-full max-w-sm">
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface outline-none focus:outline-none"
          />
          <ButtonComponent
            text="LOGIN"
            loading={results.loading}
            onClick={loginOnPressed}
          />
          <p className="text-onBackground text-sm">Atau</p>
          <p className="text-onBackground">
            Klik di sini untuk masuk sebagai
            <a href="/guest" className="text-primary font-bold">
              {" "}
              tamu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
