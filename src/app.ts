import express, { Express, NextFunction, Request, Response } from "express";
import { myDataSource } from "./main_data";
import router from './router/routes';
import { seed } from './seeders/seed';
import { ErrHandle } from "./middlewares/errmiddle";
import  cors  from 'cors';

// establish database connection

// create and setup express app
const app = express()
const corsOptio ={
    origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
}
app.use(cors(corsOptio));
// app.options('*',cors());
// var allowCrossDomain = function(req : Request, res: Response,next: NextFunction) {
//   res.header('Access-Control-Allow-Origin', 'https://localhost/5173');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');
//   next();  
// }
// app.use(allowCrossDomain);
app.use(express.json())
app.use(ErrHandle);

app.listen(5000,async()=>{
    console.log("Server on... in 5000");
    
    await myDataSource.initialize();
    await seed();

    console.log("Db Connected");
});

app.use("/", router);


// register routes


// app.get("/users", async function (req: Request, res: Response) {
//     const users = await myDataSource.getRepository(User).find()
//     res.json(users)
// })

// app.get("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     res.send(results)
//     return;
// })


// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     res.send(results)
//     return;
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })
