import { SparklesIcon } from "@heroicons/react/24/outline";
import { LocationModel } from "../../domain/entity/location_model";

function LocationCard({
  model,
  onClick,
}: {
  model: LocationModel;
  onClick: () => void;
}) {
  return (
    <div
      className="p-2 h-14 bg-surface rounded-xl flex items-center space-x-2 cursor-pointer"
      onClick={() => onClick()}
    >
      <SparklesIcon className="w-6 text-secondary" />
      <p className="text-onBackground font-semibold flex-1">{model.name}</p>
      {model.available ? (
        <p className="text-xs font-bold border border-green-500 text-green-500 rounded-full px-2 py-1">
          TERSEDIA
        </p>
      ) : (
        <p className="text-xs font-bold border border-red-500 text-red-500 rounded-full px-2 py-1">
          PENUH
        </p>
      )}
    </div>
  );
}

function LocationShimmer() {
  return (
    <div className="h-14 w-full rounded-xl bg-onSurfaceDarker animate-pulse" />
  );
}

export { LocationCard, LocationShimmer };
