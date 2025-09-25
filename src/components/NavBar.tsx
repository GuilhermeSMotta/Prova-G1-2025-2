import { NavLink } from "react-router-dom";
import './Navbar.css';
const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Tarefas</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
        </nav>
    )
}

export default NavBar;