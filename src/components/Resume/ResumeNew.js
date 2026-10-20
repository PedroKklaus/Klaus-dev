import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import Curriculo from "../../Assets/Curriculo.png";

const pdf = process.env.PUBLIC_URL + "/Pedro_Henrique_Klaus_Curriculo.pdf";

function DownloadButton() {
  return (
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button variant="primary" href={pdf} download style={{ maxWidth: "250px" }}>
        <AiOutlineDownload />
        &nbsp;Baixar currículo (PDF)
      </Button>
    </Row>
  );
}

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <DownloadButton />
        <Row className="resume">
          <img src={Curriculo} alt="Currículo de Pedro Henrique Klaus" style={{ width: "52%", height: "auto" }} />
        </Row>
        <DownloadButton />
      </Container>
    </div>
  );
}

export default ResumeNew;
