import Modal from 'react-modal'
import { TPokemon } from '../api/config';
import styles from '../styles/PokemonDetails.module.css'

interface PokemonModalProps { pokemon: TPokemon; isOpen: boolean; onClose: () => void }

const PokemonDetails = ({ pokemon, isOpen, onClose }: PokemonModalProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalles del Pokémon"
            className={styles.modal}>
            <h2>{pokemon.nombre}</h2>
            <p>ID: {pokemon.id}</p>
            <p>Tipo 1: {pokemon.tipo1}</p>
            {pokemon.tipo2 && <p>Tipo 2: {pokemon.tipo2}</p>}
            <p>{pokemon.descripcion}</p>
            <p><b>Evoluciona en: </b>{pokemon.evolucion ?? "-"}</p>
            <button onClick={onClose}>Cerrar</button>
        </Modal>
    )
}

export default PokemonDetails