import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { secretKey } from "./secrets";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  var token: any = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      data: "Not Authorized",
    });
  }

  token = token!.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey!);
    console.log(decoded);
    next();
  } catch (err) {
    return res.status(401).json();
  }
};
