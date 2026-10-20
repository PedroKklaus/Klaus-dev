import { Container, Row, Col } from "react-bootstrap";
import Avatar from "./Avatar";
import { socialLinks } from "../socialLinks";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE <span className="purple"> APRESENTAR-ME</span>
            </h1>
            <p className="home-about-body">
              Sou desenvolvedor full-stack e gosto de construir produtos web de ponta a ponta, do banco de dados à interface.
              <br />
              <br /> Sempre fui apaixonado por computadores e jogos online e, com influência dos meus tios, que são
              programadores, iniciei na área da programação em 2022, onde comecei a fazer faculdade de análise e
              desenvolvimento de sistemas. Durante o tempo de Faculdade, realizei também cursos de programação, como Lógica
              de Programação, Python, JavaScript e React.
              <br />
              Entrei 100% na área em março de 2023, quando fiz meu primeiro estágio como desenvolvedor e desde então estou
              focado 100% na programação. Atualmente trabalho como
              <i>
                <b className="purple"> desenvolvedor full-stack pleno. </b>
              </i>
              <br />
              <br />
              Minha área de interesse é a construção de novas&nbsp;
              <i>
                <b className="purple">tecnologias e produtos Web. </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Avatar />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE</h1>
            <p>
              Sinta-se à vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map((link) => (
                <li className="social-icons" key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
