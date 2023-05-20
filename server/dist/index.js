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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const Type_1 = require("./models/Type");
const Pokemon_1 = require("./models/Pokemon");
const getAllPokemonController_1 = require("./controllers/getAllPokemonController");
const swagger_config_1 = __importDefault(require("./swagger-config"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = 5000;
exports.pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
});
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
(0, swagger_config_1.default)(app);
app.get("/", getAllPokemonController_1.getAllPokemonController);
exports.pool.connect().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    app.listen(PORT);
    yield (0, Type_1.createTypeTable)();
    yield (0, Pokemon_1.createPokemonTable)();
}));
