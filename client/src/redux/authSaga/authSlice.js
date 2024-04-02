import { createSlice } from "@reduxjs/toolkit";

/**
 * success: boolean - Check register successfully
 */
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
   
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,

} = userSlice.actions;

export default userSlice.reducer;
