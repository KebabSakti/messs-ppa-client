import logo from "../../assets/logo.png";

function HomePage() {
  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 space-x-2">
        <img src={logo} alt="logo" className="w-10" />
        <p className="text-primary font-bold text-lg">MESS AMM-ABP</p>
      </div>
      <div className="h-full overflow-auto py-16 space-y-4">
        <div className="ml-4">
          <p className="text-lg text-onBackground font-semibold mb-2">
            Daftar Mess
          </p>
          <div className="h-80 w-full overflow-auto no-scrollbar flex space-x-6 pr-5">
            {[...Array(10)].map((x, i) => (
              <div
                key={i}
                className="flex flex-col flex-none w-52 rounded-2xl bg-surface"
              >
                <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M"
                    alt="room"
                    className="object-cover h-full rounded-tl-2xl rounded-tr-2xl"
                  />
                </div>
                <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center">
                  <p className="text-onBackground font-semibold">Asoka</p>
                  <p className="text-onBackground">Tersedia 3 Kamar</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-4">
          <p className="text-lg text-onBackground font-semibold mb-2">
            Kamar Tersedia
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(10)].map((x, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl bg-surface h-60"
              >
                <div className="basis-2/3 rounded-tl-2xl rounded-tr-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M"
                    alt="room"
                    className="object-cover h-full rounded-tl-2xl rounded-tr-2xl"
                  />
                </div>
                <div className="basis-1/3 rounded-bl-2xl rounded-br-2xl flex flex-col items-center justify-center">
                  <p className="text-onBackground text-sm font-semibold">
                    Asoka
                  </p>
                  <p className="text-onBackground text-sm">Nomor : 01</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { HomePage };
