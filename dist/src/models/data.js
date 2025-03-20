"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
//created connection to database
// export function DatabaseCon(){
exports.dbconnect = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ApiDB',
    password: 'Tamil@243#243'
});
exports.dbconnect.promise().connect();
// }
