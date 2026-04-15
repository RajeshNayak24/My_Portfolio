import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { FaCode, FaServer, FaTools, FaDatabase } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#2C2E3D] text-white overflow-hidden">
        <Navbar
          logoText="Alex.dev"
          items={[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
          ]}
        />
        <Hero
          name="M Rajesh Nayak"
          title="Software Developer"
          description="I build scalable systems, dashboards, and developer-focused tools using
  React, TypeScript, and Node.js."
          buttonText="Download Resume"
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
              image:"src/assets/background-finance.jpg",
              title: "Budget Tracker",
              description: "Dashboard with reporting and analytics",
              tech: ["React", "Node.js", "MongoDB"],
              impact: "Improved efficiency by 85%",
              github: "https://github.com/RajeshNayak24/budget_tracker",
              live: "https://budget-tracker-frontend-vhrh.onrender.com/",
            },
            {
              image:"src/assets/background-admin.jpg",      
              title: "Admin Dashboard Tool",
              description: "Full-featured dashboard with CRUD operations",
              tech: ["React", "Node.js", "PostgreSQL"],
              impact: "Enabled real-time data management",
              github: "https://github.com/RajeshNayak24/admin_dashboard",
              live: "https://admin-dashboard.onrender.com/",
            },
            {
              image:"src/assets/background-chat.jpg",
              title: "Real-Time Chat System",
              description: "Event-driven chat application",
              tech: ["Node.js", "WebSockets"],
              impact: "Handled real-time communication efficiently",
              github: "https://github.com/RajeshNayak24/real-time-chat",
              live: "https://real-time-chat.onrender.com/",
            },
          ]}
        />
        <Footer />
      
    </div>
  );
}

export default App;
