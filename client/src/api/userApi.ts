import { MessType } from "../type/mess.type";
import {
  Login,
  UserDataLogin,
  RefreshAccessToken,
  UserDataRegister,
  UserDataForgotPassword,
  UserDataResetPassword,
} from "../type/user.type";
import axiosInstanceClient from "./axiosInstance";
import { AxiosResponse } from "axios";
// export const getUserById = async (userId) => {
//   return await axiosInstanceClient().get(`user/getUserById/${userId}`);
// };

// export const login = async (data: UserDataLogin): Promise<AxiosResponse<Login>> => {
//   const response= await axiosInstanceClient().post<Login>('user/login', data, {
//     withCredentials: true,
//   });
//   console.log(response); // In phản hồi để kiểm tra
//   return response; // Trả về phản hồi hoàn chỉnh từ API
// };

export const login = async (body: UserDataLogin) => {
  // return await axiosInstanceClient().post<Login>(`user/login`, data, {
  //   withCredentials: true,
  // });
  console.log(body)
  return await axiosInstanceClient().post<Login>(`user/login`, body, {
    withCredentials: true,
  });
  // return data;
};
export const register = async (data: UserDataRegister) => {
  return await axiosInstanceClient().post<MessType>(`user/register`, data);
};

// export const logout = async () => {
//   return await axiosInstanceClient().post(`user/logout`);
// };

export const forgotPassword = async (email: string) => {
  return await axiosInstanceClient().get<MessType>(
    `user/forgotpassword?email=${email}`
  );
};

export const resetPassword = async (data: UserDataResetPassword) => {
  return await axiosInstanceClient().put<MessType>(`user/reset-password`, data);
};

export const refreshAccessToken = async () => {
  console.log("Do")
  return await axiosInstanceClient().put<RefreshAccessToken<string>>(
    `user/refreshToken`,
    null,
    {
      withCredentials: true,
    }
  );
};
