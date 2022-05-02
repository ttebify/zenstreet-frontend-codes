import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import useAuthContext from "../hooks/useAuthContext";
import { useLocation, Redirect } from "@reach/router";
import Sidenav from "../components/Sidenav/Sidenav";
import Scrollbar from "react-perfect-scrollbar";
import useSettings from "../hooks/useSettings";
import cls from "classnames";
import Topbar from "../components/Topbar/Topbar";

// import AppContext from "app/appContext";

// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length
//       ? matched.auth.includes(user.role)
//       : true;
//   console.log(matched, user);
//   return authenticated;
// };

const AuthGuard = ({
  component: Component,
  location,
  ...rest
}: PageProps & {
  component: (props: Omit<PageProps, "location">) => JSX.Element;
}) => {
  const [previouseRoute, setPreviousRoute] = useState<string | null>(null);
  const {
    isAuthenticated,
    // user
  } = useAuthContext();
  const { pathname } = useLocation();
  const { settings } = useSettings();
  const { leftSidebar } = settings;

  // const { routes } = useContext(AppContext);
  // const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
  // let authenticated = isAuthenticated && isUserRoleAuthenticated;

  // IF YOU NEED ROLE BASED AUTHENTICATION,
  // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
  // AND COMMENT OUT BELOW LINE
  let authenticated = isAuthenticated;

  useEffect(() => {
    if (previouseRoute !== null) setPreviousRoute(pathname);
  }, [pathname, previouseRoute]);

  if (!authenticated) {
    return (
      <div className="flex">
        <Sidenav />
        <div
          className={cls(
            "flex-grow flex-col relative overflow-hidden h-screen transition-all duration-200",
            "ease-linear",
            { "lg:ml-64": leftSidebar.show, "lg:ml-0": !leftSidebar.show }
          )}
        >
          <Topbar />
          <Scrollbar className="flex-grow flex-col relative h-full">
            <div className="relative flex-1">
              <Component {...rest} />
            </div>
          </Scrollbar>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/app/login" state={{ redirectUrl: previouseRoute }} />;
  }
};

export default React.memo(AuthGuard);
