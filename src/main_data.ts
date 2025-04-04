import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port:3306,
    username: "root",
    password: "Tamil@243#243",
    database: "ApiDB",
    synchronize: false,
    logging: true,
    entities: [process.cwd()+"/src/entity/*.ts"],
    subscribers: [],
    migrations: [process.cwd()+"/src/migrations/*.ts"],
})