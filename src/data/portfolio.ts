import type { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Landing Pages Responsivas",
    description: "Este proyecto se enfocó en el desarrollo de plantillas CSS y volviéndolas responsivas una y cada una con un menú intuitivo que permite navegar una y cada una de estas pequeñas landing pages. Este proyecto se llevó a cabo con mi colega Samuel Ospina",
    image: "/img/landing-pages.png",
    link: "https://landingpagessamuel.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Catálogo de Restaurante",
    description: "En este proyecto se desarrolló un borrador para presentarle a un cliente de un catálogo de su propio restaurante para mostrar los servicios que ofrece, de manera web y móvil siendo responsivo",
    image: "/img/catalogo-burger.png",
    link: "https://trabajo-reserreccion.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 3,
    title: "Registro de Héroes",
    description: "Este proyecto utiliza las habilidades de HTML, CSS y JavaScript para crear un pequeño formulario para registrar un héroe y almacenarlo en una base de datos con una imagen de dicho héroe",
    image: "/img/registro-heroes.png",
    link: "https://super-heros-five.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"]
  },
  {
    id: 4,
    title: "¿Cuánto Cuesta Mi App?",
    description: "Para este proyecto se realizó una imitación de la famosa app cuanto cuesta mi app, con la que se replicó de la mejor manera utilizando web-components para tener una mejor compilación y desarrollo profesional.",
    image: "/img/cuantocuestamiapp.png",
    link: "https://trabajo-js-chi.vercel.app/",
    technologies: ["Web Components", "JavaScript", "CSS"]
  },
  {
    id: 5,
    title: "Confecciones Pepita",
    description: "Confecciones Pepita, el mejor sistema de desarrollo, intuitivo y amigable a la hora de llevar el control administrativo de tus confecciones en una base de datos que te calcula todo de manera automatizada, ordenada y eficiente",
    image: "/img/confeccionespepita.png",
    link: "https://confecciones-pepita.vercel.app/",
    technologies: ["React", "Node.js", "MySQL", "Express"]
  },
  {
    id: 6,
    title: "PrestService",
    description: "Cuando estamos en una empresa y queremos llevar el control y tener roles y que cada uno de ellos tenga tareas específicas, le presento mi proyecto full stack en el cual vinculamos Html, Css, JavaScript, MySQL, Java y Spring Boot y frameworks como Node.js y arquitectura como la Hexagonal para llevar a cabo una interfaz para administrativos y distintos roles que quieran agregar para llevar el control empresarial y el orden en una empresa de entrada, salida y utilidad de productos en cualquier región, sucursal, etc...",
    image: "/img/prestService.png",
    link: "https://example.com/proyecto6",
    technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "Node.js", "Arquitectura Hexagonal"]
  }
];

export const skills: Skill[] = [
  {
    name: "HTML",
    image: "/img/html.png",
    description: "HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear y estructurar contenido en la web. A través de etiquetas (tags), HTML define la forma y disposición de los elementos en una página web",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    image: "/img/css.png",
    description: "CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación y el diseño visual de un documento HTML. Permite aplicar estilos, como colores, fuentes, márgenes y disposición, a las páginas web, mejorando su apariencia y la experiencia del usuario.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "JavaScript",
    image: "/img/javascript.png",
    description: "JavaScript es un lenguaje de programación interpretado y basado en texto que se utiliza principalmente para crear contenido dinámico e interactivo en sitios web. Junto con HTML y CSS, es uno de los tres componentes fundamentales para el desarrollo web",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "MySQL",
    image: "/img/mysql.png",
    description: "MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto que utiliza el lenguaje SQL (Structured Query Language) para gestionar y manipular bases de datos.",
    link: "https://dev.mysql.com/doc/"
  },
  {
    name: "Java",
    image: "/img/java.png",
    description: "Java es un lenguaje de programación de propósito general, orientado a objetos, que se utiliza ampliamente para el desarrollo de aplicaciones en una variedad de plataformas.",
    link: "https://docs.oracle.com/en/java/"
  },
  {
    name: "Spring Boot",
    image: "/img/Springboot.png",
    description: "Spring Boot es un framework de desarrollo para Java que simplifica la creación de aplicaciones empresariales y servicios web. Basado en el popular framework Spring, Spring Boot permite a los desarrolladores crear aplicaciones de manera rápida y eficiente, utilizando convenciones sobre configuraciones.",
    link: "https://docs.spring.io/spring-boot/index.html"
  },
  {
    name: "Python",
    image: "/img/python.png",
    description: "Python es un lenguaje de programación de alto nivel, interpretado y de propósito general, conocido por su simplicidad y legibilidad, lo que lo hace ideal tanto para principiantes como para desarrolladores experimentados.",
    link: "https://docs.python.org/3/"
  },
  {
    name: "PostgreSQL",
    image: "/img/postgrest.png",
    description: "PostgreSQL (también conocido como Postgres) es un sistema de gestión de bases de datos relacional y orientado a objetos de código abierto, reconocido por su robustez, flexibilidad y conformidad con el estándar SQL.",
    link: "https://www.postgresql.org/docs/"
  },
  {
    name: "Git",
    image: "/img/git.png",
    description: "Git es un sistema de control de versiones distribuido, ampliamente utilizado en el desarrollo de software para gestionar y realizar un seguimiento de los cambios en el código fuente de manera eficiente.",
    link: "https://git-scm.com/doc"
  },
  {
    name: "GitHub",
    image: "/img/github.png",
    description: "GitHub es una plataforma de desarrollo colaborativo basada en la web, que se utiliza principalmente para alojar y gestionar repositorios de código utilizando Git como sistema de control de versiones.",
    link: "https://docs.github.com/es"
  },
  {
    name: "Arduino",
    image: "/img/arduino.png",
    description: "Arduino es una plataforma de hardware y software de código abierto que se utiliza para crear proyectos electrónicos interactivos. Es ampliamente utilizada por aficionados, educadores y profesionales para desarrollar dispositivos y sistemas embebidos.",
    link: "https://docs.arduino.cc/"
  },
  {
    name: "Node.js",
    image: "/img/node.png",
    description: "Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores construir aplicaciones escalables y de alto rendimiento. Utiliza un modelo de I/O no bloqueante, lo que lo hace ideal para aplicaciones que requieren un manejo eficiente de múltiples conexiones simultáneas.",
    link: "https://nodejs.org/docs/latest/api/"
  }
];
