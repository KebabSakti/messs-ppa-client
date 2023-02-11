import { Outlet } from "react-router";

function AppPage() {
  return (
    <>
      <div>App Page</div>
      <Outlet />
    </>
  );
}

export { AppPage };
