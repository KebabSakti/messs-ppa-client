import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { LocalRoute } from "../../common/config/local_route";
import { BadRequest } from "../../common/error/bad_request";
import { AppModel } from "../../domain/entity/app_model";
import { StateModel } from "../../domain/entity/state_model";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import ButtonComponent from "../component/ButtonComponent";

function GuestLoginPage({
  authInteractor,
}: {
  authInteractor: AuthInteractor;
}) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  });

  const [results, setResults] = useState<StateModel<AppModel>>({
    loading: false,
  });

  async function authLogin() {
    try {
      setResults({
        loading: true,
      });

      const scheme = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
      });

      const { error } = scheme.validate(inputs);

      if (error != undefined) {
        throw new BadRequest("Nama atau no hp tidak boleh kosong");
      }

      await authInteractor.login({
        name: inputs.name,
        phone: inputs.phone,
        employee: false,
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
    setInputs({ name: "", phone: "" });
  }

  function fieldOnChange(event: any) {
    const field = { ...inputs, [event.target.name]: event.target.value };
    setInputs(field);
  }

  function loginOnPressed(): void {
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
            Login Tamu
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-6 w-full md:max-w-sm">
          <input
            name="name"
            type="text"
            placeholder="Nama Lengkap"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface outline-none focus:outline-none"
            onChange={fieldOnChange}
            value={inputs.name}
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Nomor Hp"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            onChange={fieldOnChange}
            value={inputs.phone}
            required
          />
          <ButtonComponent
            className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
            text="LOGIN"
            loading={results.loading}
            onClick={loginOnPressed}
          />
        </div>
      </div>
    </div>
  );
}

export { GuestLoginPage };
