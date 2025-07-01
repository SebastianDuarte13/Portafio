export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

export interface Skill {
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface ContactForm {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}
