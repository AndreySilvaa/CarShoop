// Components
import Car from "../../components/Car";

// Routes
import { useParams } from "react-router-dom";

// Icons
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

// Hooks
import { useEffect, useState } from "react";

// Data
import { cars } from "../../data/cars";

// Interfaces
import { Cars } from "../../interfaces/Cars";

const Brand = () => {
  const { brand } = useParams();
  const [carsCategory, setCarsCategory] = useState<null | Cars[] | undefined>(
    null
  );
  const [displayCar, setDisplayCar] = useState<string>("grade");

  useEffect(() => {
    // filtrar os carros de acordo com a marca(brand) e com os mais recentes e criar um novo array para carsCategory
    let carsBrand = cars
      .filter((car) => {
        return car.brand === brand;
      })
      .sort((a, b) => {
        return b.year - a.year;
      });

    setCarsCategory(carsBrand);
  }, [brand]);

  // Funcionalidade para filtrar os carros de acordo com o preço ou o ano
  const carsFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let itemSelected = e.target.selectedOptions[0].value;
    let carsFiltered = carsCategory;

    /*
      Nesse techo de código iremos criar uma cópia do array original "carsFiltered" usando o operador
      spread [...], no entando, antes disso temos que garantir que o "carsFiltered" seja de fato um
      array, fazemos isso utilizando o "Array.isArray()". Dessa forma, garantimos que o resultado do
      sort seja de fato retornado para o carsFiltered.
    */
    if (itemSelected === "younger" && Array.isArray(carsFiltered)) {
      carsFiltered = [...carsFiltered].sort((a, b) => {
        return b.year - a.year;
      });
    } else if (itemSelected === "expensive" && Array.isArray(carsFiltered)) {
      carsFiltered = [...carsFiltered].sort((a, b) => {
        return b.price - a.price;
      });
    } else if (itemSelected === "older" && Array.isArray(carsFiltered)) {
      carsFiltered = [...carsFiltered].sort((a, b) => {
        return a.year - b.price;
      });
    } else if (itemSelected === "cheaper" && Array.isArray(carsFiltered)) {
      carsFiltered = [...carsFiltered].sort((a, b) => {
        return a.price - b.price;
      });
    }

    setCarsCategory(carsFiltered);
  };

  // Funcionalidade para alterar a exibição de blocos para listas
  const alterDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.currentTarget);

    // TOGGLE ENTRE GRADE E LIST
    if (e.currentTarget.className === "lists") {
      setDisplayCar("list");
    } else if (e.currentTarget.className === "blocks") {
      setDisplayCar("grade");
    }
  };

  return (
    <section className="mark_section">
      <div className="search_cars">
        <div className="search_cars_results">
          Resultados encontrados{" "}
          <div className="numCars">{carsCategory?.length}</div>
        </div>

        <div className="search_cars_filters">
          <select name="cars" id="" onChange={(e) => carsFilter(e)}>
            <option value="younger">ANO MAIS NOVO</option>
            <option value="older">ANO MAIS ANTIGO</option>
            <option value="expensive">MAIOR PREÇO</option>
            <option value="cheaper">MENOR PREÇO</option>
          </select>

          <div className="search_cars_organize">
            <div className="lists" onClick={(e) => alterDisplay(e)}>
              <TfiMenuAlt />
            </div>

            <div className="blocks" onClick={(e) => alterDisplay(e)}>
              <CgMenuGridR />
            </div>
          </div>
        </div>
      </div>

      <section className={displayCar}>
        {" "}
        {/* toggle class between grade and list */}
        {carsCategory?.map((car) => (
          <Car
            key={car.id}
            image={car.image}
            name={car.name}
            year={car.year}
            seats={car.seats}
            march={car.march}
            price={car.price}
            display={displayCar}
            id={car.id}
          />
        ))}
      </section>
    </section>
  );
};

export default Brand;
