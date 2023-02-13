import React from "react";
import { BackButton } from "../component/BackButton";
import ButtonComponent from "../component/ButtonComponent";

function BookingPage() {
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
          <div className="flex items-center">
            <p className="text-onBackground grow">Booking ID</p>
            <p className="text-onBackground font-semibold">BK001</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-IN</p>
            <p className="text-onBackground font-semibold">
              12 Des 23 / 6:00 PM
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Check-OUT</p>
            <p className="text-onBackground font-semibold">-</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Mess</p>
            <p className="text-onBackground font-semibold">Asoka</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Lokasi</p>
            <p className="text-onBackground font-semibold">Lantai 1</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Ruang</p>
            <p className="text-onBackground font-semibold">Kamar 01</p>
          </div>
          <div className="flex items-center">
            <p className="text-onBackground grow">Keterangan</p>
            <p className="text-onBackground font-semibold">Off</p>
          </div>
          <div className="border border-secondary w-full h-full max-h-28 rounded-lg p-2 overflow-auto">
            <p className="text-onBackground text-sm">
              Tidak ada catatan
            </p>
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
