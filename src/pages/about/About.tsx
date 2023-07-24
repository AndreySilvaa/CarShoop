import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>Sobre nós</h1>

      <div className="about_content">
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            amet consequatur aspernatur labore? Provident illo accusantium, amet
            vitae facere, earum, praesentium distinctio laudantium esse nisi
            culpa ullam! Nesciunt, dignissimos error?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            suscipit sapiente quasi soluta doloremque, quae facere officiis
            asperiores, ut expedita laboriosam officia illo eaque dolore odio
            magni enim id quis!
          </li>
        </ol>

        <div className="about_content_img">
          <img src={about} alt="about_img" />
        </div>
      </div>
    </div>
  );
};

export default About;
