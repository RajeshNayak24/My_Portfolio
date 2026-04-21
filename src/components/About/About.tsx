import AboutMe from "../../assets/aboutme1.png";
import { FaCode, FaRocket, FaDatabase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-[#0F172A] border border-purple-500/20"
    >
      <div className="relative flex flex-col md:flex-row items-center gap-12">
        <div className="absolute left-[-300px] bottom-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>

        <div className="flex-1">
          <img className="w-full max-w-2xl mx-auto" src={AboutMe} alt="" />
        </div>

        <div className="flex-1 px-5 md:px-0 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <h1 className="text-3xl font-medium mb-2">
            Why hire me for your next project?
          </h1>
          <p className="text-gray-300 leading-relaxed text-base text-justify">
            Hello! I'm{" "}
            <span className="text-white font-semibold">Rajesh Nayak</span>, a
            Full Stack Software Engineer with experience building
            production-ready systems across frontend, backend, and data layers.
            <br />
            <br />
            I’ve worked on real-world applications ranging from interactive
            dashboards to scalable APIs and data-driven systems, including
            contributions to a global sports streaming platform and enterprise
            data solutions. I specialize in{" "}
            <span className="text-purple-400">
              React, TypeScript, and Node.js
            </span>
            , and focus on building applications that are fast, reliable, and
            maintainable.
            <br />
            <br />
            My approach is centered around clean architecture, performance, and
            writing code that scales beyond just a demo. I enjoy solving complex
            problems and turning them into practical solutions that deliver
            measurable impact.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <MdWork
                className="
      text-pink-400 text-lg
      animate-float-icon
      transition-all duration-300
      group-hover:scale-125
      group-hover:-translate-y-1
    "
              />
              <span className="text-gray-300 text-sm">3+ Years Experience</span>
            </div>

            <div className="flex items-center gap-2 group cursor-pointer">
              <FaCode
                className="
      text-pink-400 text-lg
      animate-float-icon
      transition-all duration-300
      group-hover:scale-125
      group-hover:-translate-y-1
    "
              />
              <span className="text-gray-300 text-sm">4+ Projects Built</span>
            </div>

            <div className="flex items-center gap-2 group cursor-pointer">
              <FaRocket
                className="
      text-pink-400 text-lg
      animate-float-icon
      transition-all duration-300
      group-hover:scale-125
      group-hover:-translate-y-1
    "
              />

              <span className="text-gray-300 text-sm">Real-time Systems</span>
            </div>

            <div className="flex items-center gap-2 group cursor-pointer">
              <FaDatabase
                className="
      text-pink-400 text-lg
      animate-float-icon
      transition-all duration-300
      group-hover:scale-125
      group-hover:-translate-y-1
    "
              />
              <span className="text-gray-300 text-sm">Scalable APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
