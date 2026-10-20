"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import logo from "@/assets/logo.png";

const links = [
  { href: "/", label: "Início", icon: <AiOutlineHome style={{ marginBottom: "2px" }} /> },
  { href: "/about/", label: "Sobre", icon: <AiOutlineUser style={{ marginBottom: "2px" }} /> },
  { href: "/project/", label: "Projetos", icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> },
  { href: "/resume/", label: "Currículo", icon: <CgFileDocument style={{ marginBottom: "2px" }} /> },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex">
          <Image src={logo} className="img-fluid logo" alt="Pedro Klaus" priority />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => updateExpanded(!expand)}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Item key={link.href}>
                <Nav.Link
                  as={Link}
                  href={link.href}
                  active={pathname === link.href}
                  onClick={() => updateExpanded(false)}
                >
                  {link.icon} {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/PedroKklaus"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="GitHub"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
