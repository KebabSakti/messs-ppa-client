import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LocalRoute } from "../../common/config/local_route";
import { AuthInteractor } from "../../domain/interactor/auth_interactor";
import ButtonComponent from "../component/ButtonComponent";

function UserPage({ authInteractor }: { authInteractor: AuthInteractor }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function logoutButtonOnPressed() {
    setLoading(true);
    await authInteractor.logout();
    navigate(LocalRoute.root, { replace: true });
  }

  return (
    <>
      <div className="overflow-auto h-screen flex flex-col">
        <div className="bg-surface rounded-lg p-3 flex flex-col items-center justify-center flex-1">
          <UserCircleIcon className="w-20 text-onBackground mb-4" />
          <p className="text-onBackground text-lg font-semibold">Julian Aryo</p>
          <p className="text-onBackground text-lg font-semibold mb-6">
            0012910190
          </p>
          <ButtonComponent
            className="bg-primary px-4 py-1 rounded-full text-onPrimary font-bold"
            text="LOGOUT"
            loading={loading}
            onClick={logoutButtonOnPressed}
          />
        </div>
      </div>
    </>
  );
}

export { UserPage };
