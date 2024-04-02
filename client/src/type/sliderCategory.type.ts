export interface Category {
  _id:string;
  icon: string;
  label: string;
  updatedAt:string;
}
export interface SliderCaterogy {
  success: boolean;
  categories: Category[];
}