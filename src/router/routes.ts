import {ControlStates} from "../controllers/control"; 
import { Router } from "express";
import {ErrHandle} from "../middlewares/errmiddle";
import { AuthController } from "../controllers/authcontrol";
import { Authentification } from "../middlewares/auth.middle";
import { authorizationprocess } from "../middlewares/author.middle";


const router = Router();

const control = new ControlStates();

router.post("/register", control.insert)

router.get("/check", control.check)

router.post("/login", AuthController.login)

router.get("/use/:id", Authentification, control.singleuse)

router.get("/use/:email", Authentification, control.singleusebyemail)

router.delete("/deletecon/:id", control.deletecon)

router.put("/put/:id", control.putop)

export default router;