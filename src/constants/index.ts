import {
  mobile,
  creator,
  web,
  shakeflix,
  campuscar,
  credmais,
  github,
  instagram,
  linkedin,
  twitter,
  whatsapp,
  omnisaude,
  ufg,
  flappybird,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  // {
  //   id: "feedbacks",
  //   title: "Feedbacks",
  // },
  {
    id: "contact",
    title: "Contato",
  },
] as Models.NavLink[];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: mobile,
  },
  {
    title: "Estudante de Sistemas de Informação",
    icon: creator,
  },
] as Models.Service[];

const technologies = [
  {
    name: "HTML 5",
    icon: "./html.png",
  },
  {
    name: "CSS 3",
    icon: "./css.png",
  },
  {
    name: "JavaScript",
    icon: "./javascript.png",
  },
  {
    name: "TypeScript",
    icon: "./typescript.png",
  },
  {
    name: "React JS",
    icon: "./reactjs.png",
  },
  {
    name: "Next JS",
    icon: "./nextjs.png",
  },
  {
    name: "React Native",
    icon: "./reactnative.png",
  },
  {
    name: "Ant Design",
    icon: "./antdesign.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./nodejs.png",
  },
  {
    name: "Three JS",
    icon: "./threejs.svg",
  },
  {
    name: "git",
    icon: "./git.png",
  },
  // {
  //   name: "figma",
  //   icon: "./figma.png",
  // },
  {
    name: "MongoDB",
    icon: "./mongodb.png",
  },
] as Models.Technology[];

const experiences = [
  {
    title: "Estudante (Bacharelado)",
    company_name: "Sistema de Informação - UFG",
    icon: ufg,
    iconBg: "#E6DEDD",
    date: "Agosto 2019 -  Atualmente",
    points: [
      "Desenvolvendo uma base sólida de conhecimento teórico e prático no campo da tecnologia da informação.",
      "Explorando diversas áreas, incluindo desenvolvimento de software, gerenciamento de banco de dados, engenharia de software, empreendedorismo digital, regras de negócio, governança e mais, como parte dos meus estudos.",
      "Colaborando com professores e colegas de classe para enfrentar desafios acadêmicos e aprimorar minhas habilidades de resolução de problemas.",
      "Aproveitando as oportunidades de aprendizado oferecidas pelo curso para construir um conjunto sólido de habilidades para futuros desafios relacionados à tecnologia.",
    ],
  },
  {
    title: "Desenvolvedor Front-End",
    company_name: "Omnisaude",
    icon: omnisaude,
    iconBg: "#383E56",
    date: "Março 2022 - Atualmente",
    points: [
      "Uma empresa de ponta em soluções de TI para a área da saúde, colaborando no desenvolvimento de aplicações inovadoras que melhoram a eficiência e a experiência do usuário no setor da saúde.",
      "Desenvolvendo e mantendo aplicações web e aplicativos utilizando Next.js, React.js, React Native e muitas outras tecnologias relacionadas.",
      "Colaborando com equipes multidisciplinares, incluindo designers, gerentes de produtos e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Muitas noções de regra de negócio na área da saúde (corporativa) e como aplicar isso na web.",
      "Implementando design responsivo, garantindo compatibilidade entre navegadores, respeito da arquitetura RESTful e diversas outras boas práticas.",
      "Levantamento de requisitos, análise de viabilidade e estimativa de tempo de desenvolvimento.",
      "Noções de metodologias ágeis, como Scrum e Kanban.",
    ],
  },
] as Models.Experience[];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ] as Models.Testimonial[];

const projects = [
  {
    name: "ShakeFlix",
    description:
      "Aplicação que utiliza TensorFlow JS e Machine Learning para controlar o site com gestos de mão e dos olhos. É uma aplicação com muito javascript avançado foi feito durante o curso com de javascript avançado por Erick Wendel.",
    tags: [
      {
        name: "tensorflowjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
      {
        name: "gestures",
        color: "orange-text-gradient",
      },
    ],
    image: shakeflix,
    source_code_link: "https://github.com/pvshake/ShakeFlix",
    web_link: "https://pvshake.github.io/ShakeFlix/pages/titles/",
  },
  {
    name: "Campus Car",
    description:
      "Landing Page para o projeto final da matéria de Empreendedorismo Digital, onde o objetivo era criar uma startup e apresentar um pitch para uma banca avaliadora. O projeto foi feito em grupo e eu fui o responsável pelo desenvolvimento da landing page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: campuscar,
    source_code_link: "https://github.com/pvshake/campus-car-landing-page",
    web_link: "https://pvshake.github.io/campus-car-landing-page/",
  },
  {
    name: "Cred Mais",
    description:
      "Landing Page para o uma empresa de soluções financeiras, focada em empréstimos consignados.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: credmais,
    source_code_link: "https://github.com/pvshake/CredMais",
    web_link: "https://pvshake.github.io/CredMais/",
  },
  {
    name: "Flappy Bird Clone",
    description:
      "Clone em javascript, html, css e sprites do jogo Flappy Bird.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: flappybird,
    source_code_link: "https://github.com/pvshake/FlappyBird",
  },
] as Models.Project[];

const socialMedias = [
  {
    name: "WhatsApp",
    icon: whatsapp,
    link_url:
      "https://api.whatsapp.com/send?phone=+5562992980863&text=Olá Pedro, vim do seu site pessoal e gostaria de falar com você!",
  },
  { name: "Github", icon: github, link_url: "https://github.com/pvshake" },
  {
    name: "LinkedIn",
    icon: linkedin,
    link_url: "https://www.linkedin.com/in/pedrovitorsf",
  },
  {
    name: "Twitter",
    icon: twitter,
    link_url: "https://twitter.com/pedrovitor_sf",
  },
  {
    name: "Instagram",
    icon: instagram,
    link_url: "https://www.instagram.com/pedrovitorsf",
  },
] as Models.SocialMedia[];

export {
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  socialMedias,
};
