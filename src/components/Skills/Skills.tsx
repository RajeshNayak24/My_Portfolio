import type { SkillProps } from "./Skills.types";

const Skills = ({ categories }: SkillProps) => {
  return (
    <section>
      <h2>Skills</h2>
      {categories.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
