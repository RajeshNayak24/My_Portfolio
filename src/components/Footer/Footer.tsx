import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full border-t border-purple-500/20 bg-[#0B132B] mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            M Rajesh Nayak
          </h3>
          <p className="text-gray-400 text-sm max-w-sm">
            Building scalable web applications and modern UI experiences using
            React, TypeScript, and Node.js.
          </p>
        </div>

        <div>
          <h4 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
            Connect
          </h4>

          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:youremail@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm pb-2">
        © {new Date().getFullYear()} M Rajesh Nayak. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;