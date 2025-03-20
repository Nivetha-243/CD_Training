"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
//created connection to database
function DatabaseCon() {
    const con = mysql2_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'ApiDB',
        password: 'Tamil@243#243'
    });
    con.connect();
}
module.exports = DatabaseCon;
