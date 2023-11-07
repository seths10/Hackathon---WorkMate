import { Outlet } from "react-router-dom";
import LoginScreen from "../pages/auth/login";

const PrivateRoute = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <LoginScreen />;
};

export default PrivateRoute;
