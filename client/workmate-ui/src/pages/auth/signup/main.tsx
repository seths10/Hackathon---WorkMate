import * as React from "react";
import { siteTitle } from "../../../constants/app";

const SignupScreen = () => {
  React.useEffect(() => {
    document.title = `Signup | ${siteTitle}`;
  }, []);

  return (
    <div className="w-screen">
      <p className="font-bold">Signup Page</p>
    </div>
  );
};

export default SignupScreen;
