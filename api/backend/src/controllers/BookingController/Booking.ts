import { Request, Response } from "express";
import Desk from "../../models/Booking/Desk";
import Booking from "../../models/Booking/Booking";
import nodemailer from "nodemailer";
import { GMAIL_PASSWORD, GMAIL_USER } from "../../utils/secrets";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

// Desk Controllers
export const getAllDesks = async (req: Request, res: Response) => {
  try {
    const desks = await Desk.find({}).exec();

    return res.status(200).json({
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
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: desk,
    });
  } catch (err) {
    res.status(500).send(`Internal Server Error`);
  }
};

export const addDesk = async (req: Request, res: Response) => {
  const { name, facility, location } = req.body;
  try {
    const dsk = new Desk({ name, facility, location });

    if (!name || !facility || !location) {
      return res.status(400).json({
        success: false,
        data: "Provide name, facility, and location of desk",
      });
    }

    await dsk.save();
    res.status(200).json({
      success: true,
      data: "Added successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const removeDesk = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const desk = await Desk.findById(id).exec();

    if (!desk) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    await Desk.findByIdAndDelete(id).exec();

    res.status(200).json({
      success: true,
      data: "Desk removed successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// Booking Controllers

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({}).limit(3).exec();

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();

    if (!booking) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const addBooking = async (req: Request, res: Response) => {
  const { user, desk, startDate, endDate, email } = req.body;
  try {
    const dsk = await Desk.findOne({ name: desk }).exec();

    if (!dsk) {
      return res.status(404).json({
        success: false,
        data: "Desk not found",
      });
    }

    if (!dsk.isAvailable) {
      return res.status(400).json({
        success: false,
        data: "Desk is already booked",
      });
    }

    const booking = new Booking({ user, desk, startDate, endDate });

    // Validate required fields
    if (!user || !desk || !startDate || !endDate) {
      return res.status(400).json({
        success: false,
        error: "Please provide user, desk(id), startDate, endDate and status.",
      });
    }

    await booking.save();

    dsk.isAvailable = false;

    await dsk.save();

    res.status(200).json({
      success: true,
      data: "Added successfully",
    });
    // Compose the email message
    console.log(GMAIL_USER, GMAIL_PASSWORD)
    const message = {
      from: GMAIL_USER,
      to: email,
      subject: "DESK RESERVATION",
      text: `You have booked ${desk} from ${startDate} to ${endDate}`,
    };

    transporter.sendMail(message, async (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, message: "Failed to send email" });
      }
      return res.json({ success: true, data: "Email sent successfully" });
    });

  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const removeBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();

    if (!booking) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    await Booking.findByIdAndDelete(id).exec();

    res.status(200).json({
      success: true,
      data: "Booking removed successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const { id, startDate, endDate, status } = req.body;
  try {
    if (startDate) {
      await Booking.findByIdAndUpdate(id, { startDate }).exec();
    }
    if (endDate) {
      await Booking.findByIdAndUpdate(id, { endDate }).exec();
    }
    if (status) {
      await Booking.findByIdAndUpdate(id, { status });
    }
    res.status(200).json({
      success: true,
      data: "Updated successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
