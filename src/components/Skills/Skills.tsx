import { useState } from "react";
import type { SkillProps } from "./Skills.types";

const Skills = ({ categories }: SkillProps) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", ...categories.map((c) => c.title.toLowerCase())];
  const Tags = categories.map((c) => c.tag);
  console.log(Tags);

  return (
    <section id="skills" className="scroll-mt-24 w-full py-16 px-6 md:px-16">
      <div className="mb-12">
        <p className="text-purple-300 uppercase tracking-widest text-sm">
          WHAT I KNOW
        </p>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & expertise
        </h2>
        <p className="text-gray-400 mt-2">
          Hover any tag to see proficiency & experience
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-xl border transition ${
              activeFilter === filter
                ? "bg-white/10 border-white/20"
                : "border-white/10 hover:bg-white/5"
            }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        {categories
          .filter(
            (cat) =>
              activeFilter === "all" ||
              cat.title.toLowerCase() === activeFilter,
          )
          .map((category) => {
            return (
              <div key={category.title}>
                <div className="text-gray-400 uppercase text-sm mb-4 border-b border-white/10 pb-2 flex gap-2">
                  <div className="text-purple-400 text-xl">
                    {<category.tag />}
                  </div>
                  <div>{category.title}</div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative group">
                      <div className="flex items-center gap-2 px-4 py-2  hover:bg-white/10 transition cursor-pointer">
                        <span className="flex flex-col items-center gap-2 text-xs">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-10 h-10"
                          />
                          {skill.name}
                        </span>
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[120%] w-64 bg-[#0F172A] border border-white/10 rounded-xl p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 pointer-events-none z-50">
                        <p className="text-sm font-semibold text-white mb-1">
                          {skill.name}
                        </p>

                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Level</span>
                          <span>{skill.level}/10</span>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-purple-400"
                            style={{ width: `${skill.level * 10}%` }}
                          ></div>
                        </div>

                        <p className="text-xs text-gray-400 mb-1">
                          {skill.experience}
                        </p>

                        <p className="text-xs text-gray-500">{skill.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
