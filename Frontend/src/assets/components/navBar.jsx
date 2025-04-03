import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🎟 Event Platform</h1>
      <div>
        <Link to="/">Eventos</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
        <Link to="/my-events">Mis Eventos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
