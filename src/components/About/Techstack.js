import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3, FaBootstrap, FaAngular, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiCsharp, SiDotnet, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>

      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* Bootstrap */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>

      {/* C# */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      {/* .NET */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

      {/* Angular */}
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
      </Col>

      {/* TypeScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      {/* ReactJS */}
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>

      {/* NodeJS */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      {/* PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

    
    </Row>
  );
}

export default Techstack;
