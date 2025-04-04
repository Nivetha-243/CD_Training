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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
// import { getRepository } from "typeorm";
//import { LogTimings } from "concurrently";
const class_1 = require("../entity/class");
const main_data_1 = require("../main_data");
const dataVal = [
    {
        "id": 1,
        "under": 15 - 18,
        "normal": 21 - 25,
        "over": 25 - 30
    },
    {
        "id": 2,
        "under": 15 - 18,
        "normal": 21 - 25,
        "over": 25 - 30
    }
];
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!main_data_1.myDataSource.initialize) {
            yield main_data_1.myDataSource.initialize();
        }
        // console.log( "----------------->",myDataSource.entityMetadatas)
        const valuue = yield main_data_1.myDataSource.getRepository(class_1.Classification);
        for (let i of dataVal) {
            yield valuue.create(i);
            console.log("successfull created", valuue);
            yield valuue.save(i);
        }
    });
}
//seed();
// /src/seeders/seed.ts
