import React, { createContext, useEffect, useReducer } from "react";
import Axios from "../utils/axios";
import type {
  NotificationContextType,
  NotificationReducerActionType,
  NotificationState,
} from "./types";

const reducer = (
  state: NotificationState,
  action: NotificationReducerActionType
) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS": {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case "DELETE_NOTIFICATION": {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case "CLEAR_NOTIFICATIONS": {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  deleteNotification: () => Promise.resolve(),
  clearNotifications: () => Promise.resolve(),
  getNotifications: () => Promise.resolve(),
});

export const NotificationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, {
    notifications: [
      {
        id: "1",
        path: "/notification/847nd84bfu",
        icon: { name: "Gen" },
        heading: "Heading Here",
        timestamp: new Date("25 Dec, 2021").getTime(),
        title: "Title here",
        subtitle: "Subtitle here vey long small"
      },
      {
        id: "2",
        path: "/notification/847nd8d4bfu",
        icon: { name: "D" },
        heading: "Heading Here",
        timestamp: new Date("28 Apr, 2022").getTime(),
        title: "Title some how long here",
        subtitle: "Subtitle here vey long small the black fox jumps over the lazu dog"
      },
    ],
  });

  const deleteNotification = async (notificationID: string) => {
    try {
      const res = await Axios.post("/api/notification/delete", {
        id: notificationID,
      });
      dispatch({
        type: "DELETE_NOTIFICATION",
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const clearNotifications = async () => {
    try {
      const res = await Axios.post("/api/notification/delete-all");
      dispatch({
        type: "CLEAR_NOTIFICATIONS",
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getNotifications = async () => {
    try {
      const res = await Axios.get("/api/notification");
      dispatch({
        type: "LOAD_NOTIFICATIONS",
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        deleteNotification,
        clearNotifications,
        getNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
