const About = () => {
  return (
    <section
      id="about"
      className="w-full py-10 px-6 md:px-10 bg-[#0F172A]
        border border-purple-500/20
         p-6
        shadow-lg
        transition-all duration-300 "
    >
      <div className="relative flex flex-col md:flex-row items-center gap-12">
        <div className="absolute left-[-300px] bottom-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>

        <div className="flex-1">
          <img
            className="w-full max-w-2xl mx-auto  "
            src="src/assets/aboutme1.png"
            alt=""
          />
        </div>

        <div className="flex-1 px-10 md:px-0">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <h1 className="text-3xl font-medium mb-2">
            Why hire me for your next project?
          </h1>
          <p className="text-gray-300 leading-relaxed text-sm text-justify">
            Hello! I'm{" "}
            <span className="text-white font-semibold">Rajesh Nayak</span>, a
            Full Stack Software Engineer with hands-on experience building
            production-ready systems across the stack — from interactive
            frontend dashboards to scalable backend APIs and data-driven
            applications.
            <br />
            <br />I specialize in{" "}
            <span className="text-purple-400">
              React, TypeScript, and Node.js
            </span>
            , and have worked on real-world projects involving high-performance
            UIs, API-driven architectures, and reliable data processing systems.
            <br />
            <br />I focus on writing clean, maintainable code and designing
            systems that are not only efficient, but also easy to scale and
            collaborate on. I enjoy solving complex problems and turning them
            into practical, real-world solutions that deliver measurable impact.
          </p>

          <div className="flex gap-8 mt-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-400 rounded-full  blur-[2px]"></span>
              <p className="text-gray-300">3+ Years</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full blur-[2px]"></span>
              <p className="text-gray-300">Fast</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-500 rounded-full blur-[2px]"></span>
              <p className="text-gray-300">Optimized</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-400 rounded-full  blur-[2px]"></span>
              <p className="text-gray-300">Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
