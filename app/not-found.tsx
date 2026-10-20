import Link from "next/link";
import { Container } from "react-bootstrap";
import Particle from "@/components/Particle";

export default function NotFound() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ minHeight: "60vh" }}>
        <h1 className="project-heading">
          Página <strong className="purple">não encontrada</strong>
        </h1>
        <p style={{ color: "white" }}>
          Este endereço não existe. <Link href="/" className="purple">Voltar para o início</Link>
        </p>
      </Container>
    </Container>
  );
}
