import React, { Fragment, useCallback } from "react";
import useNotification from "../../hooks/useNotification";
import Button from "../Buttons/Button";
import Icon from "../Widgets/Icon";
import IconButton from "../Widgets/IconButton";
import Badge from "../Widgets/Badge";
import Drawer from "../Drawer/Drawer";
import { BiNotification, BiTrash } from "react-icons/bi";
import Link from "../Link";
import { getTimeDifference } from "../../utils";
import { AiOutlineClose } from "react-icons/ai";

const NotificationBar = () => {
  const [panelOpen, setPanelOpen] = React.useState(false);

  const { deleteNotification, clearNotifications, notifications } =
    useNotification();

  const handleDrawerToggle = useCallback(() => {
    setPanelOpen((p) => !p);
  }, []);

  return (
    <Fragment>
      <IconButton onClick={handleDrawerToggle}>
        <Badge badgeContent={notifications?.length}>
          <Icon>
            <BiNotification />
          </Icon>
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={panelOpen} onClose={handleDrawerToggle}>
        <div className="w-64">
          <div className="h-16 shadow-md flex justify-between items-center p-4 mb-4">
            <Icon>
              <BiNotification />
            </Icon>
            <h5 className="ml-2 my-0 font-medium">Notifications</h5>
            <IconButton onClick={handleDrawerToggle}>
              <Icon>
                <AiOutlineClose />
              </Icon>
            </IconButton>
          </div>
          {notifications?.map((notification) => (
            <div
              key={notification.id}
              className="relative hover:bg-gray-50/60 p-1 mb-2 shadow-sm group"
            >
              <IconButton
                className="mr-6 absolute top-1/2 -translate-y-1/2 right-2 group-hover:bg-red-50/50 invisible
                  group-hover:visible rounded-full"
                onClick={() => deleteNotification(notification.id)}
              >
                <Icon className="text-gray-400">
                  <BiTrash className="w-4 h-4 group-hover:text-red-600" />
                </Icon>
              </IconButton>
              <Link
                to={`/app${notification.path}`}
                onClick={handleDrawerToggle}
              >
                <div>
                  <div className="flex items-center p-2 text-sm">
                    <div className="flex-none flex items-center justify-between h-6 w-6 overflow-hidden
                    bg-gray-200 mr-2">
                      <Icon>{notification.icon.name}</Icon>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between w-full items-center text-gray-800">
                        <span className="font-medium">
                          {notification.heading}
                        </span>
                        <small>
                          {getTimeDifference(new Date(notification.timestamp))}{" "}
                          ago
                        </small>
                      </div>
                      <div className="pt-1 text-gray-700">
                        <p>{notification.title}</p>
                        <small className="block mt-1 leading-tight">{notification.subtitle}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {!!notifications?.length && (
            <div className="text-center">
              <Button onClick={clearNotifications}>Clear Notifications</Button>
            </div>
          )}
        </div>
      </Drawer>
    </Fragment>
  );
};

export default NotificationBar;
