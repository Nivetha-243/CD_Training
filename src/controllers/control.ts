import {Request, Response} from "express";
import { myDataSource } from "../main_data";
//import { User } from "../entity/entity";
import { StudentsDetails } from "../entity/studentsInfo";



export class ControlStates {


    async insert (req: Request, res: Response){
        console.log('test')
        try{
            console.log('req.body', req.body)
        const user = await myDataSource.getRepository(StudentsDetails).create(req.body)
        const results = await myDataSource.getRepository(StudentsDetails).save(user)
        res.send(results)
        console.log("Data Posted")
    }
    catch(err){
        res.status(500).json(
            console.log(err)
        )
    }
}  


    async use (req: Request, res: Response){
        console.log("check")
    try{
        const user = await myDataSource.getRepository(StudentsDetails).find()
        const result = res.send(user)
        res.status(200).json({
            result
        })
    }
    catch(err){
        res.status(500).json(
        console.log(err)
    )
}
}

async singleuse (req: Request, res: Response){

try{
    const id = parseInt(req.params.id)
    const user = await myDataSource.getRepository(StudentsDetails).findOne({where
        :{id:id}})
    
    res.status(200).json({
        user
    })
}
catch(err){
    res.status(500).json(
    console.log(err)
)
}
}
async singleusebyemail (req: Request, res: Response){

    try{
        const email = req.params.email;
        const user = await myDataSource.getRepository(StudentsDetails).findOne({where
            :{email:email}});
        res.status(200).json({
            result:user
        })
    }
    catch(err){
        res.status(500).json(
        console.log(err)
    )
    }
    }

async deletecon (req: Request, res: Response){
    try{
        const id = parseInt(req.params.id)
        console.log(id)
        const user = await myDataSource.getRepository(StudentsDetails).delete({id:id})
        res.status(200).json({
            message: "success"
        }
    )
    }
    catch(err){
        res.status(500).json({
            message: err
        }
    )
}
}

async putop (req: Request, res: Response){
    try{
        const id = parseInt(req.params.id)
        const common = await myDataSource.getRepository(StudentsDetails).findOne({where
            :{id:id}
        })
        const add = myDataSource.getRepository(StudentsDetails).merge(common as StudentsDetails, req.body);
        const result = await myDataSource.getRepository(StudentsDetails).save(add);
        res.status(200).json({
            message: "success",
            payload: result
        })
    }
    catch(err){
        res.status(500).json({
        message: err
    })
}
}

async check (req: Request, res: Response){
    try{
        res.send("Checking successful")
        }
    
    catch(err){
        res.status(500).json({
        message: err
    })
}



}}
