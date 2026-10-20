import { Container, Row, Col } from "react-bootstrap";
import ProjectCard, { type Project } from "./ProjectCard";
import Particle from "../Particle";
import afra from "@/assets/Projects/afra.png";
import inutri from "@/assets/Projects/inutri.png";
import lumin from "@/assets/Projects/lumin.png";
import ana from "@/assets/Projects/ana.png";

const projects: Project[] = [
  {
    imgPath: inutri,
    title: "inutri",
    description:
      "Plataforma SaaS para nutricionistas e clínicas: prontuário, plano alimentar com a base de alimentos TACO e Open Food Facts, agenda, financeiro com assinaturas (Pix, boleto e cartão) e um app para o paciente acompanhar o plano.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://inutri-teste-ten.vercel.app/",
  },
  {
    imgPath: lumin,
    title: "Lumin Imports",
    description:
      "Loja virtual de cosméticos importados, com catálogo filtrável por categoria, marca e destaques, carrinho com finalização do pedido pelo WhatsApp e painel administrativo de produtos.",
    tags: ["React", "Vite", "Supabase"],
    demoLink: "https://luminimports.vercel.app/",
  },
  {
    imgPath: ana,
    title: "Portfólio Ana Schaeffer",
    description:
      "Site de portfólio para uma designer de moda e marketing, com seções de serviços, projetos, galeria do Behance e contato.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    ghLink: "https://github.com/PedroKklaus/Portfolio-ANA",
    demoLink: "https://portfolio-ana-mu.vercel.app/",
  },
  {
    imgPath: afra,
    title: "CCIAR",
    description:
      "Projeto realizado para a Prefeitura de Foz do Iguaçu, mais especificamente para o Centro de Convivência do Idoso Afra Roth. Trata-se de um sistema de cadastro, controle de clientes e atividades.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    ghLink: "https://github.com/CCIAR-PI/Projeto-Integrador-CCIAR",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente. Outros estão no meu{" "}
          <a href="https://github.com/PedroKklaus?tab=repositories" target="_blank" rel="noreferrer" className="purple">
            GitHub
          </a>
          .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
