import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { emailRegEx } from "../../utils/constants";
import User from "../../models/Auth/User";
import { secretKey } from "../../utils/secrets";

export const signin = async (req: Request, res: Response) => {
  // sign in logic
  const { email, password } = req.body;

  // validate email
  if (!emailRegEx.test(email)) {
    return res.json({
      success: false,
      data: "Invalid email address",
    });
  }

  try {
    const user = await User.findOne({ email }).exec();
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

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      secretKey!,
      { algorithm: "HS256", expiresIn: "1h" }
    );

    user.token = token;

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    throw new Error("Internal Server Error");
  }
};

export const signup = async (req: Request, res:Response) => {
  // signup logic
  const { firstname, lastname, email, password } = req.body;

  // validate email
  if (!emailRegEx.test(email)) {
    return res.json({
      success: false,
      data: "Invalid email address",
    });
  }

  try{
    const existingUser = await User.findOne({email}).exec();
    if(existingUser){
      return res.json({
        success: false,
        data: "User already exist"
      })
    }
    const user = new User({firstname, lastname, password, email})
    await user.save()
    return res.status(201).json({success: true, data: "User registered"})
  }catch(err){
    throw new Error("Internal Server Error");
  }
};
