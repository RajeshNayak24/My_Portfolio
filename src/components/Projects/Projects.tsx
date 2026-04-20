import type { ProjectsProps } from "./Projects.types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="w-full py-10 px-6 md:px-10" id="projects">
      <div className=" p-5 relative">
        <div className="absolute right-[-300px] bottom-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16 bg-white/5 backdrop-blur-md">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-[#1E293B]  to-[#0F172A] border border-purple-500/20 rounded-xl shadow-lg overflow-scroll flex flex-col  transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[0_0_30px_rgba(255,119,201,0.4)]"
            >
              <div className="w-full h-40 bg-gradient-to-br from-[#1E293B] to-[#0F172A]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-2 flex flex-col gap-3 md:flex-col">
                <h3 className="text-xl font-bold ">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <p className="text-green-400 text-xs">↑ {project.impact}</p>

                <ul className="flex gap-2 flex-wrap mt-2 ">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="w-9 h-9 rounded-lg border border-purple-500/20
                    bg-white/[0.03] flex items-center justify-center
                    text-white/40 hover:text-pink-400 hover:border-pink-400/40
                    hover:bg-pink-400/5 transition-all"
                    >
                      <img src={t} alt="" className="w-5 h-5 " />
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4 ">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 text-sm flex items-center gap-1"
                  >
                    <FaGithub size={13} /> GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-pink-400 text-sm flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={13} /> Live
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
