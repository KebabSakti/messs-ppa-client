import { VoucherModel } from "../../domain/entity/voucher_model";
import food from "../../assets/tteok.svg";

function VoucherCard({
  model,
  onClick,
}: {
  model: VoucherModel;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-lg bg-surface p-3 flex flex-col space-y-3"
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
        {model.expired ? (
          <p className="text-red-500 text-xs font-bold border border-red-500 rounded-full px-2 py-1">
            EXPIRED
          </p>
        ) : (
          <p className="text-green-500 text-xs font-bold border border-green-500 rounded-full px-2 py-1">
            AKTIF
          </p>
        )}
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
