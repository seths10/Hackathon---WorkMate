import { Request, Response } from "express";
import Desk from "../../models/Booking/Desk";
import Booking from "../../models/Booking/Booking";

// Desk Controllers
export const getAllDesks = async (req: Request, res: Response) => {
  try {
    const desks = await Desk.find({}).exec();

    if (!desks) {
      res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: desks,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getDesk = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const desk = await Desk.findById(id).exec();

    if (!desk) {
      res.status(404).json({
        success: false,
        data: "Not found",
      });

      res.status(200).json({
        success: true,
        data: desk,
      });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const addDesk = async (req: Request, res: Response) => {
  const { name, facility, location } = req.body;
  try {
    const dsk = new Desk({name, facility, location})
    await dsk.save()
    res.status(200).json({
      success: true,
      data: "Added successfully"
    })
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const removeDesk = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// Booking Controllers

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({}).exec();

    if (!bookings) {
      res.status(404).json({
        success: false,
        data: "No Desks registered",
      });
    }

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();

    if (!booking) {
      res.status(404).json({
        success: false,
        data: "Not found",
      });

      res.status(200).json({
        success: true,
        data: booking,
      });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const addBooking = async (req: Request, res: Response) => {
  const { user, desk, startDate, endDate, status } = req.body;
  try {
    const booking = new Booking({user, desk, startDate, endDate, status})
    await booking.save()
    res.status(200).json({
      success: true,
      data: "Added successfully"
    })
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const removeBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
