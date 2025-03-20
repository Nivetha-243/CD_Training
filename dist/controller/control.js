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
//get controller
const controlComments = {
    GetRequest: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const q = `SELECT * from Info`;
            yield con.promise().query(q);
            res.status(202).json({
                user: data[0],
            });
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    })
    //post controller
    ,
    //post controller
    PostRequest: (req, res) => {
        res.send("Hiii Kumareee...! Epti Iruka");
    },
    PutRequest: (req, res) => {
        res.send("Hiii Kumareee...! Epti Iruka");
    },
    PatchRequest: (req, res) => {
        res.send("Hiii Kumareee...! Epti Iruka");
    },
    DeleteRequest: (req, res) => {
        res.send("Hiii Kumareee...! Epti Iruka");
    }
};
module.exports = controlComments;
