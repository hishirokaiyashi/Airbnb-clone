import { SliderCaterogy } from "../type/sliderCategory.type";
import axiosInstanceClient from "./axiosInstance";

export const getAllCategories = async ()=> {
  return await axiosInstanceClient().get<SliderCaterogy>("category/getAllCategories", {
    withCredentials: true,
  });
};
