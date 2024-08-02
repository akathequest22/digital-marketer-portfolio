export const getDims = (x) => {
  return {
    width: x + "px",
    minWidth: x + "px",
    maxWidth: x + "px",
    height: x + "px",
    minHeight: x + "px",
    maxHeight: x + "px",
  };
};

import { toast } from "react-toastify";

const toastPosition = "bottom-center";

export const notificationSuccess = (message) => {
  toast.success(message, {
    position: toastPosition,
    containerId: "wi-main-toast",
  });
};

export const notificationError = (message) => {
  toast.error(message, {
    position: toastPosition,
    containerId: "wi-main-toast",
  });
};

export const notificationInfo = (message) => {
  toast.info(message, {
    position: toastPosition,
    containerId: "wi-main-toast",
  });
};

export const notificationWarn = (message) => {
  toast.warn(message, {
    position: toastPosition,
    containerId: "wi-main-toast",
  });
};
