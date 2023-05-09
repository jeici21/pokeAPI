import { useEffect, useState } from "react"
import { TPokemon } from "../api/config"
import { getAllPokemon } from "../api/getAllPokemon"
import styles from '../styles/Home.module.css'
import { FaSpinner } from 'react-icons/fa'

const Home = () => {
    const [allPokemon, setAllPokemon] = useState<TPokemon[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchAllPokemon = async () => {
            const newPokemon = await getAllPokemon()
            setAllPokemon(newPokemon)
            setTimeout(() => setIsLoading(false), 1000);
        }
        fetchAllPokemon()
    }, [])

    // Obtener el índice de inicio y fin de los elementos que se muestran en la página actual
    const indexOfLastPokemon = currentPage * pokemonPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    const currentPokemon = allPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)

    // Calcular el número total de páginas
    const totalPages = Math.ceil(allPokemon.length / pokemonPerPage)

    // Función para avanzar a la siguiente página
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Función para retroceder a la página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div>
            {isLoading ? <div className={styles.loading}><FaSpinner className={styles.spinner} /></div> : (
                <div>
                    <h1>Lista de Pokémon</h1>
                    <ul className={styles.allPokemon}>
                        {currentPokemon.map((pokemon) => (
                            <li key={pokemon.id}>
                                <img src={pokemon.img} alt="Imagen pokémon" />
                                <h4>{pokemon.nombre}</h4>
                                <p>{pokemon.descripcion}</p>
                                <button>Más detalles</button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                        <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home