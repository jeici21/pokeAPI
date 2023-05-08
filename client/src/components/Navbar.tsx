import { NavLink } from "react-router-dom"
import logo from '../assets/pokeapi.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/"><img src={logo} alt="logo" className={styles.logo} /></NavLink>
            <form action="/" method="get" className={styles.form}>
                <input type="text" id="header-search" placeholder="Buscar pokémon" />
                <button type="submit">Search</button>
            </form>
            <div className={styles.links}>
                <NavLink to="/about" className={styles.link}>About</NavLink>
                <NavLink to="/contact" className={styles.link}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar