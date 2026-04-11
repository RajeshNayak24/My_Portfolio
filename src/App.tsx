import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
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
        name="Rajesh Nayak"
        title="Software Developer"
        description="I build modern web applications."
        buttonText="View Projects"
      />
      <Skills
        categories={[
          {
            title: "Frontend",
            skills: ["React", "TypeScript", "HTML", "CSS"],
          },
          {
            title: "Backend",
            skills: ["Node.js", "Express"],
          },
          {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL"],
          },
          {
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

      <About />
   
      <Contact />
      <Footer />
    </>
  );
}

export default App;
