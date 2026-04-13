import type { SkillProps } from "./Skills.types";


const Skills = ({ categories }: SkillProps) => {
  // const icons = [FaCode, FaServer, FaServer, FaTools];
 
  return (
    <section id="skill" className="w-full py-8 px-16">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16 bg-white/5 backdrop-blur-md">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {categories.map((category) => (
        
            <div
              key={category.title}
              className="w-full bg-gradient-to-br from-[#1E293B]  to-[#0F172A] border border-purple-500/20 px-5 py-8 rounded-xl shadow-lg hover:scale-105 transition overflow-hidden"
            >
              <div className="text-purple-400 text-3xl mb-4">
                <category.tag />
              </div>
              <h3 className="text-xl font-bold mb-5">{category.title}</h3>
              <ul className="flex flex-col gap-2 text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
