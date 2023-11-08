import express from "express";
import { getAllDesks, getDesk, addDesk, removeDesk } from "../../controllers/BookingController/Booking";

const router = express.Router()


// Bookings Route

router.get("/bookings", getAllDesks);

router.get("/bookings:id", getDesk);

router.post("/bookings", addDesk);

router.delete("/bookings/:id", removeDesk);


// Desk Routes
router.get("/booking/desk", getAllDesks);

router.get("/booking/desk/:id", getDesk);

router.post("/booking/desk", addDesk);

router.delete("/booking/desk:id", removeDesk);


export default router;