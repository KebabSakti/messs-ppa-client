import { LuxonDatetime } from "../../common/helper/luxon_datetime";
import { BookingModel } from "../../domain/entity/booking_model";
import { StatusCard } from "./StatusCard";

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
        <p className="text-onBackground grow text-sm">Check-In</p>
        <p className="text-onBackground text-xs font-semibold">
          {LuxonDatetime.toHuman(model.checkin!)}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Check-Out</p>
        <p className="text-onBackground text-xs font-semibold">
          {model.checkout != null
            ? LuxonDatetime.toHuman(model.checkout!)
            : "-"}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Check-In Note</p>
        <p className="text-onBackground text-sm font-semibold">
          {model.checkinNote}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Check-Out Note</p>
        <p className="text-onBackground text-sm font-semibold">
          {model.checkoutNote}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Keterangan</p>
        <p className="text-onBackground text-sm font-semibold">{model.note ?? '-'}</p>
      </div>
      <div className="flex items-center">
        <p className="text-onBackground grow text-sm">Status</p>
        <StatusCard
          positive="Check-In"
          negative="Check-Out"
          status={model.checkout == null}
        />
      </div>
    </div>
  );
}

function BookingCardShimmer() {
  return (
    <div className="h-60 w-full rounded-lg bg-onSurfaceDarker animate-pulse" />
  );
}

export { BookingCard, BookingCardShimmer };
