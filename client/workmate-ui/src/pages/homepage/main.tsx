import * as React from "react";
import { HomePageLayout } from "./layout";
import { siteTitle } from "../../constants/app";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/images/COMMUNITY.png";

const HomePage = () => {
  React.useEffect(() => {
    document.title = `Home | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <HomePageLayout>
        <main>
          <div className="hero px-[6rem] flex mt-[3.5rem] items-center justify-center">
            <div className="flex-auto w-60">
              <h2 className="flex flex-col text-gray-800 gap-2 text-6xl font-extrabold">
                <p>Making</p>
                <p>Everybody Feel</p>
                <p>
                  Valued At Work
                </p> <span className="text-orange-500"></span>{" "}
              </h2>
              <p className="text-md text-gray-500 mt-3">
                With our solution, you can collaborate with your individuals
              </p>
              <p className="text-md text-gray-500 ">
                and also books a space for yourself in the office
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
                <Link
                  to="/desk-booking"
                  className="mt-6 block w-[150px] text-[#d65627] select-none border border-orange-500 rounded-full py-3 px-6 text-center font-sans text-lg font-medium shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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

          <div className="flex justify-content items-center mt-[4rem] gap-5 mb-20 px-[5rem]">
            <div className="max-w-sm p-6  border-2 border-dashed border-white rounded-lg">
              <i className="fa fa-users bg-white flex items-center justify-center rounded-lg px-2 py-2 me-2 w-9 h-9 text-gray-500 mb-3"></i>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Community
                </h5>
              <p className="mb-3 font-normal text-gray-500">
                Ask Questions and get quick answers from your workmates
              </p>
            </div>

            <div className="max-w-sm p-6  border-2 border-dashed border-white rounded-lg">
              <i className="fa fa-briefcase bg-white flex items-center justify-center rounded-lg px-2 py-2 me-2 w-9 h-9 text-gray-500 mb-3"></i>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Desk Booking
                </h5>
              <p className="mb-3 font-normal text-gray-500">
                Ask Questions and get quick answers from your workmates
              </p>
            </div>
          </div>
        </main>
      </HomePageLayout>
    </React.Fragment>
  );
};

export default HomePage;
