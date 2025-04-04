import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { ErrHandle } from "./errmiddle";
dotenv.config();

export const Authentification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  try{
  const header = req.headers.authorization;
  if (!header) {
    res.status(401).json({ message: "Unauthorized" });
   
    return;
  }
  const token = header.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });

    return;
  }

  const decode = jwt.verify(token, 'test');
  
  if (!decode) {
    res.status(401).json({ message: "Unauthorized" });
    return;

  }
  console.log("check")

  next();
}
catch(error){
  console.log(error);
  next(ErrHandle)
}
};