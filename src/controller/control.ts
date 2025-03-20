import express, {Request, Response} from "express";
import { dbconnect } from "../models/data";

//get controller

export const controlComments = { 
GetRequest: async(req: Request, res: Response) => {
    try{
        await dbconnect.promise().query("SELECT * from Info");
        
        res.status(200)
        console.log("success")
    
    }
    
    catch(err){ 
            res.status(500).json({
            message: err,
    })
}}



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
}

