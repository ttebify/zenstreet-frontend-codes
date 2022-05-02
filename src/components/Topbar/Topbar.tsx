import React, { useCallback } from "react";
import useSettings from "../../hooks/useSettings";
// import useAuthContext from "../../hooks/useAuthContext";
import Icon from "../Widgets/Icon";
import IconButton from "../Widgets/IconButton";
import SearchBox from "../SearchBox/SearchBox";
import { BiEnvelope, BiMenu } from "react-icons/bi";
import NotificationBar from "../NotificationBar/NotificationBar";
import { NotificationProvider } from "../../contexts/NotificationContext";

const Topbar = () => {
  const { settings, updateSettings } = useSettings();
  //   const { logout, user } = useAuthContext();

  const updateSidebarMode = (sidebarSettings: { show: boolean }) => {
    updateSettings({
      ...settings,
      leftSidebar: {
        ...sidebarSettings,
      },
    });
  };

  const handleSidebarToggle = useCallback(() => {
    let { leftSidebar } = settings;
    updateSidebarMode({ show: !leftSidebar.show });
  }, [settings]);

  return (
    <div className="z-[111] transition-all duration-[0.3s] bg-white shadow-sm">
      <div className="h-16 pl-3.5 pr-4 sm:pl-4 sm:pr-5 md:pl-4 md:pr-5">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <IconButton onClick={handleSidebarToggle}>
              <Icon>
                <BiMenu />
              </Icon>
            </IconButton>

            <div className="hidden md:block">
              <IconButton>
                <Icon>
                  <BiEnvelope />
                </Icon>
              </IconButton>
            </div>
          </div>
          <div className="flex items-center">
            <SearchBox />
            <NotificationProvider>
              <NotificationBar />
            </NotificationProvider>

            {/* <ShoppingCart /> */}

            {/* <MatxMenu
              menuButton={
                <div className={classes.userMenu}>
                  <Hidden xsDown>
                    <span>
                      Hi <strong>{user?.lastname}</strong>
                    </span>
                  </Hidden>
                  <Avatar
                    className="cursor-pointer"
                    src={user.avatar}
                    alt={user?.lastname}
                  />
                </div>
              }
            >
              <MenuItem>
                <Link className={classes.menuItem} to="/">
                  <Icon> home </Icon>
                  <span className="pl-4"> Home </span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className={classes.menuItem}
                  to="/page-layouts/user-profile"
                >
                  <Icon> person </Icon>
                  <span className="pl-4"> Profile </span>
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Icon> settings </Icon>
                <span className="pl-4"> Settings </span>
              </MenuItem>
              <MenuItem onClick={logout} className={classes.menuItem}>
                <Icon> power_settings_new </Icon>
                <span className="pl-4"> Logout </span>
              </MenuItem>
            </MatxMenu> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Topbar);
