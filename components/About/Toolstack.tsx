import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIntellijidea,
  SiVercel,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const tools = [
  { icon: <FaWindows />, name: "Windows" },
  { icon: <TbBrandVscode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiIntellijidea />, name: "IntelliJ" },
  { icon: <SiVercel />, name: "Vercel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name} title={tool.name}>
          {tool.icon}
          <div className="tech-icons-label">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
