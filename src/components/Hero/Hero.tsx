import type { HeroProps } from "./Hero.types";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = ({ name, title, description, buttonText }: HeroProps) => {
  return (
    <section className="relative mb-10">
      <div className="relative min-h-[85vh] bg-[#2C2E3D] text-white overflow-hidden flex flex-col lg:flex-row items-center p-5">
        <div className="absolute right-[-300px] top-[80px] w-[600px] h-[600px] bg-gradient-to-br from-[#605985] to-[#D17ACB] opacity-30 rounded-full blur-[80px] "></div>
        <div className="absolute right-[-250px] top-[170px] w-[350px] h-[350px] bg-[#E879CE] opacity-190 blur-[80px] rounded-full"></div>

        <div className="px-8 py-6 flex-1 flex-col gap-4 justify-center items-start ">
          <h1 className="text-5xl font-bold mb-2 ">Hi,</h1>
          <h1 className="text-5xl font-bold leading-tight">
            I'm <span>{name},</span>
          </h1>
          <h2 className="text-6xl font-bold text-[#FF77C9] mt-2">{title}</h2>
          <p className="text-gray-400 max-w-lg mt-4">{description}</p>
          <div className="flex gap-4 mt-6">
            <button className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black">
              {buttonText}
            </button>
            <button className="border-2 border-[#BF92FE] rounded-xl px-6 py-2 hover:bg-[#BF92FE] text-[#BF92FE] hover:text-black">
              Hire Me
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
          <div className="w-[260px] h-[340px] bg-[#0F172A] rounded-2xl shadow-2xl border border-purple-500/20 relative z-10 rotate-6"></div>

          <div className="absolute top-[20px] right-[60px] w-[200px] h-[120px] bg-[#1E293B] rounded-xl opacity-80 blur-[1px]"></div>

          <div className="absolute top-[120px] right-[20px] w-[180px] h-[100px] bg-white/5 rounded-xl backdrop-blur-sm"></div>

          <div className="absolute bottom-[20px] right-[80px] w-[220px] h-[140px] bg-[#1E293B] rounded-xl opacity-70"></div>


          <div className="absolute bottom-[40px] left-[40px] w-[40px] h-[40px] bg-purple-500 rounded-full opacity-60 blur-sm"></div>

          <div className="absolute bottom-[20px] left-[90px] w-[30px] h-[30px] bg-pink-500 rounded-md opacity-70"></div>

          <div className="absolute right-[10px] bottom-[60px] w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-purple-400 border-r-[20px] border-r-transparent opacity-60"></div>
        </div>
      </div>
      <div className="absolute left-14 top-[65%] -translate-y-[16%] flex flex-col items-center gap-4 lg:top-[79%]">
        
        <div className="w-[3px] h-20 bg-[#BF92FE] opacity-80"></div>

        <FaInstagram className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
        <FaLinkedin className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
        <FaGithub className="text-[#5f4db9] text-xl hover:text-pink-400 cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;
