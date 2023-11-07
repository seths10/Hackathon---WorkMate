import * as React from "react";
import { HomePageLayout } from "./layout";
import { siteTitle } from "../../constants/app";

import HomeImg from "../../assets/images/COMMUNITY.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  React.useEffect(() => {
    document.title = `HomePage | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <HomePageLayout>
        <main className="bg-orange-20 ">
          <div className="hero px-[6rem] py-[2rem] flex mt-20 items-center justify-center">
            <div className="flex-auto w-60">
              <h2 className="text-7xl font-extrabold">
                Feel free to reach out to{" "}
                <span className="text-orange-500">discuss how your mate</span>{" "}
                can help you.
              </h2>
              <p className="text-xl text-grey-500 mt-3">
                Brings a wealth of knowledge ans experience to your team.
              </p>
              <div className="flex">
                <Link to="/community">
                  <button
                    className="mt-6 me-4 block w-[200px] select-none rounded-full bg-orange-500 py-3 px-6 text-center font-sans text-lg font-medium text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <i className="fa fa-users me-2"></i>Community
                  </button>
                </Link>{" "}
                <Link to="/desk-booking"
                  className="mt-6 block w-[150px] select-none border-2 border-orange-500 rounded-full py-3 px-6 text-center font-sans text-lg font-medium text-black shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  <i className="fa fa-briefcase me-2"></i>Desk
                </Link>
              </div>
            </div>
            <div className="flex-auto w-1 ">
              <img src={HomeImg} alt="home image" />
            </div>
          </div>
        </main>
      </HomePageLayout>
    </React.Fragment>
  );
};

export default HomePage;
