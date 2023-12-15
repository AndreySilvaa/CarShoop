import { useRef } from "react";

// Icons
import {AiOutlineLogout} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

// logo
import logo from "../assets/logo.png";

// Routes
import { Link, NavLink, useLocation } from "react-router-dom";

// Firebase
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth"; // Serve para monitorar o estado de autenticação do usuário
import { signOut } from "firebase/auth";

const Navbar = () => {
  let URL = useLocation();
  let { pathname } = URL;
  const words = ["brand", "car", "login", "about", "register"];
  let formatNavbar = words.some((word) => pathname.includes(word));
  const nav = useRef<HTMLUListElement>(null)

  const [user] = useAuthState(auth); // Caso você logue com outro conta o usuário será automáticamente atualizado

  const signUserOut = async () => {
    await signOut(auth);
  };

  // RESPONSIVE MENU
  const openMenu = () => {
    nav.current?.classList.add("fadeInMenu")
  }

  const closeMenu = () => {
    nav.current?.classList.remove("fadeInMenu")
  }

  return (
    <nav className="navbar" style={formatNavbar ? { background: "white" } : {}}>
      <div className="logo">
        <Link to="/" className={formatNavbar ? "formatedLink" : ""}>
          <img src={logo} alt="logo" /> EliteMotors
        </Link>
      </div>

      <span className="menuIcon" onClick={() => openMenu()}>
        <GiHamburgerMenu />
      </span>

      <ul ref={nav}>
        <span className="closeIcon" onClick={() => closeMenu()}>
          <FaWindowClose />
        </span>

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

        {user && (
          <div className="user_account">
            <div>
              <img
                src={user?.photoURL || ""}
                alt="foto do perfil"
                width="40"
                height="40"
              />
              <p className={formatNavbar ? "formatedLink" : ""}>{user?.displayName}</p>
            </div>
            <button className="bt_logout" onClick={signUserOut}>Sair {<AiOutlineLogout/>}</button>
          </div>
        )}

        {!user && (
          <li>
            <NavLink to="/login" className={formatNavbar ? "formatedLink" : ""}>
              Entrar
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
