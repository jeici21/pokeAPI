import express from "express";
import { config } from "dotenv";
import cors from "cors"
import { Pool } from "pg";
import { createTypeTable } from "./models/Type";
import { createPokemonTable } from "./models/Pokemon";
import { getAllPokemonController } from "./controllers/getAllPokemonController";

config()
const app = express()
const PORT = 5000
export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT!),
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", getAllPokemonController)

pool.connect().then(async () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    app.listen(PORT);
    await createTypeTable()
    await createPokemonTable();
});