import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";
import { MapCard, MapCardShimmer } from "../component/MapCard";

function RoomPage(props: { roomInteractor: RoomInteractor }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState<StateModel<RoomModel>>({
    loading: true,
    data: null,
  });

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

  function mapOnClick() {}

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
          <p className="text-onBackground text-xl font-semibold mx-auto">
            {roomData.loading
              ? "Loading.."
              : `${roomData.data?.name} - ${roomData.data?.location}`}
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
              <select className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none">
                <option>Off</option>
                <option>Cuti</option>
                <option>Over Shift</option>
              </select>
              <textarea
                placeholder="Catatan"
                className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
              />
              <ButtonComponent
                className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full"
                text="CHECK-IN"
                loading={false}
                onClick={() => {}}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { RoomPage };
