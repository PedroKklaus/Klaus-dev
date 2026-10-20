import Image from "next/image";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import Curriculo from "@/assets/Curriculo.png";

const pdf = "/Pedro_Henrique_Klaus_Curriculo.pdf";

function DownloadButton() {
  return (
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button as="a" variant="primary" href={pdf} download style={{ maxWidth: "250px" }}>
        <AiOutlineDownload />
        &nbsp;Baixar currículo (PDF)
      </Button>
    </Row>
  );
}

function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <DownloadButton />
        <Row className="resume">
          <Image
            src={Curriculo}
            alt="Currículo de Pedro Henrique Klaus"
            style={{ width: "52%", height: "auto" }}
            priority
          />
        </Row>
        <DownloadButton />
      </Container>
    </div>
  );
}

export default Resume;
