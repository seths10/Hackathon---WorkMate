import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../navigation/routes-constants";
import Mainogo from "../../assets/images/workmate.png";
import Avatar from "react-avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLogout } from "../../hooks/useLogout";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<Props> = ({ children }) => {
  const { logout } = useLogout();

  const navigate = useNavigate();
  const { userState } = useAuthContext();

  const first = userState?.data?.firstname;
  const last = userState?.data?.lastname;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white">
      {/* <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
        <div className="flex justify-between  flex-1 px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <div
            onClick={() => navigate(LOGIN)}
            className="flex items-center gap-1 hover:cursor-pointer text-[#D65627] text-lg font-semibold"
          >
            <div className="flex items-center flex-shrink-0 px-2">
              <img
                className="w-auto mb-2 h-7 mt-2"
                src={ConfirmationAlert}
                alt="logo"
              />
            </div>
            <h1> WorkMate</h1>
          </div>

          <div className="flex-1"></div>
        </div>
      </div> */}

      <div className="p-[6rem] pt-3 pb-3 flex justify-between">
        <div className="mainLogo w-64 me-3" onClick={() => navigate(LOGIN)}>
          <img src={Mainogo} alt="" />
        </div>
        <div className="profile flex items-center">
          <Avatar size="35" round name={first + " " + last} />
          <div className="mr-3 pr-3 border-r-2 border-gray-100 ms-1 gap-0">
            <h3 className="text-lg font-bold color-gray-500 rounded-lg">
              {first + " " + last}
            </h3>
          </div>
          <div onClick={() => handleLogout()} className="flex cursor-pointer hover:bg-orange-400 items-center gap-2 px-[1rem] py-1 bg-orange-500 rounded-lg">
            <ArrowRightOnRectangleIcon className="text-white w-5 h-5" />
            <p className="text-white">Logout</p>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export { HomePageLayout };
