import * as React from "react";
import { HomePageLayout } from "./layout";
import { siteTitle } from "../../constants/app";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 1,
                      },
                    },
                  }}
                >
                  <p>Making</p>
                  <p>Everybody Feel</p>
                  <p>Valued At Work</p>{" "}
                  <span className="text-orange-500"></span>{" "}
                </motion.div>
              </h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <p className="text-md text-gray-500 mt-3">
                  With our solution, you can collaborate with your individuals
                </p>
                <p className="text-md text-gray-500 ">
                  and also books a space for yourself in the office
                </p>
                <span className="text-orange-500"></span>{" "}
              </motion.div>

              <div className="flex">
                <Link to="/community">
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                    className="mt-6 me-4 block w-[200px] select-none rounded-full bg-orange-500 py-3 px-6 text-center font-sans text-lg font-medium text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <i className="fa fa-users me-2"></i>Community
                  </motion.button>
                </Link>{" "}

                <Link to="/desk-booking">
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                    className="mt-6 block w-[150px] text-[#d65627] select-none border border-orange-500 rounded-full py-3 px-6 text-center font-sans text-lg font-medium shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:text-[#d65627] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <i className="fa fa-briefcase me-2"></i>Desk
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="flex-auto w-1 animate-fade-left animate-once animate-ease-in-out">
              <img src={HomeImg} alt="home image" />
            </div>
          </div>
        </main>
      </HomePageLayout>
    </React.Fragment>
  );
};

export default HomePage;
