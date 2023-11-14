import * as React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLogout } from "../../hooks/useLogout";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<Props> = ({ children }) => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    toast.success("You've been logged out");
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white">
      <div className="px-[5rem]">
        <div className="flex items-center justify-between py-[1.2rem]">
          <h1 className="font-bold text-xl animate-wiggle animate-once animate-ease-in-out text-gray-800">WorkMate.</h1>

          <div
            onClick={() => handleLogout()}
            className="flex items-center  cursor-pointer gap-2 border border-[#d65627] py-[0.4rem] px-[0.7rem] text-white rounded-full "
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 text-[#d65627]" />
            <p className="text-[#d65627]">Sign Out</p>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export { HomePageLayout };
