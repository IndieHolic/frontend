import { ShowErrorNoti } from "@/components/Commons/NotificationSystem/NotificationSystem";
import axios from "axios";

export const ClientAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

ClientAxios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    ShowErrorNoti({
      title: "오류",
      message: error.response.data.message,
    });
    return Promise.reject(error);
  }
);
