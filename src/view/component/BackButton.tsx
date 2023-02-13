import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  function onBackButtonPressed() {
    navigate(-1);
  }

  return (
    <>
      <ArrowLeftIcon
        className="w-6 text-onBackground cursor-pointer"
        onClick={onBackButtonPressed}
      />
    </>
  );
}

export { BackButton };
