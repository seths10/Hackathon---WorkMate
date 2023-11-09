import express from "express";
import {
  getAllDesks,
  getDesk,
  addDesk,
  removeDesk,
  getAllBookings,
  getBookingById,
  getBookingByUserId,
  addBooking,
  removeBooking,
  updateBooking,
} from "../../controllers/BookingController/Booking";

const router = express.Router();

// Desk Routes

router.get("/desk", getAllDesks);

router.get("/desk/:id", getDesk);

router.post("/desk", addDesk);

router.delete("/desk/:id", removeDesk);

// Bookings Route

router.get("/", getAllBookings);

router.get("/:id", getBookingById);

router.post("/", addBooking);

router.put("/", updateBooking);

router.delete("/:id", removeBooking);

router.get("/user/:userId", getBookingByUserId);


export default router;
