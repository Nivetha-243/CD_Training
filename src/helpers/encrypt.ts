import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { JwtPayload } from "jsonwebtoken";

dotenv.config();

const { JWT_SECRET = "" } = process.env;
export class encrypt {
  static async encryptpass(password: string) {
    return bcrypt.hash(password, 12);
  }
  static comparepassword(hashPassword: string, password: string) {
    return bcrypt.compare(password, hashPassword);
  }

  static generateToken(payload: JwtPayload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  }
}