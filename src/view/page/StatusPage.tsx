import React from "react";

function StatusPage() {
  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4">
        <p className="text-onBackground text-xl font-semibold mx-auto">
          Status
        </p>
      </div>
      <div className="h-full overflow-auto">
        <div className="mx-4 my-16 space-y-4">
          {[...Array(10)].map((x, i) => (
            <div
              key={i}
              className="rounded-lg bg-surface p-3 flex flex-col space-y-2"
            >
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Mess</p>
                <p className="text-onBackground text-sm font-semibold">Asoka</p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Kamar</p>
                <p className="text-onBackground text-sm font-semibold">001</p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Check-In</p>
                <p className="text-onBackground text-xs font-semibold">
                  12 Des 23 / 6:00 PM
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Check-Out</p>
                <p className="text-onBackground text-sm font-semibold">-</p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Catatan</p>
                <p className="text-onBackground text-sm font-semibold">Over Shift</p>
              </div>
              <div className="flex items-center">
                <p className="text-onBackground grow text-sm">Status</p>
                <p className="text-onBackground text-xs font-bold border border-secondary text-secondary rounded-full px-2 py-1">
                  Check-In
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { StatusPage };
