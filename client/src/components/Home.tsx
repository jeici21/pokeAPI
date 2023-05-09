import { useEffect, useState } from "react"
import { TPokemon } from "../api/config"
import { getAllPokemon } from "../api/getAllPokemon"

const Home = () => {
    const [allPokemon, setAllPokemon] = useState<TPokemon[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchAllPokemon = async () => {
            const newPokemon = await getAllPokemon()
            setAllPokemon(newPokemon)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
        fetchAllPokemon()
    }, [])

    return (
        <div>
            {isLoading ? <p>Cargando...</p> : (
                <div>
                    <h1>Lista de Pokémon</h1>
                    <ul className='decks'>
                        {allPokemon.map(pokemon => (
                            <li key={pokemon.id}>
                                <img src={pokemon.img} alt="Imagen pokémon" />
                                <h4>{pokemon.nombre}</h4>
                                <p>{pokemon.descripcion}</p>
                                <button>Más detalles</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Home