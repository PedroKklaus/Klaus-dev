import type { StaticImageData } from "next/image";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export type Project = {
  imgPath: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  ghLink?: string;
  demoLink?: string;
};

function ProjectCard({ imgPath, title, description, tags, ghLink, demoLink }: Project) {
  return (
    <Card className="project-card-view">
      <CardImg variant="top" src={imgPath.src} alt={`Tela do projeto ${title}`} loading="lazy" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText style={{ textAlign: "justify" }}>{description}</CardText>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}
        {demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: ghLink ? "10px" : 0 }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
