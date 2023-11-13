/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { siteTitle } from "../../constants/app";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  capitalizeFirstWord,
  getDateAndTimeFromISOString,
} from "../../utils/utils";
import { Greetings } from "../../components/greetings";
import { instance } from "../../utils/axios-client";
import { Link } from "react-router-dom";
import { LANDING } from "../../navigation/routes-constants";
import { format } from "date-fns";
// import DatePicker from "react-datepicker";
import DeskIcon from "./component/DeskIcon";
import Avatar from "react-avatar";
import "react-datepicker/dist/react-datepicker.css";

const DeskBooking = () => {
  const { userState } = useAuthContext();
  const [loading, setLoading] = React.useState(false);
  const [startDate, ] = React.useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = React.useState(false);

  const fullName = userState?.data?.firstname + " " + userState?.data?.lastname;

  const [booking, setBookingHistory] = React.useState([
    {
      _id: "",
      user: {
        userId: "",
        userName: "",
      },
      desk: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setLoading(true);
    async function getBookingHistory() {
      await instance
        .get(`/api/bookings/user/${userState?.data?.id}`)
        .then((res) => {
          setBookingHistory(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    getBookingHistory();
  }, [userState?.data?.id]);

  React.useEffect(() => {
    document.title = `Desk Booking | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <main className="flex-1">
        <div>
          {/* navbar */}
          <div className="px-[5rem] mb-2 bg-[#6b4b4005]">
            <div className="flex items-center justify-between py-[1.2rem]">
              <Link to={LANDING}>
                <h1 className="font-bold text-xl text-gray-800">WorkMate.</h1>
              </Link>
              <Avatar size="40" name={fullName} round />
            </div>
          </div>

          <div className="px-[5rem] mt-5 mb-3">
            <div className="flex items-center text-xl font-bold">
              <Greetings />
              <span className="text-white">.</span>
              {capitalizeFirstWord(userState?.data?.lastname)}
            </div>
          </div>

          {/* filters */}
          <div className="flex gap-10">
            <div className="flex gap-2 px-[5rem] text-white w-fit">
              <div className="rounded px-3 py-1 cursor-pointer bg-[#d65627] text-sm">
                Floor 1
              </div>
              <div className="rounded px-3 py-1 cursor-not-allowed bg-gray-100 text-gray-500 text-sm">
                Floor 2
              </div>
              <div className="rounded px-3 py-1 cursor-not-allowed  bg-gray-100 text-gray-500 text-sm">
                Floor 3
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-xs">Date: </p>
              <button
                className="bg-[#d65627] px-2 py-1 text-white rounded-lg"
                onClick={handleClick}
              >
                {startDate ? format(startDate, "dd-MM-yyyy") : "Select Date"}
              </button>
              {isOpen && (
                <p></p>
                // <DatePicker
                //   showIcon
                //   className="relative z-50"
                //   selected={startDate}
                //   onChange={(newDate) => setStartDate(newDate)}
                //   inline
                // />
              )}
            </div>
          </div>

          {/* map */}
          <div className="flex px-[5rem] gap-10">
            <div className="w-[55rem] border mt-8 border-gray-100 px-5 py-5">
              <DeskIcon />
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h1 className="font-bold mb-2">Active Bookings</h1>
                <div className="bg-gray-200 rounded py-3 px-3">
                  {loading ? (
                    <div className="flex bg-white px-3 py-2 gap-2 rounded-lg items-center border border-gray-100">
                      <div className="flex flex-col gap-2 border-r px-2">
                        <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[15rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[15rem] bg-gray-100 h-2.5"></div>
                      </div>

                      <p className="w-[2rem] bg-gray-100 h-2.5"></p>
                    </div>
                  ) : booking.length > 0 ? (
                    booking.map((book) => (
                      <div
                        key={book?._id}
                        className="flex bg-white px-3 py-2 gap-2 rounded-lg items-center border border-gray-100"
                      >
                        <div className="border-r px-2">
                          <p className="text-xs">
                            <span className="text-xs">Desk Name</span>{" "}
                            {book?.desk}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">Start Date:</span>{" "}
                            {getDateAndTimeFromISOString(book?.startDate)}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">End Date:</span>{" "}
                            {getDateAndTimeFromISOString(book?.endDate)}
                          </p>
                        </div>
                        <p className="text-red-400 cursor-pointer hover:text-red-500 text-xs">
                          Cancel
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-700">No Active Bookings</div>
                  )}
                </div>
              </div>

              <div>
                <h1 className="font-bold mb-2">Booking History</h1>
                <div className="bg-gray-200 rounded py-3 px-3">
                  {loading ? (
                    <div className="flex flex-col gap-2 animate-pulse bg-white rounded-lg px-3 py-2">
                      <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                      <div className="text-xs w-[15rem] bg-gray-100 h-2.5"></div>
                      <div className="text-xs w-[15rem] bg-gray-100 h-2.5"></div>
                    </div>
                  ) : booking.length > 0 ? (
                    booking.map((book) => (
                      <div
                        key={book?._id}
                        className="bg-white rounded-lg px-3 py-2"
                      >
                        <p className="text-xs">
                          <span className="text-xs">Desk Name</span>{" "}
                          {book?.desk}
                        </p>
                        <p className="text-xs">
                          <span className="text-xs">Start Date:</span>{" "}
                          {getDateAndTimeFromISOString(book?.startDate)}
                        </p>
                        <p className="text-xs">
                          <span className="text-xs">End Date:</span>{" "}
                          {getDateAndTimeFromISOString(book?.endDate)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-700">No Bookings Available</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DeskBooking;
