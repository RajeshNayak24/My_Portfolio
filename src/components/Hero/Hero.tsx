import type { HeroProps } from "./Hero.types";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import profile from "../../assets/Profile.png";

const Hero = ({ name, title, description, buttonText }: HeroProps) => {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className="pt-[80px]">
      <div className="relative main-container min-h-[100vh] flex flex-col md:flex-row gap-8 p-5 items-center">
        <div className="absolute right-[-300px] top-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>
        <div className="absolute right-[-250px] top-[170px] w-[350px] h-[350px] bg-[#E879CE] opacity-190 blur-[80px] rounded-full"></div>

        <div className="left flex flex-1 flex-col justify gap-8 p-4">
          <div className="left-1 flex flex-1 flex-col">
            <h1 className="text-5xl font-bold mb-2 opacity-0 animate-fadeUp">
              Hi,
            </h1>
            <h1 className="text-5xl font-bold leading-tight opacity-0 animate-fadeUp animate-delay-1">
              I'm <span>{name},</span>
            </h1>
            <h2 className="text-6xl font-bold text-[#FF77C9] mt-2 opacity-0 animate-fadeUp animate-delay-2">
              {title}
            </h2>
            <p className="text-gray-400 max-w-lg mt-4 opacity-0 animate-fadeUp animate-delay-3 text-justify">
              {description}
            </p>
            <div className="flex gap-4 mt-6 opacity-0 animate-fadeUp animate-delay-4">
              <button
                onClick={() => setOpen(true)}
                className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black transition duration-300 
    hover:scale-105 active:scale-95"
              >
                {buttonText}
              </button>
              <a
                href="#contact"
                className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black transition duration-300 
    hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className=" left-2 socialIcons flex flex-col gap-4 items-center w-fit opacity-0 animate-fadeUp animate-delay-5 ">
            <div className="w-[3px] h-20 bg-[#BF92FE] opacity-80"></div>
            <a
              href="https://github.com/RajeshNayak24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-rajesh-nayak-17b6881a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
            </a>

            <a
              href="mailto:mrajeshnayak.jobs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="right relative flex-1 w-full h-[400px] md:h-auto flex items-center justify-center">
          <img
            className=" w-[280px] md:w-[800px] relative md:absolute md:top-[-350px] md:left-[-50px] z-10 object-contain"
            src={profile}
            alt="profile"
          />
          <div className="absolute top-[20px] right-[40px] w-[150px] md:w-[200px] h-[100px] bg-[#1E293B] rounded-xl opacity-80 blur-[1px]"></div>

          <div className="absolute top-[120px] right-[10px] w-[140px] md:w-[180px] h-[90px] bg-white/5 rounded-xl backdrop-blur-sm"></div>

          <div className="absolute bottom-[10px] right-[40px] w-[160px] md:w-[220px] h-[120px] bg-[#1E293B] rounded-xl opacity-70"></div>

          <div className="absolute bottom-[40px] left-[20px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-purple-500 rounded-full opacity-60 blur-sm"></div>

          <div className="absolute bottom-[20px] left-[60px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] bg-pink-500 rounded-md opacity-70"></div>

          <div className="absolute right-[10px] bottom-[60px] w-0 h-0 border-l-[15px] md:border-l-[20px] border-l-transparent border-b-[25px] md:border-b-[30px] border-b-purple-400 border-r-[15px] md:border-r-[20px] border-r-transparent opacity-60"></div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative w-[95%] md:w-[85%] h-[85%] bg-[#0F172A]/90 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.3)] overflow-hidden animate-modalFade">
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg">My Resume</h3>

              <div className="flex items-center gap-4">
                <a
                  href="/M_Rajesh_Nayak_Software_Developer_Resume.pdf"
                  download
                  className="text-2xl px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/40 transition flex items-center gap-2"
                >
                  <PiDownloadSimpleBold />
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-300 hover:text-pink-400 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src="/M_Rajesh_Nayak_Software_Developer_Resume.pdf#toolbar=0"
              title="Resume"
              className="w-full h-[calc(100%-60px)]"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
