// Routes
import { Link } from "react-router-dom";

// Images
import logo from "../assets/logo.png";

// Icons
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main_footer">
        <section>
          <div className="main_footer_about">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" /> EliteMotors
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quod quibusdam autem repellendus iste voluptatibus
              obcaecati, quidem ex ullam fugit amet quae! Itaque dolore
              molestiae vero praesentium aliquam dicta dignissimos.
            </p>
          </div>
          <div className="main_footer_explore">
            <h2>Explore</h2>
            <ul>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Apresentações</a>
              </li>
              <li>
                <a href="#">Categorias</a>
              </li>
              <li>
                <a href="#">Plano de Preços</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="main_footer_category">
            <h2>Categorias</h2>
            <ul>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Apresentações</a>
              </li>
              <li>
                <a href="#">Categorias</a>
              </li>
              <li>
                <a href="#">Plano de Preços</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="main_footer_newsletter">
          <h2>Boletim de Notícias</h2>
          <form>
            <input
              type="email"
              name="email"
              id="Footeremail"
              placeholder="e-mail"
            />
            <button className="subscribe">Inscreva-se</button>
          </form>
        </div>
      </div>

      <div className="copyright_section">
        <div>
          <p>© Copyright 2023 by EliteMotors</p>
        </div>

        <div className="social_medias">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                {<BsFacebook />}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                {<BsTwitter />}
              </a>
            </li>
            <li>
              <a href="https://br.pinterest.com/" target="_blank">
                {<BsPinterest />}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                {<BsInstagram />}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
