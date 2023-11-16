import express from "express";
import {
  getAllDesks,
  getDeskById,
  addDesk,
  getAvailableDesksPerDay,
  removeDesk,
  addBooking,
  getAllBookings,
  getBookingById,
  getBookingByUserId,
  updateBooking,
  deleteBooking,
  getActiveBookings
} from "../../controllers/BookingController/Booking";

const router = express.Router();

// Desk Routes
router.post("/desk", addDesk); // add or register a desk

router.get("/desk", getAllDesks); // get all desks 
 
router.get("/desk/:id", getDeskById); // get a desk by desk id

router.get("/deskPerDay/:date", getAvailableDesksPerDay); // get all desks available at a specified date

router.delete("/desk/:id", removeDesk); // remove a desk

// Bookings Route
router.post("/", addBooking); // book a desk 

router.get("/", getAllBookings); // get all bookings

router.get("/:id", getBookingById); // get booking by booking id

router.get("/user/:userId", getBookingByUserId); // get bookings for a particular user

router.get("/active/:userId", getActiveBookings); // get all active bookings of a user

router.put("/", updateBooking); // unbook a desk

router.delete("/:id", deleteBooking); // delete a booking by id


export default router;
