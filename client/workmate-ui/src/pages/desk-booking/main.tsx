/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { siteTitle } from "../../constants/app";
import { useAuthContext } from "../../hooks/useAuthContext";
import { capitalizeFirstWord, getDateFromISOString } from "../../utils/utils";
import { Greetings } from "../../components/greetings";
import { instance } from "../../utils/axios-client";
import { Link } from "react-router-dom";
import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/solid";
import { LANDING } from "../../navigation/routes-constants";
import { toast } from "sonner";
import DeskIcon from "./component/DeskIcon";
import Avatar from "react-avatar";

const DeskBooking = () => {
  const { userState } = useAuthContext();
  const [loading, setLoading] = React.useState(false);
  const fullName = userState?.data?.firstname + " " + userState?.data?.lastname;

  const [bookingHistory, setBookingHistory] = React.useState([
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

  const [activeBookings, setActiveBookings] = React.useState([
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

  React.useEffect(() => {
    setLoading(true);
    async function getBookingHistory() {
      await instance
        .get(`/api/bookings/user/${userState?.data?.id}`)
        .then((res) => {
          setBookingHistory(res?.data?.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }

    async function getActiveBookings() {
      await instance
        .get(`/api/bookings/active/${userState?.data?.id}`)
        .then((res) => {
          setActiveBookings(res?.data?.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }

    getBookingHistory();
    getActiveBookings();
  }, [userState?.data?.id]);

  async function getUpdatedActiveBookings() {
    await instance
      .get(`/api/bookings/active/${userState?.data?.id}`)
      .then((res) => setActiveBookings(res?.data?.data))
      .catch(() => {});
  }

  async function getUpdatedBookingHistory() {
    await instance
      .get(`/api/bookings/user/${userState?.data?.id}`)
      .then((res) => setBookingHistory(res?.data?.data))
      .catch(() => {});
  }

  const handleDeleteBooking = async (id: any) => {
    await instance
      .delete(`/api/bookings/${id}`)
      .then(() => {
        getUpdatedBookingHistory();
        toast.success("Booking Deleted successfully");
      })
      .catch(() => {});
  };

  const handleUnBooking = async (deskName: string) => {
    const body = {
      desk: deskName,
      userId: userState?.data?.id,
    };

    await instance
      .put(`/api/bookings/`, body)
      .then(() => {
        getUpdatedActiveBookings();
        toast.success("Booking Cancelled successfully");
      })
      .catch(() => {});
  };

  React.useEffect(() => {
    document.title = `Desk Booking | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <main className="flex-1">
        <div>
          {/* navbar */}
          <div className="px-[5rem] mb-2 bg-[#6b4b4005] border-b">
            <div className="flex items-center justify-between py-[0.8rem]">
              <Link to={LANDING}>
                <h1 className="font-bold animate-wiggle animate-once animate-ease-in-out text-xl text-gray-800">
                  WorkMate.
                </h1>
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
          </div>

          {/* map */}
          <div className="flex px-[5rem] gap-10">
            <div className="w-[55rem] border mt-2 border-gray-100 px-4 py-4">
              <DeskIcon />
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <div className="flex gap-1">
                  <h1 className="font-bold mb-2">Active Bookings</h1>
                  <ArrowPathIcon
                    onClick={() => getUpdatedActiveBookings()}
                    className="w-4 h-3 cursor-pointer hover:text-gray-900 text-gray-500"
                  />
                </div>
                <div className="bg-gray-200 rounded py-3 px-3">
                  {loading ? (
                    <div className="flex bg-white px-3 gap-2 rounded-lg items-center justify-center border border-gray-100">
                      <div className="flex flex-col gap-2 border-r  py-2 px-2">
                        <div className="text-xs w-[7rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                      </div>

                      <p className="w-[1rem] bg-gray-100 h-2"></p>
                    </div>
                  ) : activeBookings.length > 0 ? (
                    activeBookings.map((book) => (
                      <div
                        key={book?._id}
                        className="flex bg-white mb-3 px-3  gap-2 rounded-lg items-center border border-gray-100"
                      >
                        <div className="border-r pr-2 py-2">
                          <p className="text-xs">
                            <span className="text-xs">Desk Name:</span>{" "}
                            {book?.desk}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">Start Date:</span>{" "}
                            {getDateFromISOString(book?.startDate)}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">End Date:</span>{" "}
                            {getDateFromISOString(book?.endDate)}
                          </p>
                        </div>
                        <p
                          onClick={() => handleUnBooking(book?.desk)}
                          className="text-red-400 cursor-pointer hover:text-red-500 text-xs"
                        >
                          <TrashIcon className="w-4 h-4 text-gray-400 hover:text-gray-500" />
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-700">No Active Bookings</div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex gap-1">
                  <h1 className="font-bold mb-2">Booking History</h1>
                  <ArrowPathIcon
                    onClick={() => getUpdatedBookingHistory()}
                    className="w-4 h-3 cursor-pointer hover:text-gray-900 text-gray-500"
                  />
                </div>
                <div className="bg-gray-200 rounded py-3 px-3">
                  {loading ? (
                    <div className="flex bg-white px-3 gap-2 rounded-lg items-center justify-center border border-gray-100">
                      <div className="flex flex-col gap-2 border-r  py-2 px-2">
                        <div className="text-xs w-[7rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                        <div className="text-xs w-[10rem] bg-gray-100 h-2.5"></div>
                      </div>

                      <p className="w-[1rem] bg-gray-100 h-2"></p>
                    </div>
                  ) : bookingHistory.length > 0 ? (
                    bookingHistory.map((book) => (
                      <div
                        key={book?._id}
                        className="flex bg-white mb-3 px-3 gap-2 rounded-lg items-center border border-gray-100"
                      >
                        <div className="border-r py-2 pr-2">
                          <p className="text-xs">
                            <span className="text-xs">Desk Name:</span>{" "}
                            {book?.desk}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">Start Date:</span>{" "}
                            {getDateFromISOString(book?.startDate)}
                          </p>
                          <p className="text-xs">
                            <span className="text-xs">End Date:</span>{" "}
                            {getDateFromISOString(book?.endDate)}
                          </p>
                        </div>

                        <div
                          onClick={() => handleDeleteBooking(book?._id)}
                          className="text-red-400 cursor-pointer hover:text-red-500 text-xs"
                        >
                          <TrashIcon className="w-4 h-4 text-gray-400 hover:text-gray-500" />
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
        </div>
      </main>
    </React.Fragment>
  );
};

export default DeskBooking;
