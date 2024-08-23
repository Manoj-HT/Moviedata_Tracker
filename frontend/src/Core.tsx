import GlobalStatesManager from "./global_states/GlobalStatesManager";
import TopNavigation from "./components/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyleMap } from "./types/types";

const Core = () => {
  const styles: StyleMap<CoreStyles> = {
    container: {
      width: "100vw",
      height: "100vh",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
    },
    outlet_wrapper: {
      height: "100%",
      overflow: "auto",
    },
  };

  const { pathname } = useLocation();
  const [isNavigation, setIsNavigation] = useState(true);
  useEffect(() => {
    setIsNavigation(getNavigationStateFromURL(pathname));
  }, [pathname]);

  return (
    <>
      <GlobalStatesManager>
        <div data-wrapper="Core" style={styles.container}>
          {isNavigation && <TopNavigation />}
          <div data-wrapper='page' style={styles.outlet_wrapper}>
            <Outlet />
          </div>
        </div>
      </GlobalStatesManager>
    </>
  );
};

export default Core;

function getNavigationStateFromURL(url: string): boolean {
  const currentPath = url.split("/")[1];
  const navigationDisablingPaths = ["login"];
  return !navigationDisablingPaths.includes(currentPath);
}

type CoreStyles = "container" | "outlet_wrapper";
