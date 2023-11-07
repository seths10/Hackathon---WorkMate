import * as React from "react";
import { siteTitle } from "../../../constants/app";

const LoginScreen = () => {
  React.useEffect(() => {
    document.title = `Login | ${siteTitle}`;
  }, []);

  return (
    <div className="w-screen">
      <p className="font-bold">Login Page</p>
    </div>
  );
};

export default LoginScreen;
