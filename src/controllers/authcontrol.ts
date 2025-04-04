import { NextFunction, Request, Response } from "express";
import { myDataSource } from "../main_data";
//import { User } from "../entity/entity";
import { StudentsDetails } from "../entity/studentsInfo";
//import { encrypt } from "../helpers/encrypt";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export class AuthController {
    static async login (
      req: Request,
      res: Response,
      next: NextFunction) :Promise<any> {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(500).json({ message: " Email and Password required" });
        }
        const userRepository = myDataSource.getRepository(StudentsDetails);

        const user = await userRepository.findOne({
            where: { email: email } });  

      console.log (password, user?.password)
        if (password === user?.password) {
          const token = jwt.sign({ email:email, password:password}, 'test', { expiresIn: "1d" });  
          res.status(200).json({ message: "Login successful", accessToken: token })
        }

        else{
          console.log('elseeeeeee')
          res.status(404).json({ message: "User not found" });
        }
        

        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
     
    }

  }
  