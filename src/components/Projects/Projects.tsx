import type { ProjectsProps } from "./Projects.types";

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="min-h-[85vh] py-8 px-16 " id="projects">
      <div className=" p-5">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16 bg-white/5 backdrop-blur-md">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-[#1E293B]  to-[#0F172A] border border-purple-500/20 rounded-xl shadow-lg hover:scale-105 transition overflow-hidden"
            >
              <div className="w-full h-40 bg-black"></div>
              <div className="px-5 py-2 flex flex-row gap-2 md:flex-col">
                <h3 className="text-xl font-bold ">{project.title}</h3>
                <p className="text-gray-400 text-xs">{project.description}</p>
                <p className="text-gray-400 text-xs">
                  <strong>Impact:</strong> {project.impact}
                </p>

                <ul className="flex gap-2 flex-wrap mt-2 mb-5 ">
                  {project.tech.map((t) => (
                    <li key={t} className="bg-purple-500/20 text-purple-300 rounded px-2 py-3/4 text-xs hover:scale-100 transition">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
