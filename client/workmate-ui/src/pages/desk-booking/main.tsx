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
import DeskIcon from "./component/DeskIcon";
import Avatar from "react-avatar";

const DeskBooking = () => {
  const { userState } = useAuthContext();
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

  const fullName = userState?.data?.firstname + " " + userState?.data?.lastname;

  React.useEffect(() => {
    async function getBookingHistory() {
      await instance
        .get(`/api/bookings/user/${userState?.data?.id}`)
        .then((res) => {
          setBookingHistory(res?.data?.data);
        })
        .catch((err) => {console.log(err)});
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
          <div className="flex gap-2 px-[5rem] text-white w-fit">
            <div className="rounded px-3 py-1 cursor-pointer bg-[#d65627] text-sm">
              Floor 1
            </div>
            <div className="rounded px-3 py-1 cursor-pointer bg-gray-100 text-gray-500 text-sm">
              Floor 2
            </div>
            <div className="rounded px-3 py-1 cursor-pointer  bg-gray-100 text-gray-500 text-sm">
              Floor 3
            </div>
          </div>

          {/* map */}
          <div className="flex px-[5rem] gap-10">
            <div className="w-[55rem] border mt-8 border-gray-100 px-5 py-5">
              <DeskIcon />
            </div>

            <div>
              <h1 className="font-bold mb-2">Booking History</h1>
              <div className="bg-gray-200 rounded py-3 px-3">
                {booking.length > 0 ? (
                  booking.map((book) => (
                    <div
                      key={book._id}
                      className="bg-white mb-3 rounded-lg px-3 py-2"
                    >
                      <p className="text-xs">
                        <span className="text-xs">Desk Name</span> {book?.desk}
                      </p>
                      <p className="text-xs">
                        <span className="text-xs">Start Date:</span>{" "}
                        {getDateAndTimeFromISOString(book.startDate)}
                      </p>
                      <p className="text-xs">
                        <span className="text-xs">End Date:</span>{" "}
                        {getDateAndTimeFromISOString(book.endDate)}
                      </p>

                      <div className="flex flex-end mt-3 w-fit">
                        <div className="flex bg-gray-50 rounded px-1 py-1 items-center gap-2">
                          <Avatar
                            className="text-sm rounded"
                            size="20"
                            name={book?.user?.userName}
                          />
                          <p className="text-xs">{book?.user?.userName}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-700">No Bookings Available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DeskBooking;
