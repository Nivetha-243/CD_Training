// import { getRepository } from "typeorm";
//import { LogTimings } from "concurrently";
import { Classification } from "../entity/class";
import { myDataSource } from "../main_data";




const dataVal = [
    { 
    "id" : 1,
    "under" : 15-18,
    "normal" : 21-25,
    "over" : 25-30
}, 
{ 
    "id" : 2,
    "under" : 15-18,
    "normal" : 21-25,
    "over" : 25-30
}
]


export async function seed()

 {
    if(!myDataSource.initialize){
    await myDataSource.initialize();
    }
   // console.log( "----------------->",myDataSource.entityMetadatas)
const valuue =  await myDataSource.getRepository(Classification);
    for (let i of dataVal)
        {
    await valuue.create(i);
    console.log("successfull created",valuue);
    await valuue.save(i);

}
}
//seed();
// /src/seeders/seed.ts