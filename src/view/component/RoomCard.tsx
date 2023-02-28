import { RemoteApi } from "../../common/config/remote_api";
import { RoomModel } from "../../domain/entity/room_model";
import { StatusCard } from "./StatusCard";

function RoomCard({
  model,
  onClick,
}: {
  model: RoomModel;
  onClick: () => void;
}) {
  return (
    <>
      <div
        className="flex flex-col rounded-2xl bg-surface h-60 cursor-pointer"
        onClick={() => onClick()}
      >
        <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl relative">
          <img
            src={RemoteApi.url + "static/" + model.picture}
            alt={model.name}
            className="absolute object-cover h-full w-full rounded-tl-2xl rounded-tr-2xl"
          />
          <StatusCard
            className="absolute bottom-2 right-2"
            positive="TERSEDIA"
            negative="PENUH"
            status={!model.full!}
          />
        </div>
        <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center text-center p-2">
          <p className="text-onBackground text-sm font-semibold">
            {model.mess}
          </p>
          <p className="text-onBackground text-sm">{model.name}</p>
          <p className="text-onBackground text-xs">({model.location})</p>
        </div>
      </div>
    </>
  );
}

function RoomCardShimmer() {
  return (
    <>
      <div className="flex flex-col rounded-2xl bg-onSurfaceDarker h-60 animate-pulse" />
    </>
  );
}

export { RoomCard, RoomCardShimmer };
