import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LocalRoute } from "../../common/config/local_route";
import { MessModel } from "../../domain/entity/mess_model";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { MessInteractor } from "../../domain/interactor/mess_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { BackButton } from "../component/BackButton";

function LocationPage(props: {
  messInteractor: MessInteractor;
  roomInteractor: RoomInteractor;
}) {
  const { id } = useParams();
  const [messData, setMessData] = useState<StateModel<MessModel[]>>({
    loading: true,
    data: [],
  });

  const [roomData, setRoomData] = useState<StateModel<RoomModel[]>>({
    loading: true,
    data: [],
  });

  async function getMessData() {
    try {
      const results = await props.messInteractor.collections();

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

  async function init() {
    getMessData();
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
            Asoka - Lantai 1
          </p>
        </div>
        <div className="h-full overflow-auto pt-16 pb-4 px-4 space-y-4">
          <div>
            <p className="text-lg text-onBackground font-semibold mb-2">
              Denah Lantai 1
            </p>
            <img
              src="http://2.bp.blogspot.com/-Hc_WroB0OB8/VqI6A5hmDMI/AAAAAAAAIiI/etP_Y8dYkLA/s1600/denahsituasi.jpg"
              alt="Denah Mess"
              className="w-full max-h-60 object-cover rounded-2xl"
            />
          </div>
          <div>
            <p className="text-lg text-onBackground font-semibold mb-2">
              Daftar Kamar
            </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {roomData.loading
                ? [...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col rounded-2xl bg-onSurfaceDarker h-60 animate-pulse"
                    />
                  ))
                : roomData.data!.map((e) => (
                    <Link
                      key={e.id}
                      to={`${LocalRoute.room}/${e.id}`}
                      className="flex flex-col rounded-2xl bg-surface h-60"
                    >
                      <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl">
                        <img
                          src={e.picture}
                          alt={e.name}
                          className="object-cover h-full rounded-tl-2xl rounded-tr-2xl"
                        />
                      </div>
                      <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center">
                        <p className="text-onBackground text-sm font-semibold">
                          {e.mess}
                        </p>
                        <p className="text-onBackground text-sm">{e.name}</p>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { LocationPage };
