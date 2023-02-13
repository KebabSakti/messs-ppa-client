import { BackButton } from "../component/BackButton";
import food from "../../assets/tteok.svg";
import barcode from "../../assets/barcode-scanner.png";

function VcsPage() {
  return (
    <>
      <div className="bg-surfaceDarker h-screen">
        <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 items-center z-10">
          <BackButton />
          <p className="text-onBackground text-xl font-semibold mx-auto">
            VCS10201201
          </p>
        </div>
        <div className="h-full overflow-auto flex">
          <div className="w-full mt-16 mb-4 mx-4 space-y-4 bg-surface rounded-2xl flex flex-col items-center justify-center">
            <img src={food} className="w-28" />
            <p className="text-onBackground font-semibold text-lg text-center">
              VOUCHER MAKAN
            </p>
            <div className="divide-y-2 divide-dashed space-y-8 divide-onSurfaceDarker">
              <p className="text-onBackground text-center w-80">
                Gratis makan di resto mess, tunjukkan voucher ini ke pihak resto
                untuk mendapatkan 1x makan gratis.
              </p>
              <img src={barcode} alt="barcode" className="w-full h-40" />
            </div>
            <p className="text-green-500 text-2xl font-bold border-4 border-green-500 text-secondary rounded-full px-6 py-2 animate-pulse">
              VOUCHER AKTIF
            </p>
            <p className="text-onSurfaceDarker text-xs font-semibold text-right">
              Expired : 20 Des 2023 06:00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { VcsPage };
