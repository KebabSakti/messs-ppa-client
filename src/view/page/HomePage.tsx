import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { LocalRoute } from "../../common/config/local_route";
import { MessModel } from "../../domain/entity/mess_model";
import { RoomModel } from "../../domain/entity/room_model";
import { StateModel } from "../../domain/entity/state_model";
import { MessInteractor } from "../../domain/interactor/mess_interactor";
import { RoomInteractor } from "../../domain/interactor/room_interactor";
import { MessCard, MessCardShimmer } from "../component/MessCard";
import { RoomCard, RoomCardShimmer } from "../component/RoomCard";

function HomePage(props: {
  messInteractor: MessInteractor;
  roomInteractor: RoomInteractor;
}) {
  const navigate = useNavigate();

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

      setMessData({ ...messData, loading: false, data: results });
    } catch (error: any) {
      setMessData({ ...messData, loading: false, error: error.message });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  async function getRoomData() {
    try {
      const results = await props.roomInteractor.collections();

      setRoomData({ ...roomData, loading: false, data: results });
    } catch (error: any) {
      setRoomData({
        ...roomData,
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function messOnClick(id: string): void {
    navigate(`${LocalRoute.mess}/${id}`);
  }

  function roomOnClick(id: string): void {
    navigate(`${LocalRoute.room}/${id}`);
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
              ? [...Array(3)].map((_, i) => <MessCardShimmer key={i} />)
              : messData.data!.map((e) => (
                  <MessCard
                    key={e.id}
                    model={e}
                    onClick={() => messOnClick(e.id!)}
                  />
                ))}
          </div>
        </div>
        <div className="mx-4">
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
    </>
  );
}

export { HomePage };
