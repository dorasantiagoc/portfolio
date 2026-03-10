import { Locale, TranslationContent } from '@/types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

const skillsPt = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'UI/UX Design',
  'Design Systems',
  'Auto Layout',
  'Acessibilidade',
  'Python',
];

const skillsEn = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'UI/UX Design',
  'Design Systems',
  'Auto Layout',
  'Acessibilidade',
  'Python',
];

const skillsEs = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'UI/UX Design',
  'Design Systems',
  'Auto Layout',
  'Acessibilidade',
  'Python',
];

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  'pt-BR': {
    sections: {
      about: 'Sobre',
      projects: 'Projetos de Programação',
      designProjects: 'Projetos de Design',
      experience: 'Experiência Profissional',
      stack: 'Stack',
      education: 'Formação',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Dora Santiago',
      role: 'UI/UX Designer e Desenvolvedora',
      nationality: 'Brasileira',
      location: 'Recife, Brasil',
      phone: '+55 (81) 99144-2781',
      email: 'dorasantiagoc@gmail.com',
      about: [
        'Designer e desenvolvedora front-end, apaixonada por criar experiências digitais intuitivas e criativas, em busca de um ambiente colaborativo e desafiador.',
        'Minha especialidade está no desenvolvimento de interfaces e na criação de experiências digitais bem estruturadas, utilizando ferramentas como Figma para prototipação e construção de Design Systems com Auto Layout. No desenvolvimento, trabalho com HTML, CSS e JavaScript para transformar layouts em interfaces funcionais e responsivas.',
        'Também estou ampliando meus conhecimentos em React e Python, buscando evoluir constantemente minhas habilidades técnicas e criar soluções digitais cada vez mais eficientes e bem estruturadas.'
      ]
    },
    actions: {
      visitProject: 'Visitar projeto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Habit Tracker',
        url: 'https://habit-tracking-web.vercel.app',
        tagline: 'Aplicativo web simples para acompanhar hábitos diários de forma visual e intuitiva.',
        description: 'Desenvolvida com React, Next.js e TypeScript para registrar e acompanhar hábitos diários, com interface responsiva construída com shadcn/ui e foco em usabilidade e aprendizado de tecnologias modernas de front-end.',
        bullets: [
          'Next.js, React e TypeScript com UI em shadcn/ui.',
          'Aplicação funcional para gestão simples de hábitos.',
          'Integração e adaptação de componentes da biblioteca shadcn/ui.'
        ]
      },
      {
        id: 'project-two',
        title: 'doresenhas',
        url: 'https://doresenhas.vercel.app',
        tagline: 'Site pessoal para organizar e compartilhar resenhas de livros.',
        description: 'Website desenvolvido com Next.js e TypeScript para organizar e exibir resenhas de livros com navegação simples e apresentação visual limpa.',
        bullets: [
          'Next.js, TypeScript e Tailwind CSS.',
          'Plataforma funcional para publicar e navegar por resenhas de livros.',
          'Implementação de biblioteca de componentes e interação personalizada nos cards.'
        ]
      },
      {
        id: 'project-three',
        title: 'Average Calculator',
        url: 'https://average-tool.vercel.app',
        tagline: 'Calculadora simples para acompanhar médias acadêmicas.',
        description: 'Aplicação em JavaScript que permite inserir notas de atividades, calcular automaticamente a média final e indicar se o aluno foi aprovado.',
        bullets: [
          'JavaScript com lógica de cálculo.',
          'Ferramenta funcional para cálculo automático de médias.',
          'Implementação da lógica de cálculo e validação das notas.'
        ]
      }
    ],
    designProjects: [
      {
        id: 'design-project-one',
        title: 'LIA: Explorador de Ecossistemas com IA',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=464-4750',
        tagline: 'Plataforma educacional interativa para explorar ecossistemas com apoio de IA.',
        description: 'Projeto de UI/UX desenvolvido no Figma para uma plataforma educacional voltada a estudantes do ensino fundamental e médio, com navegação por ecossistemas, interação com IA e sistema de conquistas.',
        bullets: ['Design de interface no Figma com componentes e Auto Layout.',
          'Protótipo completo com fluxo de navegação e telas principais da plataforma.',
          'Pesquisa de UX e acessibilidade aplicada ao design da interface.']
      },
      {
        id: 'design-project-two',
        title: 'Tracker',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=464-4750',
        tagline: 'Dashboard para acompanhar e analisar hábitos de leitura.',
        description: 'Aplicação web para registrar leituras e visualizar métricas como quantidade anual de livros, diversidade de autoria e categorias literárias, com dashboard interativo e gerenciamento completo das leituras.',
        bullets: ['Design de interface no Figma com componentes e Auto Layout.',
          'Dashboard funcional com cadastro, edição e exportação de leituras.',
          'Criação de componentes do zero e implementação do fluxo completo de gerenciamento de leituras.']
      },
      {
        id: 'design-project-three',
        title: 'Pricing Page',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=324-1786',
        tagline: 'Estudo de interface de página de precificação de planos de assinatura.',
        description: 'Estudo de design focado na criação de um componente de pricing para um site fictício, apresentando três planos com hierarquia visual clara e navegação direta.',
        bullets: ['Componentes customizados com UI baseada em shadcn/ui.',
          'Componente reutilizável para exibição e comparação de planos.',
          'Construção de hierarquia visual e componentes do zero para clareza na tomada de decisão.']
      }
    ],
    experiences: [
      {
        company: 'Freelance',
        location: 'Remoto',
        role: 'UI/UX Designer',
        period: '08/2024 - Presente',
        bullets: [
          'Desenvolvimento de interfaces digitais com foco em usabilidade e experiência do usuário.',
          'Design de telas para web e mobile, com prototipação em Figma e uso de design systems.',
          'Criação e documentação de componentes reutilizáveis para interfaces consistentes.'
        ]
      },
      {
        company: 'Descomplica',
        location: 'Remoto',
        role: 'Assistente Pedagógica',
        period: '06/2021 - 09/2023',
        bullets: [
          'Análise e edição de materiais pedagógicos. Suporte na organização e apresentação de dados.',
          'Auxílio para conduzir as diversas etapas da produção de aulas (criação de lives, interação com os alunos, edição de aulas, análise de documentos e slides).',
          'Contato com colaboradores de diversas áreas do processo de criação e aprimoramento de aulas/plataforma das aulas (programação, produção, entre outros).'
        ]
      }
    ],
    skills: skillsPt,
    education: {
      institution: 'Centro Universitário União das Américas Descomplica',
      degree: 'Ciência da Computação / Bacharelado',
      date: '03/2026',
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Intermediário' },
        { name: 'Espanhol', level: 'Básico' },
      ]
    },
    footer: {
      copyright: '© 2026 Dora Santiago',
      role: 'UI/UX Designer e Desenvolvedora'
    }
  },
  en: {
    sections: {
      about: 'About',
      projects: 'Programming Projects',
      designProjects: 'Design Projects',
      experience: 'Professional Experience',
      stack: 'Technical Stack',
      education: 'Education',
      languages: 'Languages'
    },
    hero: {
      name: 'Dora Santiago',
      role: 'UI/UX Designer and Developer',
      nationality: 'Brazilian',
      location: 'Recife, Brazil',
      phone: '+55 (81) 99144-2781',
      email: 'dorasantiagoc@gmail.com',
      about: [
        'Designer and front-end developer, passionate about creating intuitive and creative digital experiences, seeking a collaborative and challenging environment.',
        'My specialty is developing interfaces and building well-structured digital experiences, using tools like Figma for prototyping and creating Design Systems with Auto Layout. On the development side, I work with HTML, CSS, and JavaScript to transform layouts into functional and responsive interfaces.',
        'I am also expanding my knowledge in React and beginner-level Python, continuously improving my technical skills to create more efficient and well-structured digital solutions.'
      ]
    },
    actions: {
      visitProject: 'Visit project',
      languageLabel: 'Language'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Habit Tracker',
        url: 'https://habit-tracking-web.vercel.app',
        tagline: 'Simple and intuitive daily habit tracking.',
        description: 'Web application built with React, Next.js and TypeScript to track daily habits, featuring a responsive interface built with shadcn/ui.',
        bullets: [
          'Next.js, React and TypeScript with UI built using shadcn/ui.',
          'Functional application for simple habit management.',
          'Integration and customization of shadcn/ui components.'
        ]
      },
      {
        id: 'project-two',
        title: 'doresenhas',
        url: 'https://doresenhas.vercel.app',
        tagline: 'Personal website for organizing and sharing book reviews.',
        description: 'Website developed with Next.js and TypeScript to organize and display book reviews with simple navigation and clean visual presentation.',
        bullets: [
          'Next.js, TypeScript and Tailwind CSS.',
          'Functional platform for publishing and browsing book reviews.',
          'Implementation of component library and personalized interactions in the review cards.'
        ]
      },
      {
        id: 'project-three',
        title: 'Average Calculator',
        url: 'https://average-tool.vercel.app',
        tagline: 'Simple tool to track academic averages.',
        description: 'JavaScript application that allows users to input assignment scores, automatically calculate the final average, and indicate whether the student has passed.',
        bullets: [
          'JavaScript with front-end calculation logic.',
          'Functional tool for automatic grade average calculation.',
          'Implementation of grade calculation logic and input validation.'
        ]
      }
    ],
    designProjects: [
      {
        id: 'design-project-one',
        title: 'Lia: Explorador de Ecossistemas com IA',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=464-4750',
        tagline: 'Plataforma educacional interativa para explorar ecossistemas com apoio de IA.',
        description: 'Projeto de UI/UX desenvolvido no Figma para uma plataforma educacional voltada a estudantes do ensino fundamental e médio, com navegação por ecossistemas, interação com IA e sistema de conquistas.',
        bullets: ['Design de interface no Figma com componentes e Auto Layout.', 
          'Protótipo completo com fluxo de navegação e telas principais da plataforma.', 
          'Pesquisa de UX e acessibilidade aplicada ao design da interface.'
        ]
      },
      {
        id: 'design-project-two',
        title: 'Tracker',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=324-1702',
        tagline: 'Dashboard for tracking and analyzing reading habits.',
        description: 'Web application for registering readings and visualizing metrics such as yearly books, author diversity, and literary categories through an interactive dashboard with full reading management.',
        bullets: ['Custom-built components and shadcn/ui-based interface.',
          'Functional dashboard with reading creation, editing, and export features.',
          'Building components from scratch and implementing the full reading management flow.']
      },
      {
        id: 'design-project-three',
        title: 'Pricing Page',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=324-1786',
        tagline: 'Subscription pricing page interface study.',
        description: 'Design study focused on building a pricing component for a fictional website, presenting three plans with clear visual hierarchy and straightforward navigation.',
        bullets: ['Custom-built components with shadcn/ui-based interface.',
          'Reusable component for displaying and comparing pricing plans.',
          'Building visual hierarchy and components from scratch to improve decision clarity.']
      }
    ],
    experiences: [
      {
        company: 'Freelance',
        location: 'Remote',
        role: 'UI/UX Designer',
        period: '08/2024 - Present',
        bullets: [
          'Developing digital interfaces with a focus on usability and user experience.',
          'Designing web and mobile screens, with prototyping in Figma and use of design systems.',
          'Creating and documenting reusable components for consistent interfaces.'
        ]
      },
      {
        company: 'Descomplica',
        location: 'Remote',
        role: 'Pedagogical Assistant',
        period: '06/2021 - 09/2023',
        bullets: [
          'Analyzed and edited pedagogical materials. Supported data organization and presentation.',
          'Assisted in conducting various stages of the lesson production process (creating live sessions, interacting with students, editing lessons, analyzing documents and slides).',
          'Liaised with collaborators from various areas of the lesson creation and improvement process (programming, production, among others).'
        ]
      }
    ],
    skills: skillsEn,
    education: {
      institution: 'Centro Universitário União das Américas Descomplica',
      degree: 'Computer Science / Bachelor\'s Degree',
      date: '03/2026',
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
        { name: 'Spanish', level: 'Beginner' }
      ]
    },
    footer: {
      copyright: '© 2026 Dora Santiago',
      role: 'UI/UX Designer and Developer'
    }
  },
  es: {
    sections: {
      about: 'Sobre',
      projects: 'Proyectos de Programación',
      designProjects: 'Proyectos de Diseño',
      experience: 'Experiencia Profesional',
      stack: 'Stack Técnico',
      education: 'Formación',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Dora Santiago',
      role: 'Diseñadora UI/UX y Desarrolladora',
      nationality: 'Brasileña',
      location: 'Recife, Brasil',
      phone: '+55 (81) 99144-2781',
      email: 'dorasantiagoc@gmail.com',
      about: [
        'Diseñadora y desarrolladora front-end, apasionada por crear experiencias digitales intuitivas y creativas, en busca de un entorno colaborativo y desafiante.',
        'Mi especialidad es el desarrollo de interfaces y la creación de experiencias digitales bien estructuradas, utilizando herramientas como Figma para prototipado y la construcción de Design Systems con Auto Layout. En el desarrollo, trabajo con HTML, CSS y JavaScript para transformar diseños en interfaces funcionales y responsivas.',
        'También estoy ampliando mis conocimientos en React y en Python a nivel inicial, buscando mejorar continuamente mis habilidades técnicas y crear soluciones digitales cada vez más eficientes y bien estructuradas.'
      ]
    },
    actions: {
      visitProject: 'Visitar proyecto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'project-one',
        title: 'Habit Tracker',
        url: 'https://habit-tracking-web.vercel.app',
        tagline: 'Seguimiento simple e intuitivo de hábitos diarios.',
        description: 'Aplicación web desarrollada con React, Next.js y TypeScript para registrar hábitos diarios, con una interfaz responsiva construida con shadcn/ui.',
        bullets: [
          'Next.js, React y TypeScript con interfaz construida con shadcn/ui.',
          'Aplicación funcional para la gestión simple de hábitos.',
          'Integración y adaptación de componentes de la biblioteca shadcn/ui.'
        ]
      },
      {
        id: 'project-two',
        title: 'doresenhas',
        url: 'https://doresenhas.vercel.app',
        tagline: 'Sitio personal para organizar y compartir reseñas de libros.',
        description: 'Sitio web desarrollado con Next.js y TypeScript para organizar y mostrar reseñas de libros con navegación simple y presentación visual limpia.',
        bullets: [
          'Next.js, TypeScript y Tailwind CSS.',
          'Plataforma funcional para publicar y navegar reseñas de libros.',
          'Implementación de biblioteca de componentes e interacción personalizada en tarjetas.'
        ]
      },
      {
        id: 'project-three',
        title: 'Average Calculator',
        url: 'https://average-tool.vercel.app',
        tagline: 'Calculadora simple para seguir promedios académicos.',
        description: 'Aplicación en JavaScript que permite ingresar notas de actividades, calcular automáticamente el promedio final e indicar si el estudiante aprobó.',
        bullets: [
          'JavaScript con lógica de cálculo en el front-end.',
          'Herramienta funcional para el cálculo automático de promedios.',
          'Implementación de la lógica de cálculo de notas y validación de datos.'
        ]
      }
    ],
    designProjects: [
      {
        id: 'design-project-one',
        title: 'LIA: Explorador de Ecosistemas con IA',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=464-4750',
        tagline: 'Plataforma educativa interactiva para explorar ecosistemas con apoyo de IA.',
        description: 'Proyecto de UI/UX diseñado en Figma para una plataforma educativa dirigida a estudiantes de secundaria, con exploración de ecosistemas, interacción con IA y sistema de logros.',
        bullets: ['Diseño de interfaz en Figma utilizando componentes y Auto Layout.',
          'Prototipo completo con flujo de navegación y pantallas principales.',
          'Investigación de UX y accesibilidad aplicada al diseño de la interfaz.']
      },
      {
        id: 'design-project-two',
        title: 'Tracker',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=324-1702',
        tagline: 'Dashboard para seguir y analizar hábitos de lectura.',
        description: 'Aplicación web para registrar lecturas y visualizar métricas como libros por año, diversidad de autoría y categorías literarias mediante un dashboard interactivo con gestión completa de lecturas.',
        bullets: ['Componentes personalizados e interfaz basada en shadcn/ui.',
          'Dashboard funcional con creación, edición y exportación de lecturas.',
          'Creación de componentes desde cero e implementación del flujo completo de gestión de lecturas.']
      },
      {
        id: 'design-project-three',
        title: 'Pricing Page',
        url: 'https://www.figma.com/design/5lqilFjCubhj02xl75CbJp/dora-santiago-%7C-portf%C3%B3lio?node-id=324-1786',
        tagline: 'Estudio de interfaz de página de precios para planes de suscripción.',
        description: 'Estudio de diseño enfocado en la creación de un componente de pricing para un sitio ficticio, presentando tres planes con jerarquía visual clara y navegación directa.',
        bullets: ['Componentes personalizados con interfaz basada en shadcn/ui.',
          'Componente reutilizable para mostrar y comparar planes.',
          'Construcción de jerarquía visual y componentes desde cero para facilitar la decisión del usuario.']
      }
    ],
    experiences: [
      {
        company: 'Freelance',
        location: 'Remoto',
        role: 'Diseñadora UI/UX',
        period: '08/2024 - Presente',
        bullets: [
          'Desarrollo de interfaces digitales con enfoque en usabilidad y experiencia del usuario.',
          'Diseño de pantallas para web y móvil, con prototipado en Figma y uso de design systems.',
          'Creación y documentación de componentes reutilizables para interfaces consistentes.'
        ]
      },
      {
        company: 'Descomplica',
        location: 'Remoto',
        role: 'Asistente Pedagógica',
        period: '06/2021 - 09/2023',
        bullets: [
          'Análisis y edición de materiales pedagógicos. Apoyo en la organización y presentación de datos.',
          'Asistencia en la conducción de las diversas etapas del proceso de producción de clases (creación de lives, interacción con los alumnos, edición de clases, análisis de documentos y diapositivas).',
          'Contacto con colaboradores de diversas áreas del proceso de creación y mejora de clases/plataforma (programación, producción, entre otros).'
        ]
      }
    ],
    skills: skillsEs,
    education: {
      institution: 'Centro Universitário União das Américas Descomplica',
      degree: 'Ciencia de la Computación / Bachillerato',
      date: '03/2026',
      languages: [
        { name: 'Portugués', level: 'Nativo' },
        { name: 'Ingles', level: 'Intermedio' },
        { name: 'Español', level: 'Básico' }
      ]
    },
    footer: {
      copyright: '© 2026 Dora Santiago',
      role: 'Diseñadora UI/UX y Desarrolladora'
    }
  }
};

export const normalizeLocale = (value?: string | null): Locale => {
  const lang = (value ?? '').toLowerCase();
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return DEFAULT_LOCALE;
};
