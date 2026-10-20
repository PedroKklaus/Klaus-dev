import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3, FaBootstrap, FaAngular, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiMicrosoftsqlserver,
  SiMicrosoftazure,
} from "react-icons/si";

const techs = [
  { icon: <SiCsharp />, name: "C#" },
  { icon: <SiDotnet />, name: "ASP.NET Core" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMicrosoftazure />, name: "Azure" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

// Competências do currículo que não têm ícone próprio
const otherSkills = [
  "Entity Framework Core",
  "APIs REST",
  "JWT",
  "OAuth 2.0",
  "Google Calendar/Meet/Gmail APIs",
  "SignalR",
  "Hangfire",
  "Azure Blob Storage",
  "Scrum",
  "Kanban",
  "UML",
  "Modelagem de dados",
];

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        {techs.map((tech) => (
          <Col xs={4} md={2} className="tech-icons" key={tech.name} title={tech.name}>
            {tech.icon}
            <div className="tech-icons-label">{tech.name}</div>
          </Col>
        ))}
      </Row>
      <div className="skill-tags" style={{ paddingBottom: "50px" }}>
        {otherSkills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}

export default Techstack;
