"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const control_1 = require("./src/controller/control");
const port = 8000;
const app = (0, express_1.default)();
app.get("/", control_1.controlComments.GetRequest);
// app.post ("/post",controlComments.PostRequest);
// app.put ("/put",controlComments.PostRequest);
// app.patch ("/patch",controlComments.PostRequest);
// app.delete ("/delete",controlComments.PostRequest);
app.listen(port);
