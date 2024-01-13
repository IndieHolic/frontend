import classes from "./NotificationSystem.module.css";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

interface ShowNoti {
  title: string;
  message: string;
}
export function ShowDefaultNoti({ title, message }: ShowNoti) {
  return notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: title,
    message: message,
    color: "#138BCF",
    classNames: {
      root: classes.DefaultNotiRoot,
      icon: classes.NotifictionIcon,
      title: classes.NotifictionTitle,
    },
  });
}

export function ShowCompleteNoti({ title, message }: ShowNoti) {
  return notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: title,
    message: message,
    color: "teal",
    icon: <IconCheck />,
    classNames: {
      root: classes.NotifictionRoot,
      icon: classes.NotifictionIcon,
      title: classes.NotifictionTitle,
    },
  });
}

export function ShowErrorNoti({ title, message }: ShowNoti) {
  return notifications.show({
    withCloseButton: true,
    autoClose: 5000,
    title: title,
    message: message,
    color: "#F20D0D",
    icon: <IconX />,
    classNames: {
      root: classes.NotifictionRoot,
      icon: classes.NotifictionIcon,
      title: classes.NotifictionTitle,
    },
  });
}
