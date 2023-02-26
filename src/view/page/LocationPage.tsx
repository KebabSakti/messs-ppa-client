import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { LocalRoute } from "../../common/config/local_route";
import { LocationModel } from "../../domain/entity/location_model";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { LocationInteractor } from "../../domain/interactor/location_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { BackButton } from "../component/BackButton";
import { MapCard, MapCardShimmer } from "../component/MapCard";
import { RoomCard, RoomCardShimmer } from "../component/RoomCard";

function LocationPage(props: {
  locationInteractor: LocationInteractor;
  roomInteractor: RoomInteractor;
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [locationData, setLocationData] = useState<StateModel<LocationModel>>({
    loading: true,
    data: null,
  });

  const [roomData, setRoomData] = useState<StateModel<RoomModel[]>>({
    loading: true,
    data: [],
  });

  async function getLocationData() {
    try {
      const results = await props.locationInteractor.single({ id: id });

      setLocationData({
        loading: false,
        data: results,
      });
    } catch (error: any) {
      setLocationData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function getRoomData() {
    try {
      const results = await props.roomInteractor.collections();

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

  function roomOnClick(id: string): void {
    navigate(`${LocalRoute.room}/${id}`);
  }

  function mapOnClick() {}

  async function init() {
    getLocationData();
    getRoomData();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="bg-surfaceDarker h-screen">
        <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 items-center z-10">
          <BackButton />
          <p className="text-onBackground text-lg text-center font-semibold mx-auto">
            {/* {locationData.loading
              ? "Loading.."
              : `${locationData.data?.inn} - ${locationData.data?.name}`} */}
              Detail Lokasi
          </p>
        </div>
        <div className="h-full overflow-auto pt-16 pb-4 px-4 space-y-4">
          <div>
            <p className="text-lg text-onBackground font-semibold mb-2">
              Denah
            </p>
            {locationData.loading ? (
              <MapCardShimmer />
            ) : (
              <MapCard
                picture={locationData.data?.map!}
                name={locationData.data?.name!}
                onClick={() => mapOnClick()}
              />
            )}
          </div>
          <div>
            <p className="text-lg text-onBackground font-semibold mb-2">
              Daftar Kamar
            </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-4">
              {roomData.loading
                ? [...Array(6)].map((_, i) => <RoomCardShimmer key={i} />)
                : roomData.data!.map((e) => (
                    <RoomCard
                      key={e.id}
                      model={e}
                      onClick={() => roomOnClick(e.id!)}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { LocationPage };

