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
} from "../../controllers/BookingController/Booking";

const router = express.Router();

// Desk Routes

router.get("/desk", getAllDesks);

router.get("/desk/:id", getDeskById);

router.get("/deskPerDay", getDesksPerDay);

router.post("/desk", addDesk);

router.delete("/desk/:id", removeDesk);

// Bookings Route

router.get("/", getAllBookings);

router.get("/:id", getBookingById);

router.get("/user/:userId", getBookingByUserId);

router.post("/", addBooking);

router.put("/", updateBooking);

router.delete("/:id", deleteBooking);


export default router;
