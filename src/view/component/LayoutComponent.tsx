import { Outlet } from "react-router";

function LayoutComponent() {
  return (
    <>
      <div>NAVBAR</div>
      <Outlet />
    </>
  );
}

export { LayoutComponent };

