import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-16 py-12 border-t border-purple-500/20 mt-20">

      <div className="flex flex-col items-center text-center gap-6">

        {/* Name */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Rajesh.dev
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 max-w-md">
          Building scalable systems and modern web applications with clean and efficient code.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">

          <a href="#" className="text-gray-400 hover:text-pink-400 transition">
            <FaInstagram />
          </a>

          <a href="#" className="text-gray-400 hover:text-pink-400 transition">
            <FaLinkedin />
          </a>

          <a href="#" className="text-gray-400 hover:text-pink-400 transition">
            <FaGithub />
          </a>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-purple-500/20"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rajesh Nayak. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;