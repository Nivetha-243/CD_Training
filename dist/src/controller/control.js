"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlComments = void 0;
const data_1 = require("../models/data");
//get controller
exports.controlComments = {
    GetRequest: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield data_1.dbconnect.promise().query("SELECT * from Info");
            res.status(200);
            console.log("success");
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    })
    //post controller
    // PostRequest: (req: Request, res: Response) => {
    //     res.send ("Hiii Kumareee...! Epti Iruka");
    // }
    // PutRequest: (req: Request, res: Response) => {
    //     res.send ("Hiii Kumareee...! Epti Iruka");
    // }
    // PatchRequest: (req: Request, res: Response) => {
    //     res.send ("Hiii Kumareee...! Epti Iruka");
    // }
    // DeleteRequest: (req: Request, res: Response) => {
    //     res.send ("Hiii Kumareee...! Epti Iruka");
    // }
};
