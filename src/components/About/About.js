import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Experience from "./Experience";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

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
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="Ilustração de um desenvolvedor trabalhando" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Experiência </strong> profissional
        </h1>
        <Experience />

        <h1 className="project-heading">
          <strong className="purple">Skills </strong> profissionais
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que utilizo
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
