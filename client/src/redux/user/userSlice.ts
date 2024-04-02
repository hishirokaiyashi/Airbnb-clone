import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    userData: {
      name: "",
      userName: "",
      email: "",
    },
    remember:false,
    error: null,
    accessToken: null,
    success: false,
  },
  reducers: {
    //SIGN UP
    fetchUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.isLoading = false;
      state.success = action.payload.success;
    },
    fetchUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // login
    setUserLoginStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    setUserLoginSuccess(state, action) {
      const { userInfo, onSuccess } = action.payload;
      state.userData = userInfo.userData;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.accessToken = userInfo.accessToken;
      state.remember = userInfo.remember;
      // state.name =
      // state.refreshToken = userInfo.refreshToken;
      onSuccess();
      // state.isAuthenticated = true;
      // // tim action.payload co ton tai trong totaldata = id => lay cai khong ton tai.
      // state.success = action.payload.success;
      // state.isLoading = false;
      // state.userData = {
      //   ...state.userData,
      //   name: action.payload.userData.email.split("@")[0],
      //   userName: action.payload.userData.userName,
      //   email: action.payload.userData.email,
      // };
      // localStorage.setItem("user", JSON.stringify(action.payload.accessToken));
    },
    setUserLoginFailure(state, action) {
      const { error, onError } = action.payload;
      state.isLoading = false;
      onError(
        error?.response?.data?.mes || "Wrong Incredentials. Please try again!!"
      );
    },
    resetUserDataStart(state) {
      state.userData = {
        name: "",
        userName: "",
        email: "",
      };
      state.accessToken = null;
    },
    resetUserDataSuccess(state) {
      state.success = false;
      state.error = null;
    },
    resetUserDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setNewAccessToken(state, action) {
      const { newAccessToken } = action.payload;
      console.log(newAccessToken);
      state.accessToken = newAccessToken;
    },
    // setRefreshAccessTokenStart(state) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // setRefreshAccessTokenSuccess(state, action) {
    //   state.isLoading = false;
    //   state.accessToken = action.payload.accessToken;
    // },
    // setRefreshAccessTokenFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  setUserLoginStart,
  setUserLoginSuccess,
  setUserLoginFailure,
  resetUserDataStart,
  resetUserDataSuccess,
  // setRememberStatusData,
  resetUserDataFailure,
  setNewAccessToken,
} = userSlice.actions;

export default userSlice.reducer;
