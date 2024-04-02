import axios, { AxiosInstance } from "axios";
import store from "../redux/store";

import { setNewAccessToken } from "../redux/auth/authSlice";
import { refreshAccessToken } from "./userApi";
import { RefreshAccessToken } from "../type/user.type";


const axiosInstanceClient = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
  // const refreshAccessTokenMutation = useMutation(refreshAccessToken);

      const prevRequest = error?.config;
      const token = store.getState().users.remember;

      if (error?.response?.status === 401 && !prevRequest?.sent) {
        if (token) {
          console.log(token)
          prevRequest.sent = true;
          let response;

          try {
            response = await refreshAccessToken();
            console.log(response);
            const responseData = response.data;
            //  response = await refreshAccessTokenMutation.mutateAsync();
            store.dispatch(setNewAccessToken(responseData.newAccessToken));
            // store.dispatch(setNew)
          } catch (err) {
            console.log(err);
          }
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${response?.data.newAccessToken}`;
          return axios(prevRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.request.use((req) => {
    const token = store.getState().auth.accessToken;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;

      return req;
    }
    return req;
  });

  return axiosInstance;
};

export default axiosInstanceClient;
