/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { toast } from "sonner";
import { classNames } from "../../../components/className";
import { ButtonLoader } from "../../../components/loaders/Loaders";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { instance } from "../../../utils/axios-client";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type DrawerProps = {
  deskId: string;
  isOpen: boolean;
  toggleDrawer: () => void;
};

const DrawerComponent = ({ deskId, isOpen, toggleDrawer }: DrawerProps) => {
  const [isLoading, setLoading] = React.useState(false);
  const { userState } = useAuthContext();
  const fullName = userState?.data?.firstname + " " + userState?.data?.lastname;

  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const startDate = format(date[0].startDate, "yyyy/MM/dd");
  const endDate = format(date[0].endDate, "yyyy/MM/dd");

  const handleSubmit = async () => {
    setLoading(true);
    const body = {
      startDate: startDate,
      endDate: endDate,
      email: userState?.data?.email,
      user: {
        userId: userState?.data?.id,
        userName: fullName,
      },
      desk: deskId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await instance
      .post("/api/bookings/", body, config)
      .then(() => {
        toast.success("Desk booked successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.data);
        setLoading(false);
      });
  };

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={"23rem"}
      >
        <div className="menu p-5 min-h-full bg-base-200 text-base-content">
          <h1 className="mb-1 text-lg font-bold">Confirm Details</h1>

          <div className="mb-3">
            <DateRange
              editableDateInputs={true}
              onChange={(item: any) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="relative  rounded-lg"
              rangeColors={["#d65627", "#d65627", "#d65627"]}
            />
          </div>

          <div
            id="alert-additional-content-1"
            className="p-4 text-[#d65627] mt-10 rounded-lg bg-[#d6562707]"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <h3 className="text-sm font-bold">Booking Summary</h3>
            </div>
            <div className="mt-2 mb-2 text-sm">
              <p>
                <span className="font-bold">Desk ID:</span> {deskId}
              </p>
              <p className="mt-1">
                <span className="font-bold ">Start Date:</span> {startDate}
              </p>
              <p className="mt-1">
                <span className="font-bold ">End Date:</span> {endDate}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleSubmit()}
            disabled={isLoading}
            className={classNames(
              isLoading
                ? "cursor-not-allowed mt-4 bg-[#d6562749] flex flex-col items-center justify-center py-[8px] px-[6px] rounded-lg w-full hover:bg-homeButton"
                : "flex flex-col items-center mt-4 justify-center bg-[#d65627] py-[8px] px-[6px] rounded cursor-pointer w-full"
            )}
          >
            {isLoading ? (
              <div className="py-1">
                <ButtonLoader />
              </div>
            ) : (
              <div className="mx-2 font-bold text-center text-white bg-[#d65627] text-md rounded">
                Book Desk
              </div>
            )}
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
