import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PayloadRefreshNewAccessToken, RefreshAccessToken } from "../../type/user.type";

export interface InitialUserState {
  isAuthenticated?: boolean;
  userData: {
    name?: string;
    userName: string;
    email: string;
  };
  remember?: boolean;
  accessToken?: string;
  isLoading?: boolean;
}


const initialState: InitialUserState = {
  isAuthenticated: false,
  isLoading: false,
  userData: {
    name: "",
    userName: "",
    email: "",
  },
  remember: false,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //SIGN UP
    setLogin: (state, { payload }: PayloadAction<InitialUserState>) => {
      state.userData = payload.userData;
      state.isAuthenticated = true;
      state.accessToken = payload.accessToken;
      state.remember = payload.remember;
    },
    setNewAccessToken:(state,  {payload} : PayloadAction<string> ) => {
      console.log(payload)
      const { newAccessToken } : any = payload;
      console.log(newAccessToken);
      state.accessToken = newAccessToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setNewAccessToken } = authSlice.actions;

export default authSlice.reducer;
