import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu me chamo <span className="purple">Pedro Klaus</span>, sou
            de <span className="purple"> Curitiba, Paraná, Brasil.</span>
            <br />
            Sou desenvolvedor full-stack com mais de 3 anos na área de sistemas e tecnólogo em Análise e
            Desenvolvimento de Sistemas pela UniAmérica Centro Universitário.
            <br />
            <br />
            Hoje sou desenvolvedor full-stack pleno na <span className="purple">Linked Data</span>, onde
            trabalho de ponta a ponta numa plataforma web de gestão com C#/.NET e React/Next.js: modelagem de
            dados, regras de negócio, APIs REST e interfaces.
            <br />
            <br />
            A vivência em suporte me ajuda a entender o problema do usuário antes de escrever código.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Realizar atividades físicas
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
