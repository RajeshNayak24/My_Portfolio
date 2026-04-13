const About = () => {
  return (
    <section id="about" className="w-full py-24 px-16">

      {/* Title */}
      <h2 className="text-4xl font-bold  mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="flex items-center gap-16">

        <div className="flex-1">
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="w-full h-[320px] rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-purple-500/20 shadow-xl relative z-10 flex items-center justify-center text-gray-500">
              Your Image / Code Preview
            </div>

          </div>
        </div>
        <div className="flex-1">

          <p className="text-gray-300 leading-relaxed text-lg">
            Hello! I'm{" "}
            <span className="text-white font-semibold">
              Rajesh Nayak
            </span>, a passionate Full Stack Software Engineer with experience 
            in building scalable dashboards, internal tools, and modern web applications.

            <br /><br />

            I specialize in{" "}
            <span className="text-purple-400">
              React, TypeScript, and Node.js
            </span>, and I enjoy turning complex problems into clean, efficient solutions.

            <br /><br />

            I focus on performance, usability, and writing code that scales.
          </p>

          <div className="flex gap-8 mt-8">

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