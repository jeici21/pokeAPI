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
exports.getAllPokemonController = void 0;
const __1 = require("..");
/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener todos los Pokémon registrados.
 *     responses:
 *       200:
 *         description: Retorna la lista de Pokémon.
 */
function getAllPokemonController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { rows } = yield __1.pool.query(`SELECT Pokemon.id, Pokemon.nombre, Pokemon.descripcion, 
            Tipo.img as tipo1, Tipo2.img as tipo2, Pokemon.evolucion, Pokemon.altura, Pokemon.peso, 
            Pokemon.img FROM Pokemon LEFT JOIN Tipo ON Pokemon.tipo1 = Tipo.id
            LEFT JOIN Tipo Tipo2 ON Pokemon.tipo2 = Tipo2.id ORDER BY Pokemon.id;
        `);
            res.json(rows);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Se produjo un error.");
        }
    });
}
exports.getAllPokemonController = getAllPokemonController;
