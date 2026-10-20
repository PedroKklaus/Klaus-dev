import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Experience from "./Experience";
import Toolstack from "./Toolstack";
import laptopImg from "@/assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Saiba quem <strong className="purple">eu sou</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <Image src={laptopImg} alt="Ilustração de um desenvolvedor trabalhando" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="project-heading">
          <strong className="purple">Experiência </strong> profissional
        </h2>
        <Experience />

        <h2 className="project-heading">
          <strong className="purple">Skills </strong> profissionais
        </h2>
        <Techstack />

        <h2 className="project-heading">
          <strong className="purple">Ferramentas</strong> que utilizo
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
