import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { secretKey } from "./secrets";

// middleware function handling authorizations using token
export const auth = (req: Request, res: Response, next: NextFunction) => {
  var token: any = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(403).json({
      success: false,
      data: "Token Required",
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
