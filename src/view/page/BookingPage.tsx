import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { LocalRoute } from "../../common/config/local_route";
import { BookingModel } from "../../domain/entity/booking_model";
import { StateModel } from "../../domain/entity/state_model";
import { BookingInteractor } from "../../domain/interactor/booking_interactor";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";
import { MapCard, MapCardShimmer } from "../component/MapCard";

function BookingPage(props: { bookingInteractor: BookingInteractor }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState<StateModel<BookingModel>>({
    loading: true,
    data: null,
  });

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
          <p className="text-onBackground text-xl font-semibold mx-auto">
            {bookingData.loading
              ? "Loading.."
              : `${bookingData.data?.mess} - ${bookingData.data?.location} / ${bookingData.data?.room}`}{" "}
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
            <p className="text-onBackground font-semibold">{bookingData.data?.id}</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-IN</p>
            <p className="text-onBackground font-semibold">
            {bookingData.data?.checkinDate}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-OUT</p>
            <p className="text-onBackground font-semibold">{bookingData.data?.checkoutDate}</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Mess</p>
            <p className="text-onBackground font-semibold">{bookingData.data?.mess}</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Lokasi</p>
            <p className="text-onBackground font-semibold">{bookingData.data?.location}</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Ruang</p>
            <p className="text-onBackground font-semibold">{bookingData.data?.room}</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Keterangan</p>
            <p className="text-onBackground font-semibold">{bookingData.data?.description}</p>
          </div>
          <div className="border border-secondary w-full h-full max-h-28 rounded-lg p-2 overflow-auto">
            <p className="text-onBackground text-sm">Tidak ada catatan</p>
          </div>
          <ButtonComponent
            className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
            text="CHECK-OUT"
            loading={false}
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export { BookingPage };
