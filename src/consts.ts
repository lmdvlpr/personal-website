import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "<lmdvlpr/>",
  DESCRIPTION:
    "Este é o meu espaço na internet, onde escrevo sobre assuntos do meu interesse e que possam auxiliar outros desenvolvedores.",
  EMAIL: "contato.lukamota@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Página inicial do blog do Lucas Mota",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Uma coleção de artigos sobre temas pelos quais sou apaixonado.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projetos",
  DESCRIPTION:
    "Aqui você encontrará alguns dos meus projetos com links para repositórios e demonstrações ao vivo.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://twitter.com/lmdvlpr",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/lmdvlpr",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/lmdvlpr",
  },
];
