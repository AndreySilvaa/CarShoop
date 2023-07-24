// Data
import { marks } from "../../data/marks";

// Route
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1>Compre, venda ou negocie</h1>
        <h5>Encontre o carro dos seus sonhos</h5>
        <div>
          <span>Carros esportivos e luxuosos</span>
        </div>
      </header>

      <main className="main">
        <section className="marks">
          <h3>Marcas Populares</h3>

          <div className="marks_logo">
            {marks.map((mark, i) => (
              <Link to={`/brand/${mark.name}`} key={i}>
                <img src={mark.img} alt={mark.name} />
                <p>{mark.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
