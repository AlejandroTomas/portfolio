import {


    javascript,
    typescript,
    html,
    css,
    sass,
    zustand,

    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    java,
    oracle,
    sql,
    spring,
    planeta1,
    planeta2,
    planeta3,
    planeta4,
    planeta5,
    planeta6,
    planeta7,
    planeta8,
    github
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Introduccion",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contactame",
    },
  ];
  
  const services = [
    {
      title: "Resolución de problemas",
      icon: planeta1,
    },
    {
      title: "Trabajo en equipo",
      icon: planeta2,
    },
    {
      title: "Orientación al detalle",
      icon: planeta3,
    },
    {
      title: "Dedicación",
      icon: planeta4,
    },
    {
      title: "Pensamiento lógico y analítico",
      icon: planeta5,
    },
    {
      title: "Aprendizaje continuo",
      icon: planeta6,
    },
    {
      title: "Adaptabilidad",
      icon: planeta7,
    },
    {
      title: "Pasion",
      icon: planeta8,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "zustand",
      icon: zustand,
    },
    {
      name: "sass",
      icon: sass,
    }
  ];

  const nextTechnologies = [
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Sql",
      icon: sql,
    },
  ]
  
  const experiences = [
    {
      title: "Web Developer Practicas",
      company_name: "Casa de la cultura",
      icon: github,
      iconBg: "#383E56",
      date: "Diciembre 2020 - Mayo 2021",
      points: [
        "Desarrollo y mantenimiento de aplicaciones web, de registro de pagos usando HTML CSS y JS.",
        "Implementar un diseño responsive y garantizar la compatibilidad entre navegadores.",
        "Participar en revisiones de código y añadir nuevas herramientas a la aplicacion.",
      ],
    },
    {
      title: "Web Developer Proyecto Social un mejor estado",
      company_name: "Independiente",
      icon: github,
      iconBg: "#383E56",
      date: "Julio 2021 - Septiembre 2021",
      points: [
        "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
        "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
        "Implementar un diseño responsive y garantizar la compatibilidad entre navegadores.",
        "Participar en revisiones de código.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Marmoleria del Valle",
      icon: github,
      iconBg: "#383E56",
      date: "Noviembre 2022 - Diciembre 2022",
      points: [
        "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
        "Implementar un diseño responsive y garantizar la compatibilidad entre navegadores.",
        "Realizar revisiones de código.",
        "Añadir nuevas herramientas a la aplicacion.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Tienda de abarrotes Alex",
      icon: github,
      iconBg: "#383E56",
      date: "Enero 2023 - Actual",
      points: [
        "Desarrollo y mantenimiento de aplicaciones web usando React.js-Sass-Zustand-Node.js-Mongodb.",
        "Desarrollo de Api y Conexion Socket con Node.js y express permitiendo estar usuarios y negocios conectados de forma simultanea",
        "Desarrollo de logica de negocio",
        "Implementar un diseño responsive y garantizar la compatibilidad entre navegadores.",
        "Añadir nuevas funcionalidades y herramientas a la aplicacion web.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sunnyside Agency",
      description:
        "Challenge sobre maquetacion de una Landing page de agencia de marketing del sitio web Frontend-mentor, con diseño resposivo",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AlejandroTomas/sunnyside-agency-landing-page",
    },
    {
      name: "Japan Travel",
      description:
        "Mi enfoque principal al diseñar esta Landing Page fue capturar la esencia de Japón a través de una combinación de elementos visuales llamativos y una interfaz intuitiva. Al ingresar a la página, los visitantes son recibidos por una fotografía impactante que destaca la belleza y diversidad del país. Esta imagen evoca un sentido de asombro y curiosidad, invitando a los usuarios a explorar más.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "App Deliver El Burguer",
      description:
        "Mi enfoque principal al diseñar esta aplicación fue garantizar una interfaz fácil de usar y una experiencia de usuario sin complicaciones. Desde el momento en que los usuarios abren la aplicación, se encuentran con una pantalla de inicio atractiva y bien organizada que les permite navegar de manera eficiente y realizar pedidos rápidamente.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "SPA ANIMEstore",
      description:
        "Mi enfoque principal al diseñar este spa de anime fue crear un ambiente moderno y temático que transportara a los visitantes a un mundo de fantasía. Desde el momento en que los clientes ingresan a la spa, son recibidos por una estética vibrante y colorida inspirada en sus personajes y series de anime favoritas.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "Sass",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Landing Page Marmoleria",
      description:
        "Mi enfoque principal al diseñar esta Landing Page fue capturar la elegancia y la artesanía de la marmolería a través de un diseño limpio y sofisticado. Al ingresar a la página, los visitantes son recibidos por una fotografía impresionante que muestra una hermosa pieza de mármol o una instalación excepcional que destaca el talento y la habilidad de la marmolería.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "GIMP",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Encriptador Alura Curso One Oracle",
      description:
        "El encriptador ofrece una interfaz sencilla e intuitiva, donde los usuarios pueden ingresar el texto que desean encriptar . Utilizando algoritmos de encriptación , el programa convierte el texto original en un código cifrado, lo que garantiza que solo aquellos con la clave adecuada puedan acceder a la información original.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://alejandrotomas.github.io/encriptador-de-texto-alura/",
    },
    {
      name: "Mercado Online",
      description:
        "El mercado online es una aplicación web completa que permite a los usuarios comprar y vender productos de manera conveniente y segura. Durante el desarrollo de este proyecto, utilicé las tecnologías de Node.js para el backend, React para el frontend y Express como framework web.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Web Socket",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://regal-donut-16e55e.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, nextTechnologies };