import { BookingModel } from "../../domain/entity/booking_model";

function BookingCard({
  model,
  onClick,
}: {
  model: BookingModel;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-lg bg-surface p-3 flex flex-col space-y-2 cursor-pointer"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Mess</p>
        <p className="text-onBackground text-sm font-semibold">{model.mess}</p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Lokasi</p>
        <p className="text-onBackground text-sm font-semibold">
          {model.location}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Kamar</p>
        <p className="text-onBackground text-sm font-semibold">{model.room}</p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Keterangan</p>
        <p className="text-onBackground text-sm font-semibold">
          {model.description}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Check-In</p>
        <p className="text-onBackground text-xs font-semibold">
          {model.checkinDate}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Check-Out</p>
        <p className="text-onBackground text-sm font-semibold">
          {model.checkoutDate}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Catatan</p>
        <p className="text-onBackground text-sm font-semibold">{model.note}</p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Status</p>
        {model.checkin ? (
          <p className="text-green-500 text-xs font-bold border border-green-500 rounded-full px-2 py-1">
            Check-In
          </p>
        ) : (
          <p className="text-red-500 text-xs font-bold border border-red-500 rounded-full px-2 py-1">
            Check-Out
          </p>
        )}
      </div>
    </div>
  );
}

function BookingCardShimmer() {
  return <div className="h-60 w-full rounded-lg bg-onSurfaceDarker animate-pulse" />
}

export { BookingCard, BookingCardShimmer };
