import food from "../../assets/tteok.svg";

function VoucherPage() {
  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4">
        <p className="text-onBackground text-xl font-semibold mx-auto">
          Voucher
        </p>
      </div>
      <div className="h-full overflow-auto">
        <div className="mx-4 my-16 space-y-4">
          {[...Array(10)].map((x, i) => (
            <div
              key={i}
              className="rounded-lg bg-surface p-3 flex flex-col space-y-3"
            >
              <div className="flex space-x-4 items-center">
                <img src={food} className="w-16" />
                <div className="grow">
                  <p className="text-onBackground font-semibold">
                    Voucher Makan
                  </p>
                  <p className="text-onBackground text-xs">
                    Tunjukkan voucher ke pihak resto untuk mendapatkan 1 kali
                    makan gratis
                  </p>
                </div>
                <p className="text-onBackground text-xs font-bold border border-secondary text-secondary rounded-full px-2 py-1">
                  AKTIF
                </p>
              </div>
              <p className="text-onSurfaceDarker text-xs text-right">
                Expired 13 Des 23
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { VoucherPage };
