import { useState, useEffect } from "react";

// Firebase
import { auth } from "../../firebase/config";

// Routes
import { useParams } from "react-router-dom";

// Interfaces
import { Cars } from "../../interfaces/Cars";

// Data
import { cars } from "../../data/cars";

// Marks
import { marks } from "../../data/marks";

// Routes
import { Link } from "react-router-dom";

// Icons
import { BsFiletypePdf } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

// PDF Download
// @ts-ignore
import html2pdf from "html2pdf.js"; // Foi necessário usar // @ts-ignore pois não há uma declaração de tipo oficial para a biblioteca html2pdf.js

const Car = () => {
  const [car, setCar] = useState<Cars[] | null>(null);
  const [andyNumber, setAndyNumber] = useState<string>("(75) 98844-8451");
  
  const { id } = useParams();
  const [modal, setModal] = useState<boolean>(false);

  

  useEffect(() => {
    let carsArr = cars;
    if (Array.isArray(carsArr)) {
      carsArr = [...carsArr].filter((car) => {
        return car.id == Number(id);
      });
      console.log(carsArr[0]);
      setCar(carsArr);
    }
  }, [id]);

  // PDF Download
  const handlePDF = () => {
    const element = document.getElementById("page-content");

    if (element) {
      const opt = {
        filename: "car.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  // Print Function
  const handlePrint = () => {
    window.print();
  };

  // BookMark function
  const handleBookMark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.currentTarget.children[0]);

    e.currentTarget.children[0].classList.toggle("BookMark");

    console.log(auth.currentUser?.displayName)
  };

  // ModalShare
  const ModalShare = (value: boolean) => {
    setModal(value);
  };

  return (
    <section className="CarPage">
      {/* MODAL SHARE */}
      {modal && (
        <div className="Share_modalwindow">
          <div onClick={() => ModalShare(false)} className="close">
            {<AiOutlineCloseCircle />}
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
      )}

      {car && (
        <div className="CarPage_info" id="page-content">
          <div className="CarPage_info_intro">
            <h2>{car[0].name}</h2>

            <div className="CarPage_info_intro_buttons">
              <div onClick={handlePDF}>
                {<BsFiletypePdf />} <span>Download</span>
              </div>
              <div onClick={handlePrint}>
                {<AiFillPrinter />} <span>Print</span>
              </div>
              <div onClick={(e) => handleBookMark(e)}>
                {<AiFillHeart />}
                <span>BookMark</span>
              </div>
              <div onClick={() => ModalShare(true)}>
                {<BsShare />}
                <span>Share</span>
              </div>
            </div>
          </div>

          <div className="CarPage_CarImage_Contact">
            <img src={car[0].image} alt="car" />
            <div className="contacts">
              <a href="tel:75988448451" target="_blank" className="author_phone">
                <span>{<AiFillPhone />}</span>{" "}
                <span>{andyNumber}</span>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5575988448451"
                className="whatsapp_number"
              >
                <span>{<AiOutlineWhatsApp />}</span>{" "}
                <span>{andyNumber}</span>
              </a>
              <a href="mailto:andreysl2001@gmail.com" className="author_email">
                <span>{<AiOutlineMail />}</span> <span>Enviar E-mail</span>
              </a>
            </div>
          </div>

          <div className="CarPage_info_intro_details">
            <div className="features">
              <div>
                <span>Ano do Modelo:</span> <span>{car[0].year}</span>
              </div>
              <div>
                <span>Combustível:</span> <span>{car[0].fuel}</span>
              </div>
              <div>
                <span>Número de Assentos:</span> <span>{car[0].seats}</span>
              </div>
              <div>
                <span>KM:</span> <span>{car[0].km}</span>
              </div>
              <div>
                <span>Marcha:</span> <span>{car[0].march}</span>
              </div>
              <div>
                <span>Cor:</span> <span>{car[0].color}</span>
              </div>
            </div>

            <div className="description">
              <span>DESCRIÇÃO:</span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias corrupti nihil placeat, velit tempora nostrum
                molestiae iusto sed explicabo. Laborum qui ab corporis unde
                neque enim nihil eaque aut eos. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Natus omnis perspiciatis iure
                doloribus, corporis exercitationem quae in quibusdam ratione
                atque quisquam quaerat ad, laudantium distinctio saepe odio
                laborum sequi necessitatibus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab, voluptas dignissimos,
                repellendus corporis ducimus, provident eum at iusto sit est
                possimus nam recusandae reiciendis dolor exercitationem eius
                explicabo incidunt ut. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Omnis impedit quas molestias deleniti quod
                veritatis eveniet hic similique dolorum.
              </span>
            </div>
          </div>
        </div>
      )}

      <article>
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
      </article>
    </section>
  );
};

export default Car;
