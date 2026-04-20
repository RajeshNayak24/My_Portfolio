import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section id="contact" className="w-full py-20 px-6">

      <div className="relative bg-gradient-to-br from-[#1E1B4B] to-[#0F172A] border border-purple-500/20 rounded-3xl p-10 overflow-hidden">

        <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

  
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Let’s build something great together 
            </h2>
            <p className="text-gray-400 max-w-md">
              I’m open to opportunities, collaborations, and interesting
              projects. Feel free to reach out anytime.
            </p>
          </div>

        
          <div className="flex flex-col gap-4 text-gray-300">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400" />
              <span>mrajeshnayak.jobs@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-pink-400" />
              <span>+1 (561) 960-7792</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>Delray Beach, FL, USA</span>
            </div>

            <a
              href="mailto:mrajeshnayak.jobs@gmail.com"
              className="mt-4 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition shadow-lg"
            >
              Get In Touch
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactCTA;