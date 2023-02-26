import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import barcode from "../../assets/barcode-scanner.png";
import food from "../../assets/tteok.svg";
import { LuxonDatetime } from "../../common/helper/luxon_datetime";
import { StateModel } from "../../domain/entity/state_model";
import { VoucherModel } from "../../domain/entity/voucher_model";
import { VoucherInteractor } from "../../domain/interactor/voucher_interactor";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";
import { EmptyCard } from "../component/EmptyCard";

function VcsPage(props: { voucherInteractor: VoucherInteractor }) {
  const { id } = useParams();
  const [voucherLoading, setVoucherLoading] = useState<boolean>(false);
  const [voucherData, setVoucherData] = useState<StateModel<VoucherModel>>({
    loading: true,
    data: null,
  });

  async function getVoucherData() {
    try {
      const results = await props.voucherInteractor.single();

      let data = null;

      if (results.id != undefined) {
        data = results;
      }

      setVoucherData({
        loading: false,
        data: data,
      });
    } catch (error: any) {
      setVoucherData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function useVoucher() {
    try {
      setVoucherLoading(true);

      await props.voucherInteractor.update("1", {});
      init();
    } catch (error: any) {
      setVoucherLoading(false);

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function voucherOnClick() {
    if (window.confirm("Voucher hanya bisa di pakai 1x, anda yakin?")) {
      useVoucher();
    }
  }

  async function init() {
    getVoucherData();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 z-10">
        <p className="text-onBackground text-xl font-semibold mx-auto">
          Voucher
        </p>
      </div>
      <div className="h-full overflow-auto">
        <div className="mx-4 my-16 space-y-4 h-4/5">
          {voucherData.data == null ? (
            <EmptyCard message="Anda tidak memiliki voucher" />
          ) : (
            <div className="p-4 space-y-4 bg-surface rounded-2xl flex flex-col items-center justify-center">
              <img src={food} className="w-28" />
              <p className="text-onBackground font-semibold text-lg text-center">
                VOUCHER MAKAN
              </p>
              <div className="divide-y-2 divide-dashed space-y-8 divide-onSurfaceDarker">
                <p className="text-onBackground text-center w-80">
                  Gratis makan di resto mess, tunjukkan voucher ini ke pihak
                  resto untuk mendapatkan 1x makan gratis.
                </p>
                <img src={barcode} alt="barcode" className="w-full h-40" />
              </div>
              <ButtonComponent
                className="bg-primary py-2 font-semibold text-onPrimary w-52 rounded-full"
                text="PAKAI VOUCHER"
                loading={voucherLoading}
                onClick={voucherOnClick}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { VcsPage };
