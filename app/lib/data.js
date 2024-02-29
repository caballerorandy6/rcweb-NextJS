import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

export const nav_links = [
  {
    url: "/",
    id: "home",
    label: "Home",
    hash: "#home",
  },
  {
    url: "/projects",
    id: "projects",
    label: "Projects",
    hash: "#projects",
  },
  {
    url: "/about",
    id: "about",
    label: "About",
    hash: "#about",
  },
  {
    url: "/contact",
    id: "contact",
    label: "Contact",
    hash: "#contact",
  },
];

export const social_links = [
  {
    label: "GitHub",
    url: "https://github.com/caballerorandy6",
    id: "github",
    icon: <FaGithub />,
    hash: "#github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/caballerorandy",
    id: "linkedin",
    icon: <FaLinkedin />,
    hash: "#linkedin",
  },
];

export const contact_links = [
  {
    label: "Email",
    url: "mailto:caballerorandy6@gmail.com",
    icon: <FaMailBulk />,
    id: "email",
  },
  {
    label: "Phone",
    url: "tel:+1-832-546-5983",
    icon: <FaPhone />,
    id: "phone",
  },
];
