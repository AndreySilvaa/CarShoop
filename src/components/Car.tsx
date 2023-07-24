// Icons
import marching from "../assets/march.png";
import places from "../assets/seat.png";
import manufacturing from "../assets/fabricacao-de-automoveis.png";

// Routes
import { Link } from "react-router-dom";

// Interfaces
import { CarComponent } from "../interfaces/CarComponent";

// Formatando um valor numérico para real(R$)

const formatReal = (num: number) => {
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

function Car({
  image,
  name,
  seats,
  year,
  march,
  price,
  display,
  id,
}: CarComponent) {
  return (
    <div className="car_component">
      <div className="car_component_image">
        <Link to={`/car/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="car_component_info">
        <div className="car_component_info_about">
          <Link to={`/car/${id}`}>{name}</Link>
          {display === "list" ? (
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident velit ducimus, consequuntur fugit pariatur odio soluta
              placeat officia unde atque quam incidunt, deleniti blanditiis esse
              ex. Consequatur expedita enim voluptate?
            </p>
          ) : (
            ""
          )}
          <p className="price">{formatReal(price)}</p>
        </div>
        <div className="car_component_info_details">
          <div>
            <img src={marching} alt="marching" />
            <div>{march.slice(0, 4)}</div>
          </div>
          <div>
            <img src={places} alt="places" />
            <div>{seats}</div>
          </div>
          <div>
            <img src={manufacturing} alt="manufacturing" />
            <div>{year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car;
