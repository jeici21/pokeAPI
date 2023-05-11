import { useContext, useEffect, useState } from "react"
import { TPokemon } from "../api/config"
import { getAllPokemon } from "../api/getAllPokemon"
import styles from '../styles/Home.module.css'
import { FaSpinner } from 'react-icons/fa'
import { SearchContext } from "./SearchContext"

const Home = () => {
    const [allPokemon, setAllPokemon] = useState<TPokemon[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const { searchTerm } = useContext(SearchContext);

    useEffect(() => {
        const fetchAllPokemon = async () => {
            const newPokemon = await getAllPokemon()
            setAllPokemon(newPokemon)
            setTimeout(() => setIsLoading(false), 1000);
        }
        fetchAllPokemon()
    }, [])

    const indexOfLastPokemon = currentPage * 10
    const indexOfFirstPokemon = indexOfLastPokemon - 10
    const currentPokemon = allPokemon.filter(pokemon =>
        pokemon.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(indexOfFirstPokemon, indexOfLastPokemon)

    // Calcular el número total de páginas
    const totalPages = Math.ceil(allPokemon.length / 10)

    // Función para avanzar a la siguiente página
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    // Función para retroceder a la página anterior
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            {isLoading ? <div className={styles.loading}><FaSpinner className={styles.spinner} /></div> : (
                <div className={styles.home}>
                    <h1>Lista de Pokémon</h1>
                    <ul className={styles.allPokemon}>
                        {currentPokemon.map(pokemon => (
                            <li key={pokemon.id}
                                className={parseInt(pokemon.id) % 3 === 0 ? styles.lastInRow : ""}>
                                <img src={pokemon.img} alt="Imagen pokémon" />
                                <div>
                                    <h2>{pokemon.nombre}</h2>
                                    <div className={styles.types}>
                                        <img src={pokemon.tipo1} alt="Tipo 1" className={styles.type1} />
                                        {pokemon.tipo2 && <img src={pokemon.tipo2} alt="Tipo 2" className={styles.type2} />}
                                    </div>
                                    <button>Más detalles</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.pageButtons}>
                        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                        <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home