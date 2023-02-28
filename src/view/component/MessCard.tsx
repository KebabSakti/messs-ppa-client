import { RemoteApi } from "../../common/config/remote_api";
import { MessModel } from "../../domain/entity/mess_model";
import { StatusCard } from "./StatusCard";

function MessCard({
  model,
  onClick,
}: {
  model: MessModel;
  onClick: () => void;
}) {
  return (
    <>
      <div
        className="flex flex-col flex-none w-52 rounded-2xl bg-surface cursor-pointer"
        onClick={() => onClick()}
      >
        <div className="basis-4/5 rounded-tl-2xl rounded-tr-2xl relative">
          <img
            src={RemoteApi.url + "static/" + model.picture}
            alt="mess"
            className="absolute object-cover h-full w-full rounded-tl-2xl rounded-tr-2xl"
          />
          {/* <StatusCard
            className="absolute bottom-2 right-2"
            positive="TERSEDIA"
            negative="PENUH"
            status={model.full!}
          /> */}
        </div>
        <div className="basis-1/5 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center space-y-2 px-2">
          <p className="text-onBackground font-semibold text-center">
            {model.name}
          </p>
        </div>
      </div>
    </>
  );
}

function MessCardShimmer() {
  return (
    <>
      <div className="flex flex-col flex-none w-52 rounded-2xl bg-onSurfaceDarker animate-pulse" />
    </>
  );
}

export { MessCard, MessCardShimmer };
