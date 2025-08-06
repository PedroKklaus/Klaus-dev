import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Curriculo from "../../Assets/../Assets/Curriculo.png";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <img src={Curriculo} alt="Curriculo" style={{ width: "52%", height: "auto" }} />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
