import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { LocalRoute } from "../../common/config/local_route";
import { MessModel } from "../../domain/entity/mess_model";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { MessInteractor } from "../../domain/interactor/mess_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";

function HomePage(props: {
  messInteractor: MessInteractor;
  roomInteractor: RoomInteractor;
}) {
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
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 space-x-2 z-10">
        <img src={logo} alt="logo" className="w-10" />
        <p className="text-primary font-bold text-lg">MESS AMM-ABP</p>
      </div>
      <div className="h-full overflow-auto py-16 space-y-4">
        <div className="ml-4">
          <p className="text-lg text-onBackground font-semibold mb-2">
            Daftar Mess
          </p>
          <div className="h-80 w-full overflow-auto no-scrollbar flex space-x-6 pr-5">
            {messData.loading
              ? [...Array(3)].map((e, i) => (
                  <div
                    key={i}
                    className="flex flex-col flex-none w-52 rounded-2xl bg-onSurfaceDarker animate-pulse"
                  />
                ))
              : messData.data!.map((e) => (
                  <Link
                    key={e.id}
                    to={`${LocalRoute.mess}/${e.id}`}
                    className="flex flex-col flex-none w-52 rounded-2xl bg-surface"
                  >
                    <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl">
                      <img
                        src={e.picture}
                        alt="mess"
                        className="object-cover h-full rounded-tl-2xl rounded-tr-2xl"
                      />
                    </div>
                    <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center space-y-2">
                      <p className="text-onBackground font-semibold">
                        {e.name}
                      </p>
                      {e.full ? (
                        <p className="text-onBackground text-xs font-bold border border-red-500 text-red-500 rounded-full px-2 py-1">
                          PENUH
                        </p>
                      ) : (
                        <p className="text-onBackground text-xs font-bold border border-green-500 text-green-500 rounded-full px-2 py-1">
                          TERSEDIA
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
          </div>
        </div>
        <div className="mx-4">
          <p className="text-lg text-onBackground font-semibold mb-2">
            Kamar Tersedia
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
    </>
  );
}

export { HomePage };
