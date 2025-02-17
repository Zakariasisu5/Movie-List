import '../css/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Favorite" className="nav-link">Favorite</Link>
            </div>
        </nav>
    );
}

export default NavBar;