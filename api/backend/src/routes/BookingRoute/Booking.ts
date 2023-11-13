import express from "express";
import {
  getAllDesks,
  getDeskById,
  addDesk,
  removeDesk,
  getAllBookings,
  getBookingById,
  getBookingByUserId,
  addBooking,
  updateBooking,
  deleteBooking,
  getDesksPerDay,
  getActiveBookings
} from "../../controllers/BookingController/Booking";

const router = express.Router();

// Desk Routes

router.get("/desk", getAllDesks);

router.get("/desk/:id", getDeskById);

router.get("/deskPerDay/:date", getDesksPerDay);

router.post("/desk", addDesk);

router.delete("/desk/:id", removeDesk);

// Bookings Route

router.get("/", getAllBookings);

router.get("/:id", getBookingById);

router.get("/user/:userId", getBookingByUserId);

router.get("/active/:userId", getActiveBookings);

router.post("/", addBooking);

router.put("/", updateBooking);

router.delete("/:id", deleteBooking);


export default router;
