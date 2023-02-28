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
import { AppInteractor } from "../../domain/interactor/app_interactor";
import WA from "../../assets/whatsapp.png";
import { StateModel } from "../../domain/entity/state_model";
import { ConfigModel } from "../../domain/entity/config_model";
import { ConfigInteractor } from "../../domain/interactor/config_interactor";

function AppPage(props: {
  appInteractor: AppInteractor;
  configInteractor: ConfigInteractor;
}) {
  const location = useLocation();
  const appConfig = props.appInteractor.config();
  const [single, setSingle] = useState<StateModel<ConfigModel>>({
    loading: false,
    data: null,
  });
  const [menus, setMenus] = useState([
    {
      name: "Home",
      link: LocalRoute.home,
      icon: HomeIcon,
      active: false,
    },
    {
      name: "Booking",
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

  async function getSingle() {
    props.configInteractor
      .single({ key: "whatsapp" })
      .then((results) => {
        setSingle({ ...single, data: results });
      })
      .catch((error) => {
        setSingle({ ...single, error: error.message });
      });
  }

  function setActiveNav() {
    const updatedMenus = menus.map((element) => {
      const active = element.link == location.pathname;

      return { ...element, active: active };
    });

    setMenus(updatedMenus);
  }

  function initNav() {
    if (appConfig?.employee == false) {
      const newMenu = menus.filter((e) => {
        return e.name != "Voucher";
      });

      setMenus(newMenu);
    }

    setActiveNav();
  }

  function init() {
    initNav();
    getSingle();
  }

  useEffect(() => {
    init();
  }, [location]);

  return (
    <>
      <div className="w-full h-screen bg-surfaceDarker">
        {single.data != null && (
          <div className="absolute bottom-16 right-2 z-10">
            <a href={`https://wa.me/${single.data.value}`} target="_blank">
              <img src={WA} alt="whatsapp" className="w-10 h-10" />
            </a>
          </div>
        )}
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
