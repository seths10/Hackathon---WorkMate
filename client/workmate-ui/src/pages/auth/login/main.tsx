/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { siteTitle } from "../../../constants/app";
import { useLogin } from "../../../hooks/useLogin";
import { ButtonLoader } from "../../../components/loaders/Loaders";
import { classNames } from "../../../components/className";
import { SIGNUP } from "../../../navigation/routes-constants";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import SignInImg from "../../../assets/images/signin.png";

const LoginScreen = () => {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    await login(password, email);
  };

  React.useEffect(() => {
    document.title = `Login | ${siteTitle}`;
  }, []);

  return (
    <>
      <div className="w-screen flex h-screen">
        <div className="flex-auto w-1/2 bg-orange-100">
          <div className="flex items-center justify-center h-5/6">
            <img
              src={SignInImg}
              alt="signin image"
              className="w-[28rem] object-cover"
            />
          </div>
        </div>

        <div className=" w-1/2 flex justify-center flex-col border items-center">
          <div className="">
            <div className="flex items-center flex-col mb-10">
              <p className="text-4xl font-bold ">Welcome back! </p>
              <p className="text-sm text-gray-500 mt-1">
                Please enter your details
              </p>
            </div>

            <form>
              <div className="w-[22rem]">
                <label
                  htmlFor="input-group-1"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    name="Email"
                    type="email"
                    autoComplete="current-email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D65627] focus:border-[#D65627] block w-full pl-10 p-2.5 "
                    placeholder="name@amalitech.com"
                  ></input>
                </div>

                <label
                  htmlFor="website-admin"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
                    <LockClosedIcon className="w-4 h-4 text-gray-500" />
                  </span>
                  <input
                    name="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-[#D65627] focus:border-[#D65627] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                    placeholder="your password"
                  ></input>
                </div>

                <button
                  onClick={() => handleSubmit()}
                  disabled={isLoading}
                  className={classNames(
                    isLoading
                      ? "cursor-not-allowed mt-10 bg-black/40 flex flex-col items-center justify-center py-[8px] px-[6px] rounded-full w-full hover:bg-homeButton"
                      : "flex flex-col items-center mt-10 justify-center bg-black py-[8px] px-[6px] rounded-full cursor-pointer w-full"
                  )}
                >
                  {isLoading ? (
                    <div className="py-1">
                      <ButtonLoader />
                    </div>
                  ) : (
                    <div className="mx-2 font-bold text-center text-white bg-black text-md rounded-md">
                      Login
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="flex mt-20 items-center gap-2">
            <p className="text-gray-500 text-sm">Don't have an account? </p>
            <Link
              to={SIGNUP}
              className="text-[#D65627] cursor-pointer hover:text-[#d65627b2] font-bold text-sm"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
