import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
// import Contact from "./components/Contact/Contact";
import "./App.css";
import { FaCode, FaServer, FaTools, FaDatabase } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#2C2E3D] text-white overflow-hidden">
      <div>
        <Navbar
          logoText="Alex.dev"
          items={[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <Hero
          name="M Rajesh Nayak"
          title="Software Developer"
          description="I build scalable systems, dashboards, and developer-focused tools using
  React, TypeScript, and Node.js."
          buttonText="View Projects"
        />
        <About />
        <Skills
          categories={[
            {
              tag:FaCode,
              title: "Frontend",
              skills: ["React", "TypeScript", "HTML", "CSS"],
            },
            {
              tag:FaServer,
              title: "Backend",
              skills: ["Node.js", "Express"],
            },
            {
              tag:FaDatabase,
              title: "Databases",
              skills: ["MongoDB", "PostgreSQL"],
            },
            {
              tag:FaTools,
              title: "Tools",
              skills: ["Git", "Docker", "CI/CD"],
            },
          ]}
        />
        <Projects
          projects={[
            {
              title: "Budget Tracker",
              description: "Dashboard with reporting and analytics",
              tech: ["React", "Node.js", "MongoDB"],
              impact: "Improved efficiency by 85%",
            },
            {
              title: "Admin Dashboard Tool",
              description: "Full-featured dashboard with CRUD operations",
              tech: ["React", "Node.js", "PostgreSQL"],
              impact: "Enabled real-time data management",
            },
            {
              title: "Real-Time Chat System",
              description: "Event-driven chat application",
              tech: ["Node.js", "WebSockets"],
              impact: "Handled real-time communication efficiently",
            },
          ]}
        />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
