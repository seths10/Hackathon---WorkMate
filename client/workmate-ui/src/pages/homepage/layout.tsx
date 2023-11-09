import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../navigation/routes-constants";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLogout } from "../../hooks/useLogout";
import { toast } from "sonner";
import Mainogo from "../../assets/images/workmate.png";
import Avatar from "react-avatar";


type Props = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<Props> = ({ children }) => {
  const { logout } = useLogout();
  const { userState } = useAuthContext();

  const navigate = useNavigate();

  const first = userState?.data?.firstname;
  const last = userState?.data?.lastname;

  const handleLogout = () => {
    logout();
    toast.success("Logout Successful");
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white">
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
          <div
            onClick={() => handleLogout()}
            className="flex cursor-pointer hover:bg-orange-400 items-center gap-2 px-[1rem] py-1 bg-orange-500 rounded-lg"
          >
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
