"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tamil@243#243",
    database: "ApiDB",
    synchronize: false,
    logging: true,
    entities: [process.cwd() + "/src/entity/*.ts"],
    subscribers: [],
    migrations: [process.cwd() + "/src/migrations/*.ts"],
});
