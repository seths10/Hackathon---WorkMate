import { Request, Response } from "express";
import Desk from "../../models/Booking/Desk";
import Booking from "../../models/Booking/Booking";
import nodemailer from "nodemailer";
import cron from "node-cron";
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

export const getDeskById = async (req: Request, res: Response) => {
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
    const bookings = await Booking.find({}).populate("desk").limit(3).exec();

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

export const getBookingByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const booking = await Booking.find({ "user.userId": userId })
      .sort({ endDate: "asc" })
      .limit(5)
      .exec();

    if (!booking) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }
    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getAvailableDesksPerDay = async (req: Request, res: Response) => {
  const { date } = req.params;

  try {
    // Find all desks that are available
    const availableDesks = await Desk.find({ isAvailable: true }).exec();

    // Check for reservations on the specified date
    const reservations = await Booking.find({
      startDate: { $lte: new Date(date) },
      endDate: { $gte: new Date(date) },
    }).exec();

    // Filter out desks that have reservations on the specified date
    const availableDesksOnDate = availableDesks.filter((desk) =>
      reservations.every(
        (reservation) =>
          reservation.desk &&
          reservation.desk.toString() !== desk._id.toString()
      )
    );

    res.status(200).json({
      success: true,
      data: availableDesksOnDate,
    });
  } catch (err) {
    res.status(500).send(`Internal Server Error`);
  }
};

export const getActiveBookings = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    // Get active bookings for the specified user and current date
    const currentDate = new Date();

    const activeBookings = await Booking.find({
      "user.userId": userId,
      startDate: { $lte: currentDate }, // Booking must start before or on the current date
      endDate: { $gte: currentDate }, // Booking must end after or on the current date
    }).exec();

    if (!activeBookings || activeBookings.length === 0) {
      return res.json({
        success: false,
        data: "No active bookings found for the user",
      });
    }

    res.status(200).json({
      success: true,
      data: activeBookings,
    });
  } catch (err) {
    console.error(err);
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

    // Composed email message
    const message = {
      from: GMAIL_USER,
      to: email,
      subject: "🎉DESK RESERVATION",
      text: `You have booked ${desk} from ${startDate} to ${endDate}`,
    };

    transporter.sendMail(message, async (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to send email" });
      }
      return res
        .status(200)
        .json({ success: true, data: "Desk booked successfully" });
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();

    if (!booking) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    const dsk = await Desk.findOne({ desk: booking.desk }).exec();

    if (dsk) {
      dsk.isAvailable = true;
      await dsk?.save();
    }

    await Booking.findByIdAndDelete(id).exec();

    res.status(200).json({
      success: true,
      data: "Booking deleted successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const { desk, userId } = req.body;
  try {
    const dsk = await Desk.findOne({ name: desk }).exec();

    if (!dsk) {
      return res.status(404).json({
        success: false,
        data: "Desk not found",
      });
    }

    const booking = await Booking.findOne({ desk }).exec();

    if (booking?.user?.userId?.toString() !== userId) {
      return res.status(400).json({
        success: false,
        data: "You did not book this desk",
      });
    }

    await Desk.findOneAndUpdate({ name: desk }, { isAvailable: true }).exec();

    res.status(200).json({
      success: true,
      data: `unbooked ${desk} successfully`,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// Schedule the task to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  try {
    const currentDate = new Date();

    // Find reservations that have passed their endDate
    const expiredReservations = await Booking.find({
      endDate: { $lt: currentDate },
      isAvailable: false,
    }).exec();

    // Update corresponding desks to set isAvailable to true
    const deskIdsToFree = expiredReservations.map(
      (reservation) => reservation.desk
    );

    await Desk.updateMany(
      { _id: { $in: deskIdsToFree } },
      { $set: { isAvailable: true } }
    ).exec();
  } catch (err) {
    console.error("Error while auto-unbooking desks:", err);
  }
});
