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
exports.ControlStates = void 0;
const main_data_1 = require("../main_data");
const entity_1 = require("../entity/entity");
class ControlStates {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield main_data_1.myDataSource.getRepository(entity_1.User).create(req.body);
                const results = yield main_data_1.myDataSource.getRepository(entity_1.User).save(user);
                res.send(results);
                console.log("Data Posted");
            }
            catch (err) {
                res.status(500).json(console.log(err));
            }
        });
    }
    use(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield main_data_1.myDataSource.getRepository(entity_1.User).find();
                const result = res.send(user);
                res.status(200).json({
                    result
                });
            }
            catch (err) {
                res.status(500).json(console.log(err));
            }
        });
    }
    deletecon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(id);
                const user = yield main_data_1.myDataSource.getRepository(entity_1.User).delete({ id: id });
                res.status(200).json({
                    message: "success"
                });
            }
            catch (err) {
                res.status(500).json({
                    message: err
                });
            }
        });
    }
    putop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const common = yield main_data_1.myDataSource.getRepository(entity_1.User).findOne({ where: { id: id }
                });
                const add = main_data_1.myDataSource.getRepository(entity_1.User).merge(common, req.body);
                const result = yield main_data_1.myDataSource.getRepository(entity_1.User).save(add);
                res.status(200).json({
                    message: "success",
                    payload: result
                });
            }
            catch (err) {
                res.status(500).json({
                    message: err
                });
            }
        });
    }
}
exports.ControlStates = ControlStates;
