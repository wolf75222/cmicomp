import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Romain Despoullains",
  initials: "RD",
  url: "https://github.com/wolf75222",
  location: "France",
  locationLink: "https://www.google.com/maps/place/france",
  description:
    "Computer engineering student passionate about emerging technologies, with an innovative mindset, proactive problem-solving, and the ability to work independently on complex challenges.",
  summary:
    "As a computer engineering student passionate about emerging technologies, I distinguish myself through an innovative mindset, proactive problem-solving, and the ability to work independently on complex challenges. I integrate easily into teams thanks to strong interpersonal skills. Currently pursuing a Master's in High-Performance Computing and Simulation, I am seeking an apprenticeship position in HPC, AI, or imaging.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHO_nMqP1BRtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712329002212?e=1752105600&v=beta&t=dXTz48RPRyd7lZVJAE2HWJOY030cDSsXbNN6p436wpE",
  skills: [
    "C/C++",
    "C#",
    "CUDA",
    "Nasm",
    "Java",
    "Python",
    "JavaScript",
    "PHP",
    "SQL",
    "PL/SQL",
    "LaTeX",
    "Docker",
    "Git",
    "Flask",
    "Django",
    "MPI",
    "OpenMP",
    "QEMU",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "romaindespoul@gmail.com",
    tel: "+33 7 88 69 26 08",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wolf75222",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/romain-despoullains",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:romaindespoul@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Latitude",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Internship - Software Engineer",
      logoUrl: "https://www.myfrenchstartup.com/logo/62c417409e49a.jpg",
      start: "Sep 2024",
      end: "Sep 2025",
      description:
        "Development of internal tools (Python, TypeScript/React, C++) including implementation of MCP for AI, within an Agile/Scrum framework. Implementation of Siemens Teamcenter PLM and development of a Python connector with FastAPI, in a V-model structured environment. Creation of a parser for a program running on a supercomputer dedicated to rocket trajectory simulation, and optimization of existing code.",
    },
    {
      company: "LAB-I* Laboratory",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Internship - Research Scientist",
      logoUrl: "https://lab-i.univ-reims.fr/images/logo.png",
      start: "Apr 2024",
      end: "Jul 2024",
      description:
        "Development of web applications (Flask, Python) for advanced statistical data analysis and anomaly detection in intelligent transport systems. Participation in the European InDiD project, in collaboration with the European Commission, the Ministry of Ecological Transition, and industry partners (Valeo, APRR). Compliance with ETSI standards (DENM, CAM, C-ITS, GeoNetworking).",
    }
  ],
  education: [
    {
      school: "University of Reims Champagne-Ardenne",
      href: "https://www.univ-reims.fr/",
      degree: "Master's program in Engineering: Computer Science and Numerical Simulation",
      logoUrl: "https://static.wixstatic.com/media/2565f3_92b4071f9f92423f853adcb992122a55~mv2.png/v1/fill/w_1000,h_715,al_c,q_90,usm_0.66_1.00_0.01/2565f3_92b4071f9f92423f853adcb992122a55~mv2.png",
      start: "2022",
      end: "2027",
      description: "Education built upon the Bachelor's and Master's in Computer Science, focused on research, scientific methodology, and preparation for engineering careers, with modules in scientific English, communication, project management, applied mathematics, physics, and advanced programming."
    },
    {
      school: "University of Reims Champagne-Ardenne",
      href: "https://www.univ-reims.fr/",
      degree: "3rd-Year Bachelor's in Computer Science",
      logoUrl: "https://static.wixstatic.com/media/2565f3_92b4071f9f92423f853adcb992122a55~mv2.png/v1/fill/w_1000,h_715,al_c,q_90,usm_0.66_1.00_0.01/2565f3_92b4071f9f92423f853adcb992122a55~mv2.png",
      start: "2022",
      end: "2025",
      description: "Relevant Courses: Information Security; Virtualization and Cloud; System Administration; Systems Programming; Multithreaded Programming; Advanced Databases; Distributed Programming; High-Performance Computing (NVIDIA: Fundamentals of Accelerated Computing with CUDA); AI and Data; Cryptography; Complexity and Computability; Programming Languages; Graph Theory; Image Synthesis."
    }
  ],
  projects: [
    {
      title: "Distributed Cloud-Based N-Queens Solver",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Development of a distributed cloud-based solution for solving the n-queens problem, utilizing WebAssembly and an AMQP message queue.",
      technologies: [
        "WebAssembly",
        "AMQP",
        "Cloud Computing",
        "Distributed Systems"
      ],
      links: [],
      image: "",
    },
    {
      title: "Autonomous Vehicles Test Scenarios",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Generation of test scenarios (CARLA, AirSim) for autonomous vehicles using generative AI.",
      technologies: [
        "CARLA",
        "AirSim",
        "Generative AI",
        "Autonomous Vehicles"
      ],
      links: [],
      image: "",
    },
    {
      title: "AI-Generated Data Detection",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "Work on detecting AI-generated data at LICIIS Laboratory.",
      technologies: [
        "AI",
        "Data Analysis",
        "Machine Learning"
      ],
      links: [],
      image: "",
    }
  ],
  hackathons: [],
  engagement: [
    {
      organization: "MIRAGE Association",
      position: "Vice President, former President",
      dates: "2023 - 2025",
      description: [
        "Strategic and operational leadership of the association",
        "Member management and team coordination",
        "Organization and oversight of events and projects",
        "Financial management and fundraising",
        "Internal and external communications"
      ]
    },
    {
      organization: "University of Reims & Freelance",
      position: "Tutor, Private Tutor",
      dates: "2021 - 2025",
      description: [
        "Tutoring first-year Compuater Science and Mathematics students",
        "Volunteer private lessons for high school students (mathematics, physics, Computer Science)",
        "Writing course materials and exercises in LaTeX"
      ]
    }
  ]
} as const;
