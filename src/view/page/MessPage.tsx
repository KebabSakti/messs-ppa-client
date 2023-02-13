import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { LocalRoute } from "../../common/config/local_route";
import { LocationModel } from "../../domain/entity/location_model";
import { MessModel } from "../../domain/entity/mess_model";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { LocationInteractor } from "../../domain/interactor/location_interactor";
import { MessInteractor } from "../../domain/interactor/mess_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { BackButton } from "../component/BackButton";
import { LocationCard, LocationShimmer } from "../component/LocationCard";
import { MapCard, MapCardShimmer } from "../component/MapCard";
import { RoomCard, RoomCardShimmer } from "../component/RoomCard";

function MessPage(props: {
  messInteractor: MessInteractor;
  roomInteractor: RoomInteractor;
  locationInteractor: LocationInteractor;
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [messData, setMessData] = useState<StateModel<MessModel>>({
    loading: true,
    data: null,
  });

  const [locationData, setLocationData] = useState<StateModel<LocationModel[]>>(
    {
      loading: true,
      data: [],
    }
  );

  const [roomData, setRoomData] = useState<StateModel<RoomModel[]>>({
    loading: true,
    data: [],
  });

  async function getMessData() {
    try {
      const results = await props.messInteractor.single({ id: id });

      setMessData({
        loading: false,
        data: results,
      });
    } catch (error: any) {
      setMessData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function getLocationData() {
    try {
      const results = await props.locationInteractor.collections({
        messId: id,
      });

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
      const results = await props.roomInteractor.collections({ messId: id });

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

  function locationOnClick(id: string) {
    navigate(`${LocalRoute.location}/${id}`);
  }

  function roomOnClick(id: string): void {
    navigate(`${LocalRoute.room}/${id}`);
  }

  async function init() {
    getMessData();
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
          <p className="text-onBackground text-xl font-semibold mx-auto">
            {messData.loading ? "Loading.." : messData.data?.name}
          </p>
        </div>
        <div className="h-full overflow-auto pt-16 pb-4 px-4 space-y-4">
          <div>
            <p className="text-lg text-onBackground font-semibold mb-2">
              Denah Mess
            </p>
            {messData.loading ? (
              <MapCardShimmer />
            ) : (
              <MapCard
                picture={messData.data?.map!}
                name={messData.data?.name!}
                onClick={() => mapOnClick()}
              />
            )}
          </div>
          {locationData.loading
            ? [...Array(2)].map((_, i) => <LocationShimmer key={i} />)
            : locationData.data?.map((e) => (
                <LocationCard
                  key={e.id!}
                  model={e}
                  onClick={() => locationOnClick(e.id!)}
                />
              ))}
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

export { MessPage };
