import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { LocalRoute } from "../../common/config/local_route";
import { AppModel } from "../../domain/entity/app_model";
import { StateModel } from "../../domain/entity/state_model";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import ButtonComponent from "../component/ButtonComponent";

function LoginPage({ authInteractor }: { authInteractor: AuthInteractor }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [results, setResults] = useState<StateModel<AppModel>>({
    loading: false,
  });

  async function authLogin() {
    try {
      setResults({
        loading: true,
      });

      await authInteractor.login({
        username: inputs.username,
        password: inputs.password,
        employee: true,
      });

      navigate(LocalRoute.home, { replace: true });
    } catch (error: any) {
      clearInputs();

      setResults({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function clearInputs() {
    setInputs({ username: "", password: "" });
  }

  function fieldOnChange(event: any) {
    const field = { ...inputs, [event.target.name]: event.target.value };
    setInputs(field);
  }

  function loginOnPressed(): void {
    if (inputs.username.length == 0 || inputs.password.length == 0) {
      clearInputs();

      toast.warn("NRP atau password tidak boleh kosong", {
        toastId: 1,
      });

      return;
    }

    authLogin();
  }

  return (
    <div>
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
        <div className="flex flex-col items-center space-y-4 mb-6 w-full md:max-w-sm">
          <input
            name="username"
            type="text"
            placeholder="NRP"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            onChange={fieldOnChange}
            value={inputs.username}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface outline-none focus:outline-none"
            onChange={fieldOnChange}
            value={inputs.password}
            required
          />
          <ButtonComponent
            className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
            text="LOGIN"
            loading={results.loading}
            onClick={loginOnPressed}
          />
          <p className="text-onBackground text-sm">Atau</p>
          <p className="text-onBackground">
            Klik di sini untuk masuk sebagai
            <Link to="/guest" className="text-primary font-bold">
              {" "}
              tamu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
