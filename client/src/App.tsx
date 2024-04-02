import "./App.css";
import Router from "./routes";

// import axiosInstance from "./api/axiosInstance";
// import { store } from "./redux/store.js";

// axiosInstance.interceptors.request.use((req) => {
//   const token = store.getState().users.accessToken;
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//     return req;
//   }
//   return req;
// });

function App() {
  return (
    <div className="">
      <Router />
    </div>
  );
}

export default App;
