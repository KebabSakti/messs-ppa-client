import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";

function RoomPage() {
  return (
    <>
      <div className="h-screen">
        <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 items-center z-10">
          <BackButton />
          <p className="text-onBackground text-xl font-semibold mx-auto">
            Asoka - Lantai 1 / Room 1
          </p>
        </div>
        <div className="h-full overflow-auto pt-20 pb-4 px-4 space-y-3">
          <img
            src="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt="Room"
            className="w-full max-h-60 object-cover rounded-2xl"
          />
          <input
            type="text"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            value="Asoka"
            disabled
          />
          <input
            type="text"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            value="Lantai 1"
            disabled
          />
          <input
            type="text"
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            value="Room 01"
            disabled
          />
          <select
            className="py-3 px-5 rounded-xl w-full bg-surfaceDarker text-onSurface focus:outline-none"
            value="Room 01"
          >
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
      </div>
    </>
  );
}

export { RoomPage };
