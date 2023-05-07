import { Request, Response } from "express";
import { pool } from "../index";
import { TPokemon } from "../models/Pokemon";

export async function getPokemonController(req: Request, res: Response) {
    try {
        const { rows } = await pool.query<TPokemon>(`
            SELECT Pokemon.nombre, Pokemon.descripcion, Tipo.img as tipo1, Tipo2.img as tipo2, Pokemon.evolucion, Pokemon.altura, Pokemon.peso, Pokemon.img
            FROM Pokemon LEFT JOIN Tipo ON Pokemon.tipo1 = Tipo.id
            LEFT JOIN Tipo Tipo2 ON Pokemon.tipo2 = Tipo2.id WHERE Pokemon.id = $1;
        `, [req.params.pokemonId]);
        if (!rows[0]) res.status(404).send("Pokémon no encontrado");
        res.json(rows[0]);
    } catch (err: unknown) {
        console.error(err);
        res.status(500).send("Se produjo un error.");
    }
}