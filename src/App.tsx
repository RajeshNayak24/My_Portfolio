import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { FaCode, FaServer, FaTools, FaDatabase, FaCloud } from "react-icons/fa";
import Experience from "./components/Experience/Experience";
import reactLogo from "./assets/skills/react.png";
import typescriptLogo from "./assets/skills/typescirpt.png";
import javascriptLogo from "./assets/skills/javascript.png";
import htmlcssLogo from "./assets/skills/htmlcss.png";
import nodejsLogo from "./assets/skills/nodejs.png";
import pythonLogo from "./assets/skills/python.png";
import mongoDBLogo from "./assets/skills/mongodb.png";
import postgreSQLLogo from "./assets/skills/postgreSQLLogo.png";
import gitLogo from "./assets/skills/gitLogo.png";
import dockerLogo from "./assets/skills/dockerLogo.png";
import ciCDLogo from "./assets/skills/ciCdLogo.png";
import ContactCTA from "./components/Contact/Contact";
import OpenAiLogo from "./assets/skills/OpenAi.png";
import budgetTracker from "./assets/background-finance.jpg";
import pwdManager from "./assets/skills/PwdManager.png";
import renewableEnergy from "./assets/renewableEnergy.png";

function App() {
  return (
    <div className="min-h-screen bg-[#2C2E3D] text-white overflow-hidden">
      <Navbar
        logoText="Alex.dev"
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ]}
      />
      <Hero
        name="M Rajesh Nayak"
        title="Full Stack Developer"
        description=" Full Stack Engineer with 3+ years building scalable APIs and real-time systems."
        buttonText="View Resume"
      />
      <About />
      <Experience
        experiences={[
          {
            type: "work",
            role: "Full Stack Developer",
            company: "Community Dreams Foundation",
            duration: "Sep 2025 – April 2026",
            year: "2026",
            bullets: [
              "Designed and built internal tools and admin dashboards using React and Node.js",
              "Developed scalable backend APIs and data models using MongoDB and PostgreSQL",
              "Implemented reusable components and modular architecture",
              "Collaborated with cross-functional teams to deliver production-ready solutions",
            ],
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
          },
          {
            type: "edu",
            role: "Master of Science — Computer Science",
            company: "Florida Atlantic University, Boca Raton FL",
            duration: "2023 – 2025",
            year: "2025",
            bullets: [
              "Software systems, data engineering & applied AI coursework",
              "Full-stack and cloud infrastructure graduate projects",
              "Google Cloud ACE + AWS certifications completed alongside studies",
            ],
            tech: ["Algorithms", "Cloud Computing", "System Design", "ML"],
            gpa: "3.46 / 4.0",
          },
          {
            type: "work",
            role: "Software Developer",
            company: "DAZN — Sports Streaming Platform",
            duration: "Oct 2021 – Aug 2023",
            year: "2023",
            bullets: [
              "Developed high-performance frontend features using React and TypeScript",
              "Reduced dashboard load time by 40% via code splitting and lazy loading",
              "Built API-integrated systems supporting real-time data rendering",
              "Participated in Agile sprints, code reviews, and cross-team delivery",
            ],
            tech: ["React", "TypeScript", "Node.js", "Docker", "REST APIs"],
          },
          {
            type: "work",
            role: "Software Engineering Intern — Data & AI",
            company: "Wipro Pvt Ltd",
            duration: "Mar 2020 – Aug 2021",
            year: "2021",
            bullets: [
              "Built ETL pipelines and data-driven applications using Python and SQL",
              "Developed dashboards supporting enterprise decision-making",
              "Validated and transformed structured datasets at scale",
            ],
            tech: ["Python", "SQL", "Hadoop", "ETL"],
          },
          {
            type: "edu",
            role: "B.Tech — Computer Science Engineering",
            company: "B V Raju Institute of Technology",
            duration: "2018 – 2022",
            year: "2022",
            bullets: [
              "Core curriculum: DSA, algorithms, operating systems, and DBMS",
              "Final year project in machine learning and data analysis",
            ],
            tech: ["C++", "Java", "DBMS", "Data Structures"],
            gpa: "3.3 / 4.0",
          },
        ]}
      />
      <Skills
        categories={[
          {
            tag: FaCode,
            title: "Frontend",
            skills: [
              {
                name: "React",
                image: reactLogo,
                level: 8,
                experience: "3+ years",
                note: "Admin dashboards, real-time data rendering at DAZN",
              },
              {
                name: "TypeScript",
                image: typescriptLogo,
                level: 9,
                experience: "3+ years",
                note: "Type-safe APIs and component systems, 3+ years prod use",
              },
              {
                name: "JavaScript",
                image: javascriptLogo,
                level: 8,
                experience: "3+ years",
                note: "Core language across all frontend and Node work",
              },
              {
                name: "HTML/CSS",
                image: htmlcssLogo,
                level: 9,
                experience: "4+ years",
                note: "Semantic markup, responsive layouts, component libraries",
              },
            ],
          },
          {
            tag: FaServer,
            title: "Backend",
            skills: [
              {
                name: "Node.js",
                image: nodejsLogo,
                level: 8,
                experience: "4+ years",
                note: "REST APIs, event-driven backends, Express services",
              },
              {
                name: "Python",
                image: pythonLogo,
                level: 8,
                experience: "3+ years",
                note: "ETL pipelines, data validation, ML-adjacent tooling at Wipro",
              },
              {
                name: "Java",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                level: 7,
                experience: "3+ years",
                note: "OOP, SOLID principles, and design patterns",
              },
              {
                name: "Next.js",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                level: 7,
                experience: "1+ years",
                note: "Full-stack framework — used in Renewable Energy Dashboard with SSR and API routes",
              },
              {
                name: "Express.js",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                level: 8,
                experience: "3+ years",
                note: "Node.js framework for building REST APIs — core of all backend services",
              },
            ],
          },
          {
            tag: FaDatabase,
            title: "Databases",
            skills: [
              {
                name: "MongoDB",
                image: mongoDBLogo,
                level: 8,
                experience: "3+ years",
                note: "NoSQL data modeling for internal tools and dashboards",
              },
              {
                name: "PostgreSQL",
                image: postgreSQLLogo,
                level: 8,
                experience: "3+ years",
                note: "Relational schema design, query optimization",
              },
            ],
          },
          {
            tag: FaCloud,
            title: "Cloud & AI",
            skills: [
              {
                name: "AWS",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                level: 7,
                experience: "1+ years",
                note: "AWS Cloud Virtual Internship certified — EC2, S3, Lambda",
              },
              {
                name: "Google Cloud",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                level: 7,
                experience: "1+ years",
                note: "Associate Cloud Engineer certified — compute, storage, IAM",
              },
              {
                name: "WebSockets",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
                level: 7,
                experience: "2+ years",
                note: "Built Real-Time Chat System with event-driven Socket.IO backend",
              },
              {
                name: "OpenAI API",
                image: OpenAiLogo,
                level: 6,
                experience: "1+ years",
                note: "Integrated AI assistant in Renewable Energy Dashboard",
              },
            ],
          },
          {
            tag: FaTools,
            title: "Tools",
            skills: [
              {
                name: "Git",
                image: gitLogo,
                level: 9,
                experience: "4+ years",
                note: "PRs, branching strategy, code review workflows",
              },
              {
                name: "Docker",
                image: dockerLogo,
                level: 8,
                experience: "3+ years",
                note: "Containerized deployments, dev environment parity",
              },
              {
                name: "CI/CD",
                image: ciCDLogo,
                level: 8,
                experience: "3+ years",
                note: "Automated test and deploy pipelines",
              },
              {
                name: "Agile / Scrum",
                image:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
                level: 8,
                experience: "3+ years",
                note: "Sprint-based delivery and code reviews at DAZN and Community Dreams",
              },
            ],
          },
        ]}
      />
      <Projects
        projects={[
          {
            image: budgetTracker,
            title: "Budget Tracker",
            description:
              "Full-stack expense management app with analytics, reporting, and a production-ready CI/CD deployment pipeline.",
            tech: [reactLogo, nodejsLogo, mongoDBLogo, dockerLogo, ciCDLogo],
            impact:
              "Implemented CI/CD, versioned deployments, and staging environment to enable safe releases and reduce manual deployment effort.",
            github: "https://github.com/RajeshNayak24/budget_tracker",
            live: "https://budget-tracker-frontend-vhrh.onrender.com/",
          },
          {
            image: renewableEnergy,
            title: "Renewable Energy Investment Dashboard",
            description:
              "Built a full-stack dashboard using Next.js to analyze energy investments with real-time EIA data and financial metrics (NPV, IRR, payback).",
            tech: [reactLogo, nodejsLogo, OpenAiLogo, postgreSQLLogo],
            impact: "Handled real-time data management",
            github:
              "https://github.com/RajeshNayak24/renewable-energy-dashboard",
            live: "https://renewable-energy-dashboard-sigma.vercel.app/",
          },
          {
            image: pwdManager,
            title: "Secure Password Manager",
            description:
              "Developed a secure password management system to store and retrieve sensitive user credentials with strong encryption and authentication mechanisms.",
            tech: [
              reactLogo,
              nodejsLogo,
              mongoDBLogo,
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            ],
            impact:
              "Improved data security by preventing unauthorized access and protecting sensitive user credentials",
            github: "https://github.com/RajeshNayak24/Password-manager",
          },
          {
            image: "backgroundchat",
            title: "Real-Time Chat System",
            description: "Event-driven chat application",
            tech: [
              nodejsLogo,
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
            ],
            impact: "Handled real-time communication efficiently",
            github: "https://github.com/RajeshNayak24/real-time-chat",
            live: "https://real-time-chat.onrender.com/",
          },
        ]}
      />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
