import Joi from "joi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { BadRequest } from "../../common/error/bad_request";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { AppInteractor } from "../../domain/interactor/app_interactor";
import { BookingInteractor } from "../../domain/interactor/booking_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";
import { MapCard, MapCardShimmer } from "../component/MapCard";

function RoomPage(props: {
  roomInteractor: RoomInteractor;
  bookingInteractor: BookingInteractor;
  appInteractor: AppInteractor;
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const appConfig = props.appInteractor.config();

  const [inputs, setInputs] = useState({
    roomId: id,
    guest: false,
    checkinNote: "",
  });

  const [roomData, setRoomData] = useState<StateModel<RoomModel>>({
    loading: true,
    data: null,
  });

  const [bookingLoading, setBookingLoading] = useState<boolean>(false);

  async function getRoomData() {
    try {
      const results = await props.roomInteractor.single({ id: id });

      setRoomData({
        loading: false,
        data: results,
      });
    } catch (error: any) {
      setRoomData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function postBooking() {
    try {
      setBookingLoading(true);

      const scheme = Joi.object({
        checkinNote: Joi.string().required(),
      }).unknown();

      const { error } = scheme.validate(inputs);

      if (error != undefined) {
        throw new BadRequest("Keterangan tidak boleh kosong");
      }

      await props.bookingInteractor.store(inputs);

      toast.success("Checkin kamar berhasil", {
        toastId: 1,
      });

      navigate(-1);
    } catch (error: any) {
      setBookingLoading(false);

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function mapOnClick() {}

  function noteOnChange(event: any) {
    setInputs({
      ...inputs,
      checkinNote: event.target.value,
    });
  }

  function checkinOnClick() {
    postBooking();
  }

  async function init() {
    getRoomData();
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
            {/* {roomData.loading
              ? "Loading.."
              : `${roomData.data?.name} - ${roomData.data?.location}`} */}
            Detail Kamar
          </p>
        </div>
        <div className="h-full overflow-auto pt-20 pb-4 px-4 space-y-3">
          {roomData.loading ? (
            <MapCardShimmer />
          ) : (
            <MapCard
              picture={roomData.data?.picture!}
              name={roomData.data?.name!}
              onClick={() => mapOnClick()}
            />
          )}
          {roomData.loading ? (
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 rounded-xl w-full bg-onSurfaceDarker animate-pulse"
              />
            ))
          ) : (
            <div className="space-y-3">
              <input
                type="text"
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
                defaultValue={roomData.data?.mess}
                readOnly
              />
              <input
                type="text"
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
                defaultValue={roomData.data?.location}
                readOnly
              />
              <input
                type="text"
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
                defaultValue={roomData.data?.name}
                readOnly
              />
              <select
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none pb-4"
                onChange={noteOnChange}
                value={inputs.checkinNote}
              >
                <option> - Keterangan - </option>
                <option value="Karyawan Baru">Karyawan Baru</option>
                <option value="Datang Cuti">Datang Cuti</option>
                {appConfig?.employee == false && (
                  <option value="Tamu">Tamu</option>
                )}
              </select>
              {/* <textarea
                placeholder="Catatan"
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
              /> */}
              <ButtonComponent
                className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
                text="CHECK-IN"
                loading={bookingLoading}
                onClick={checkinOnClick}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { RoomPage };
