import type { HeroProps } from "./Hero.types";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../../assets/Profile.png";

const Hero = ({ name, title, description, buttonText }: HeroProps) => {
  return (
    <section id="home" className="pt-[80px]">
      <div className="relative main-container min-h-[100vh] flex flex-col md:flex-row gap-8 p-5 items-center">
        <div className="absolute right-[-300px] top-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>
        <div className="absolute right-[-250px] top-[170px] w-[350px] h-[350px] bg-[#E879CE] opacity-190 blur-[80px] rounded-full"></div>

        <div className="left flex flex-1 flex-col justify gap-8 p-4">
          <div className="left-1 flex flex-1 flex-col">
            <h1 className="text-5xl font-bold mb-2 ">Hi,</h1>
            <h1 className="text-5xl font-bold leading-tight">
              I'm <span>{name},</span>
            </h1>
            <h2 className="text-6xl font-bold text-[#FF77C9] mt-2">{title}</h2>
            <p className="text-gray-400 max-w-lg mt-4">{description}</p>
            <div className="flex gap-4 mt-6">
              <a
                href="/M_Rajesh_Nayak_Software_Developer_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black"
              >
                {buttonText}
              </a>
              <a
                href="#contact"
                className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className=" left-2 socialIcons flex flex-col gap-4 items-center w-fit ">
            <div className="w-[3px] h-20 bg-[#BF92FE] opacity-80"></div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
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
    </section>
  );
};

export default Hero;
