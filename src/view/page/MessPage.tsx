import { ArrowLeftIcon, BackwardIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router";

function MessPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  function onBackButtonPressed() {
    navigate(-1, { replace: true });
  }

  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 items-center">
        <ArrowLeftIcon
          className="w-6 text-onBackground"
          onClick={onBackButtonPressed}
        />
        <p className="text-onBackground text-xl font-semibold mx-auto">
          Asoka {id}
        </p>
      </div>
      <div className="h-full overflow-auto">
        <div className="mx-4 mt-16 space-y-4">asd</div>
      </div>
    </>
  );
}

export { MessPage };
