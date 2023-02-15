import food from "../../assets/tteok.svg";
import { VoucherModel } from "../../domain/entity/voucher_model";
import { StatusCard } from "./StatusCard";

function VoucherCard({
  model,
  onClick,
}: {
  model: VoucherModel;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-lg bg-surface p-3 flex flex-col space-y-3 cursor-pointer"
      onClick={() => onClick()}
    >
      <div className="flex space-x-4 items-center">
        <img src={food} className="w-16" />
        <div className="grow">
          <p className="text-onBackground font-semibold">Voucher Makan</p>
          <p className="text-onBackground text-xs">
            Tunjukkan voucher ke pihak resto untuk mendapatkan 1 kali makan
            gratis
          </p>
        </div>
        <StatusCard positive="AKTIF" negative="EXPIRED" status={model.used! == false} />
      </div>
      <p className="text-onSurfaceDarker text-xs text-right">
        Expired 13 Des 23
      </p>
    </div>
  );
}

function VoucherCardShimmer() {
  return (
    <div className="rounded-lg bg-onSurfaceDarker animate-pulse w-full h-32" />
  );
}

export { VoucherCard, VoucherCardShimmer };
