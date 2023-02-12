function UserPage() {
  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 space-x-2">
        <p className="text-onBackground text-xl font-semibold mx-auto">User</p>
      </div>
      <div className="pb-14 h-full overflow-auto">
        <div className="flex flex-col space-y-4 mt-14">
          <div className="m-4">
            <div className="h-full w-full overflow-auto no-scrollbar"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { UserPage };
