import * as React from "react";
import { siteTitle } from "../../constants/app";
import DeskIcon from "./component/DeskIcon";

const DeskBooking = () => {
  React.useEffect(() => {
    document.title = `Desk Booking | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <main className="flex-1">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="mb-2 text-2xl font-semibold text-gray-700">
              Desk Booking
            </h1>
          </div>

          <p>This is the Desk Booking page</p>

          <div>
              <DeskIcon/>
          </div>
          
        </div>
      </main>
    </React.Fragment>
  );
};

export default DeskBooking;
