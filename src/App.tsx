import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { FaCode, FaServer, FaTools, FaDatabase } from "react-icons/fa";
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
        title="Software Developer"
        description="I build scalable systems, dashboards, and developer-focused tools using
  React, TypeScript, and Node.js."
        buttonText="View Resume"
      />
      <About />
      <Experience
        experiences={[
          {
            role: "Full Stack Developer",
            company: "Community Dreams Foundation",
            duration: "2024 - 2026",
            description: [
              "Built RESTful APIs enabling reliable and secure data exchange across systems",
              "Refactored legacy code to improve application performance, scalability, and system reliability",
              "Executed unit and integration testing to ensure high-quality, bug-free deployments",
              "Documented system architecture, APIs, and workflows following SDLC standards",
            ],
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
          },
          {
            role: "Software Developer",
            company: "DAZN- Sports Streaming platform",
            duration: "2021 - 2023",
            description: [
              "Built scalable dashboard using React & TypeScript",
              "Improved performance by 40%",
              "Implemented validation and error handling mechanisms to ensure data integrity and application stability",
              "Developed REST APIs using Node.js",
            ],
            tech: ["React", "TypeScript", "Node.js", "Docker"],
          },
          {
            role: "Data Analyst and Artificial Intelligence",
            company: "Wipro Pvt Ltd",
            duration: "2020 - 2021",
            description: [
              "Developed data processing pipelines using Python and SQL",
              " Performed data validation, testing, and transformation to ensure data accuracy",
              "Supported debugging and troubleshooting of data workflows",
            ],
            tech: ["Python", "SQL", "Hadoop"],
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
                note: "Built scalable dashboards",
              },
              {
                name: "TypeScript",
                image: typescriptLogo,
                level: 9,
                experience: "3+ years",
                note: "Built scalable dashboards",
              },
              {
                name: "JavaScript",
                image: javascriptLogo,
                level: 8,
                experience: "3+ years",
                note: "Built scalable dashboards",
              },
              {
                name: "HTML/CSS",
                image: htmlcssLogo,
                level: 9,
                experience: "4+ years",
                note: "Built scalable dashboards",
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
                note: "Built scalable dashboards",
              },
              {
                name: "Python",
                image: pythonLogo,
                level: 8,
                experience: "3+ years",
                note: "Built scalable dashboards",
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
                note: "Built scalable dashboards",
              },
              {
                name: "PostgreSQL",
                image: postgreSQLLogo,
                level: 8,
                experience: "3+ years",
                note: "Built scalable dashboards",
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
                note: "Built scalable dashboards",
              },
              {
                name: "Docker",
                image: dockerLogo,
                level: 8,
                experience: "3+ years",
                note: "Built scalable dashboards",
              },
              {
                name: "CI/CD",
                image: ciCDLogo,
                level: 8,
                experience: "3+ years",
                note: "Built scalable dashboards",
              },
            ],
          },
        ]}
      />
      <Projects
        projects={[
          {
            image: "src/assets/background-finance.jpg",
            title: "Budget Tracker",
            description: "Dashboard with reporting and analytics",
            tech: ["React", "Node.js", "MongoDB"],
            impact: "Improved efficiency by 85%",
            github: "https://github.com/RajeshNayak24/budget_tracker",
            live: "https://budget-tracker-frontend-vhrh.onrender.com/",
          },
          {
            image: "src/assets/renewableEnergy.png",
            title: "Renewable Energy Investment Dashboard",
            description:
              "Built a full-stack dashboard using Next.js to analyze energy investments with real-time EIA data and financial metrics (NPV, IRR, payback).",
            tech: ["React", "Node.js", "OpenAI", "PostgreSQL"],
            impact: "Enabled real-time data management",
            github:
              "https://github.com/RajeshNayak24/renewable-energy-dashboard",
            live: "https://renewable-energy-dashboard-sigma.vercel.app/",
          },
          {
            image: "src/assets/background-chat.jpg",
            title: "Real-Time Chat System",
            description: "Event-driven chat application",
            tech: ["Node.js", "WebSockets"],
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
