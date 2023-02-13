function MapCard({
  picture,
  name,
  onClick,
}: {
  picture: string;
  name: string;
  onClick: () => void;
}) {
  return (
    <img
      src={picture}
      alt={name}
      className="w-full h-60 object-cover bg-onSurfaceDarker rounded-2xl cursor-pointer"
      onClick={() => onClick()}
    />
  );
}

function MapCardShimmer() {
  return (
    <div className="w-full h-60 object-cover rounded-2xl bg-onSurfaceDarker animate-pulse" />
  );
}

export { MapCard, MapCardShimmer };
