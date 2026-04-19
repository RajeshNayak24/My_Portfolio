import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDownload, HiOutlineArrowUp } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full border-t border-purple-500/20 bg-[#0B132B] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-10 mb-10 items-center">

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">M Rajesh Nayak</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-[490px] mb-4 text-justify">
              Full Stack Engineer building scalable APIs, dashboards, and
              developer tools with React, TypeScript, Node.js and cloud-native
              infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-medium
              text-green-400 bg-green-400/10 border border-green-400/25
              rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to full-time roles
            </div>
          </div>

       
          <div className="flex flex-col md:items-end">
            <p className="text-[10px] font-semibold tracking-widest uppercase
              text-white/30 mb-4">Connect</p>

            <div className="flex gap-2.5 mb-5">
              {[
                {
                  icon: <FaGithub size={15} />,
                  href: "https://github.com/RajeshNayak24",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin size={15} />,
                  href: "https://www.linkedin.com/in/m-rajesh-nayak-17b6881a5/",
                  label: "LinkedIn",
                },
                {
                  icon: <HiOutlineMail size={16} />,
                  href: "mailto:mrajeshnayak.jobs@gmail.com",
                  label: "Email",
                },
                {
                  icon: <HiOutlineDownload size={16} />,
                  href: "/M_Rajesh_Nayak_Software_Developer_Resume.pdf",
                  label: "Resume",
                  download: true,
                },
              ].map(({ icon, href, label, download }) => (
                <a key={label} href={href}
                  target={download ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={download || undefined}
                  title={label}
                  className="w-9 h-9 rounded-lg border border-purple-500/20
                    bg-white/[0.03] flex items-center justify-center
                    text-white/40 hover:text-pink-400 hover:border-pink-400/40
                    hover:bg-pink-400/5 transition-all">
                  {icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-white/35 mb-1">
              <HiOutlineMapPin size={13} />
              <span className="text-xs">Delray Beach, FL</span>
            </div>
            <p className="text-xs text-white/20 pl-5">Open to remote &amp; on-site</p>
          </div>

        </div>

        <div className="border-t border-purple-500/10 mb-5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()}{" "}
            <span className="text-pink-400/70">M Rajesh Nayak</span>.
            All rights reserved.
          </p>


          <button onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/30
              hover:text-pink-400 transition-colors group">
            Back to top
            <HiOutlineArrowUp size={13}
              className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;