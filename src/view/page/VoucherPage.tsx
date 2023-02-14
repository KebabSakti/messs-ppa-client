import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StateModel } from "../../domain/entity/state_model";
import { VoucherModel } from "../../domain/entity/voucher_model";
import { VoucherInteractor } from "../../domain/interactor/voucher_interactor";
import { VoucherCard, VoucherCardShimmer } from "../component/VoucherCard";

function VoucherPage(props: { voucherInteractor: VoucherInteractor }) {
  const [voucherData, setVoucherData] = useState<StateModel<VoucherModel[]>>({
    loading: true,
    data: [],
  });

  async function getVoucherData() {
    try {
      const results = await props.voucherInteractor.collections();

      setVoucherData({
        loading: false,
        data: results,
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

  function voucherOnClick(id: string) {
    //
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
        <div className="mx-4 my-16 space-y-4">
          {voucherData.loading
            ? [...Array(5)].map((_, i) => <VoucherCardShimmer key={i} />)
            : voucherData.data?.map((e) => (
                <VoucherCard key={e.id} model={e} onClick={() => {}} />
              ))}
        </div>
      </div>
    </>
  );
}

export { VoucherPage };
