import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../navigation/routes-constants";
// import { ConfirmationAlert } from "../../assets";

import Mainogo from '../../assets/images/workmate.png'
import ProfileImg from '../../assets/images/profile.jpg'

type Props = {
  children: React.ReactNode;
};

const HomePageLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

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
          <img src={ProfileImg} alt="profile picture"  className="w-11 h-11 rounded-full"/>
          <div className="ms-3">
            <h3 className="text-lg font-bold color-grey-500">John Owusu</h3>
            <p className="text-base	">UI/UX</p>
          </div>
        </div>
      </div>





      {children}
    </div>
  );
};

export { HomePageLayout };
