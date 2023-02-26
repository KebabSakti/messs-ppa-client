import Joi from "joi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { BadRequest } from "../../common/error/bad_request";
import { LuxonDatetime } from "../../common/helper/luxon_datetime";
import { BookingModel } from "../../domain/entity/booking_model";
import { StateModel } from "../../domain/entity/state_model";
import { AppInteractor } from "../../domain/interactor/app_interactor";
import { BookingInteractor } from "../../domain/interactor/booking_interactor";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";
import { MapCard, MapCardShimmer } from "../component/MapCard";
import empty from "../../assets/empty.png";

function BookingPage(props: {
  bookingInteractor: BookingInteractor;
  appInteractor: AppInteractor;
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const appConfig = props.appInteractor.config();

  const [bookingData, setBookingData] = useState<StateModel<BookingModel>>({
    loading: true,
    data: null,
  });

  const [inputs, setInputs] = useState({
    id: id,
    guest: false,
    checkoutNote: "",
    note: "",
  });

  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);

  async function getBookingData() {
    try {
      const results = await props.bookingInteractor.single({ id: id });

      setBookingData({
        loading: false,
        data: results,
      });
    } catch (error: any) {
      setBookingData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function checkout() {
    try {
      setCheckoutLoading(true);

      let extraScheme = {};

      if (inputs.checkoutNote == "Cuti" || inputs.checkoutNote == "Lainnya") {
        extraScheme = {
          note: Joi.string().required(),
        };
      }

      const scheme = Joi.object({
        ...extraScheme,
        checkoutNote: Joi.string().required(),
      }).unknown();

      const { error } = scheme.validate(inputs);

      if (error != undefined) {
        throw new BadRequest("Isi semua field yang disediakan");
      }

      await props.bookingInteractor.update(id!, inputs);

      toast.success("Checkout kamar berhasil", {
        toastId: 1,
      });

      navigate(-1);
    } catch (error: any) {
      setCheckoutLoading(false);

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function noteOnChange(event: any) {
    setInputs({
      ...inputs,
      checkoutNote: event.target.value,
    });
  }

  function cutiOnChange(event: any) {
    setInputs({
      ...inputs,
      note: event.target.value,
    });
  }

  function checkoutOnClick() {
    checkout();
  }

  async function init() {
    getBookingData();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 items-center z-10">
          <BackButton />
          <p className="text-onBackground text-lg text-center font-semibold mx-auto">
            Detail Check-In
          </p>
        </div>
        <div className="h-full overflow-auto pt-16 pb-2 px-4 space-y-3">
          {bookingData.loading ? (
            <MapCardShimmer />
          ) : (
            <MapCard
              picture={bookingData.data?.picture!}
              name={bookingData.data?.room!}
              onClick={() => {}}
            />
          )}
          <div className="flex items-center">
            <p className="text-onBackground grow">Booking ID</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.bookingId}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-IN</p>
            <p className="text-onBackground font-semibold">
              {LuxonDatetime.toHuman(bookingData.data?.checkin!)}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-OUT</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.checkout != null
                ? LuxonDatetime.toHuman(bookingData.data.checkout!)
                : "-"}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Mess</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.mess}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Lokasi</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.location}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Kamar</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.room}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-In Note</p>
            <p className="text-onBackground font-semibold">
              {bookingData.data?.checkinNote}
            </p>
          </div>
          {bookingData.data?.checkout == null ? (
            <select
              className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none pb-4"
              onChange={noteOnChange}
              value={inputs.checkoutNote}
            >
              <option> - Keterangan Checkout - </option>
              <option value="Cuti">Cuti</option>
              <option value="Resign">Resign</option>
              <option value="Mutasi">Mutasi</option>
              {appConfig?.employee == false && (
                <option value="Tamu">Tamu</option>
              )}
              <option value="Lainnya">Lainnya</option>
            </select>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center">
                <p className="text-onBackground grow">Check-Out Note</p>
                <p className="text-onBackground font-semibold">
                  {bookingData.data?.checkoutNote ?? "-"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow">Keterangan</p>
                <p className="text-onBackground font-semibold">
                  {bookingData.data?.note}
                </p>
              </div>
            </div>
          )}

          {inputs.checkoutNote == "Cuti" && (
            <input
              className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none pb-4"
              type="number"
              min={0}
              placeholder="Berapa hari cuti"
              onChange={cutiOnChange}
              value={inputs.note}
            />
          )}

          {inputs.checkoutNote == "Lainnya" && (
            <input
              className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none pb-4"
              min={0}
              placeholder="Keterangan checkout"
              onChange={cutiOnChange}
              value={inputs.note}
            />
          )}

          {bookingData.data?.checkout == null && (
            <ButtonComponent
              className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
              text="CHECK-OUT"
              loading={checkoutLoading}
              onClick={checkoutOnClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

export { BookingPage };
