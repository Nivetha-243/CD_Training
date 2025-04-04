import { NextFunction, Request, Response } from "express";
import { myDataSource } from "../main_data";
import { StudentsDetails } from "../entity/studentsInfo";

export const authorizationprocess = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = myDataSource.getRepository(StudentsDetails);
    const user = await userRepo.findOne({ where: { email:req.body.email } });
    
    if (!roles.includes(user?.roles as any)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }
    next();
  };
};