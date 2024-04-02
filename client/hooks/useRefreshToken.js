import { refreshAccessToken } from "../src/api/userApi.js";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      let response = await refreshAccessToken();
    console.log(response?.newAccessToken);
      return response?.newAccessToken
    } catch (err) {
      console.log(err);
    }
    // dispatch(setRefreshAccessTokenStart())
    // setAuth(prev => {
    //     console.log(JSON.stringify(prev));
    //     console.log(response.data.accessToken);
    //     return { ...prev, accessToken: response.data.accessToken }
    // });
    // return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
