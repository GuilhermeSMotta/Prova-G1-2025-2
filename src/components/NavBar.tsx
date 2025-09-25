import { NavLink } from "react-router-dom";
import './Navbar.css';
const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Animais</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
        </nav>
    )
}

export default NavBar;