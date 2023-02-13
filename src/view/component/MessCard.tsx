import { MessModel } from "../../domain/entity/mess_model";

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
        <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl">
          <img
            src={model.picture}
            alt="mess"
            className="object-cover h-full rounded-tl-2xl rounded-tr-2xl"
          />
        </div>
        <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center space-y-2">
          <p className="text-onBackground font-semibold">{model.name}</p>
          {model.full ? (
            <p className="text-red-500 text-xs font-bold border border-red-500 text-red-500 rounded-full px-2 py-1">
              PENUH
            </p>
          ) : (
            <p className="text-green-500 text-xs font-bold border border-green-500 text-green-500 rounded-full px-2 py-1">
              TERSEDIA
            </p>
          )}
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
