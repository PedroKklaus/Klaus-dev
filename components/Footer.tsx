import { Container, Row, Col } from "react-bootstrap";
import { socialLinks } from "./socialLinks";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Pedro Klaus · Desenvolvedor Full-Stack</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link) => (
              <li className="social-icons" key={link.label}>
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
