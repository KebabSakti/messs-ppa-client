import {
  ClipboardDocumentListIcon,
  CreditCardIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { LocalRoute } from "../../common/config/local_route";

function AppPage() {
  const location = useLocation();
  const [menus, setMenus] = useState([
    {
      name: "Home",
      link: LocalRoute.home,
      icon: HomeIcon,
      active: false,
    },
    {
      name: "Status",
      link: LocalRoute.status,
      icon: ClipboardDocumentListIcon,
      active: false,
    },
    {
      name: "Voucher",
      link: LocalRoute.voucher,
      icon: CreditCardIcon,
      active: false,
    },
    {
      name: "User",
      link: LocalRoute.user,
      icon: UserCircleIcon,
      active: false,
    },
  ]);

  function setActiveNav() {
    const updatedMenus = menus.map((element) => {
      const active = element.link == location.pathname;

      return { ...element, active: active };
    });

    setMenus(updatedMenus);
  }

  useEffect(() => {
    setActiveNav();
  }, [location]);

  return (
    <>
      <div className="w-full h-screen bg-surfaceDarker">
        <Outlet />
        <div className="px-4 drop-shadow h-14 w-full bg-surface fixed bottom-0 flex space-x-10">
          {menus.map((element) => {
            const MenuIcon = element.icon;
            const active = element.active ? "primary" : "onBackground";
            return (
              <Link
                key={element.link}
                to={element.link}
                replace={true}
                className="basis-1/4 flex flex-col items-center justify-center"
              >
                <MenuIcon className={`text-${active} w-7`} />
                <p className={`text-${active} font-semibold text-sm`}>
                  {element.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { AppPage };
