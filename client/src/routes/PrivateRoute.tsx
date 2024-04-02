
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/store"; // Assuming your store setup

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

  if (!isLoading) {
    return (
      <>
        {isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />}
      </>
    );
  } else {
    if (isAuthenticated) {
      return <>{children}</>;
    } else {
      return <Loader />;
    }
  }
};

export default PrivateRoute;



// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// import Loader from "../components/Loader/Loader";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useSelector((state) => state.users);

//   if (!isLoading) {
//     return (
//       <>
//         {isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />}
//       </>
//     );
//   } else {
//     if (isAuthenticated) {
//       return <>{children}</>;
//     } else {
//       return <Loader />;
//     }
//   }
// };

// export default PrivateRoute;
