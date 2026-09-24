import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Elite<span>Furniture</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <span className="cart">
          🛒 {cart.length}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;