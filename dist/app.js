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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_data_1 = require("./main_data");
const routes_1 = __importDefault(require("./router/routes"));
const seed_1 = require("./seeders/seed");
// establish database connection
// create and setup express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(8000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server on... in 8000");
    yield main_data_1.myDataSource.initialize();
    yield (0, seed_1.seed)();
    console.log("Db Connected");
}));
app.use("/", routes_1.default);
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
