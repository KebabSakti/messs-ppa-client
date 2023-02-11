import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function ToastComponent({ show = false, message = "" }) {
  const [defaultShow, setDefaultShow] = useState(show);

  function closeButtonOnClick() {
    setDefaultShow(false);
  }

  return (
    <>
      <div
        className={`relative transition-all duration-500 ${
          defaultShow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute m-auto left-0 right-0 top-4 bg-surface drop-shadow p-4 rounded-xl mx-4">
          <div className="flex space-x-4  items-center">
            <ExclamationTriangleIcon className="w-10 text-secondary" />
            <p className="text-onSurface text-sm font-semibold w-full">
              {message}
            </p>
            <XMarkIcon
              className="w-8 cursor-pointer"
              onClick={closeButtonOnClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { ToastComponent };
