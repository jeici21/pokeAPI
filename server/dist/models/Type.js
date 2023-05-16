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
exports.createTypeTable = void 0;
const __1 = require("..");
const createTypeTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield __1.pool.connect();
    try {
        yield client.query(`CREATE TABLE IF NOT EXISTS Tipo (
            id SERIAL PRIMARY KEY, 
            nombre VARCHAR(255) NOT NULL,
            img VARCHAR(255) NOT NULL
        );`);
    }
    finally {
        client.release();
    }
});
exports.createTypeTable = createTypeTable;
