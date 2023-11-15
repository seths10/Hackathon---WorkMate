import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { emailRegEx, passwordRegEx } from "../../utils/constants";
import User from "../../models/AuthModel/User";
import { secretKey } from "../../utils/secrets";

export const signin = async (req: Request, res: Response) => {
  // user credentials
  const { email, password } = req.body;

  // check if credentials have been passed
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      data: "Provide email and password",
    });
  }

  // validate email
  if (!emailRegEx.test(email)) {
    return res.status(422).json({
      success: false,
      data: "Invalid email address",
    });
  }

  try {
    // find available user
    var user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(404).json({
        success: false,
        data: "User not found",
      });
    }

    // validate password
    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        data: "Invalid password",
      });
    }

    // token creation
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      secretKey!,
      { algorithm: "HS256", expiresIn: "1d" }
    );

    // user data format to be returned
    const userData = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: token,
    };

    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
    });
  }
};

export const signup = async (req: Request, res: Response) => {
  // user signup credentials
  const { firstname, lastname, email, password } = req.body;

  // checking is credentials have been passed
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      success: false,
      data: "Provide firstname, lastname, email and password",
    });
  }

  // validate email
  if (!emailRegEx.test(email)) {
    return res.status(422).json({
      success: false,
      data: "Invalid email address",
    });
  }

  // checking for strong password using regular expression
  if (!passwordRegEx.test(password)) {
    return res.status(422).json({
      success: false,
      data: "Password does not meet the required criteria. It must have at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&), and be at least 8 characters long.",
    });
  }

  try {
    // find existing of user
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({
        success: false,
        data: "User already exist",
      });
    }
    // creating new user instance
    const user = new User({ firstname, lastname, password, email });

    // saving the newly created user
    await user.save();

    // response to the client for a successful user creation
    res
      .status(201)
      .json({ success: true, data: "User registered successfully" });
  } catch (err) {
    // server error response
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
    });
  }
};
