import express, {Express} from "express";
import { controlComments } from "./src/controller/control";
const port = 8000;
const app: Express = express();

app.get("/", controlComments.GetRequest);
// app.post ("/post",controlComments.PostRequest);
// app.put ("/put",controlComments.PostRequest);
// app.patch ("/patch",controlComments.PostRequest);
// app.delete ("/delete",controlComments.PostRequest);

app.listen(port);

