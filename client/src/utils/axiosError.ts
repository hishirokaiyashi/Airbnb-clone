import axios, { AxiosError } from "axios";

// export function isAxiosError<T> (error:unknown):error is AxiosError<T> {
//     return axios.isAxiosError(error)
// }
export const isAxiosError = <T>(error: unknown): error is AxiosError<T> =>
  axios.isAxiosError(error);
