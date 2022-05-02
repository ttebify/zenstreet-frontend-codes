interface Notification {
  id: string;
  path: string;
  icon: {name: string};
  heading: string;
  timestamp: number;
  title: string;
  subtitle: string;
}
export type NotificationState = {
  notifications: Notification[];
};

export interface NotificationContextType extends NotificationState {
  deleteNotification: (notificationID: string) => Promise<void>;
  clearNotifications: () => Promise<void>;
  getNotifications: () => Promise<void>;
}

export type NotificationReducerActions =
  | "LOAD_NOTIFICATIONS"
  | "DELETE_NOTIFICATION"
  | "CLEAR_NOTIFICATIONS";

export interface NotificationReducerActionType {
  type: NotificationReducerActions;
  payload: NotificationState["notifications"];
}
