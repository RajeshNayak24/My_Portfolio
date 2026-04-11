import type { ProjectsProps } from "./Projects.types";

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Impact:</strong> {project.impact}
          </p>

          <ul>
            {project.tech.map((t) => (
                <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
