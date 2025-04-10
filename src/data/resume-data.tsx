import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dora Santiago",
  location: "Recife, Pernambuco, Brasil",
  locationLink: "https://www.google.com/maps/place/Recife",
  about:
    "Sixth semester Computer Science student looking for a new challenge.",
  summary: (
    <>
      Frontend-focused developer with a passion for creating clean React and TypeScript interfaces. Strong eye for UI/UX design, Figma skills, and a fast learner. Actively seeking internship opportunities.
    </>
  ),
  contact: {
    email: "dorasantiagoc@gmail.com",
    tel: "+5581991442781",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dorasantiagoc",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dora-santiago/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Centro Universitário União das Américas Descomplica",
      degree: "Bachelor's Degree in Computer Science",
      start: "2023",
      end: "present",
    },
  ],
  courses: [
    {
      degree: "Full Stack Java Developer",
      school: "EBAC (Escola Britânica de Artes Criativas e Tecnologia)",
      start: "2023",
      end: "present",
    },
    {
      degree: "Introduction to Programming",
      school: "EBAC (Escola Britânica de Artes Criativas e Tecnologia)",
      start: "2023",
      end: "2024",
    },
    {
      degree: "Algorithms and Programming Logic",
      school: "Udemy",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
  ],
  projects: [
    {
      title: "Do Resenhas",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS",],
      description:
        "Personal website for organizing and displaying book reviews. Created as a way to share my love for reading, with a focus on clean presentation and easy navigation through recent reads.",
      link: {
        label: "doresenhas.vercel.app",
        href: "https://doresenhas.vercel.app",
      },
    },
    {
      title: "Average Calculator",
      techStack: [
        "JavaScript",
      ],
      description:
        "Grade calculator for tracking academic performance. Allows input of assignment scores, automatically calculates the final average, and indicates whether the student has passed.",
      link: {
        label: "average-tool.vercel.app",
        href: "https://average-tool.vercel.app",
      },
    },
    {
      title: "Basic Calculator",
      techStack: ["JavaScript", "Vue.js"],
      description:
        "Basic calculator for performing the four arithmetic operations. Users select two numbers and an operation to instantly receive the calculated result.",
      link: {
        label: "calculator-op.vercel.app",
        href: "https://calculator-op.vercel.app",
      },
    },
  ],
} as const;


