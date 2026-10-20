import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

// Usado no rodapé e na seção "Me encontre" da home
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/PedroKklaus", icon: <AiFillGithub /> },
  { label: "Twitter", href: "https://twitter.com/Pedrocaklaus", icon: <AiOutlineTwitter /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pedro-henrique-klaus-25920b1b5/", icon: <FaLinkedinIn /> },
  { label: "Instagram", href: "https://www.instagram.com/pedro.klaaus/", icon: <AiFillInstagram /> },
  { label: "WhatsApp", href: "https://wa.me/+5545991061579", icon: <IoLogoWhatsapp /> },
];
