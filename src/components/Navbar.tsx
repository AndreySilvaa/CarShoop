// Icons
import { BsFillPersonFill } from "react-icons/bs";

// logo
import logo from "../assets/logo.png";

// Routes
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let URL = useLocation();
  let { pathname } = URL;
  const words = ["brand", "car", "login", "about", "register"];
  let formatNavbar = words.some((word) => pathname.includes(word));

  return (
    <nav className="navbar" style={formatNavbar ? { background: "white" } : {}}>
      <div className="logo">
        <Link to="/" className={formatNavbar ? "formatedLink" : ""}>
          <img src={logo} alt="logo" /> EliteMotors
        </Link>
      </div>

      <ul>
        <li>
          <NavLink to="/" className={formatNavbar ? "formatedLink" : ""}>
            Página inicial
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={formatNavbar ? "formatedLink" : ""}>
            Sobre nós
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/register"
            className={formatNavbar ? "formatedLink" : ""}
          >
            <BsFillPersonFill /> Criar conta
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={formatNavbar ? "formatedLink" : ""}>
            Entrar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
