import CardBody from "react-bootstrap/CardBody";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const activities = ["Jogar", "Viajar", "Realizar atividades físicas", "Estudar"];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <CardBody>
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
            {activities.map((activity) => (
              <li className="about-activity" key={activity}>
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>
        </blockquote>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
