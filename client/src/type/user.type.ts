export interface userBooking {
  place: string;
  user: string;
  checkIn: string;
  checkOut: string;
  name: string;
  phone: string;
  price: number;
  guest: {
    adults: string;
    children: string;
    infants: string;
    pets: string;
  };
  methods: string[];
}

export interface UserData {
  _id: string;
  password: string;
  confirmPassword: string;
  userName: string;
  email: string;
  bookings?: userBooking[];
  createdAt: string;
  updatedAt: string;
  wishList?: string[];
}
export interface Login {
  success: boolean;
  mess: string;
  accessToken: string;
  userData: UserData;
  remember: boolean;
}

export type UserDataLogin = Pick<UserData, "email" | "password"> & {
  remember: boolean;
};

export type UserDataRegister = Pick<
  UserData,
  "email" | "password" | "userName" | "confirmPassword"
>;

export type UserDataForgotPassword = Pick<UserData, "email">;

export type UserDataResetPassword = {
  password:string;
  token?: string;
};

export interface PayloadRefreshNewAccessToken  {
  newAccessToken: string;
}

export interface RefreshAccessToken<T> {
  success?: boolean;
  newAccessToken: T;
}
