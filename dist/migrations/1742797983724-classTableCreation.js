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
exports.ClassTableCreation1742797983724 = void 0;
class ClassTableCreation1742797983724 {
    constructor() {
        this.name = 'ClassTableCreation1742797983724';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`classification\` (\`id\` int NOT NULL AUTO_INCREMENT, \`under\` int NOT NULL, \`normal\` int NOT NULL, \`over\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE \`classification\``);
        });
    }
}
exports.ClassTableCreation1742797983724 = ClassTableCreation1742797983724;
