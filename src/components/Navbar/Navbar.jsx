// connect the css to the jsx
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Crislyns's Portfolio</h2>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;