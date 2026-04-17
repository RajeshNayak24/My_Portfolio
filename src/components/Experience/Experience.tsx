import type { ExperienceProps } from "./Experience.types";
import { useState, useEffect, useRef } from "react";
import Card from "./ExperienceCard";

const Experience = ({ experiences }: ExperienceProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-24 w-full py-16 px-6 md:px-16"
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400">
          My professional journey and achievements
        </p>
      </div>


      <div className="relative">
        <div
          className={`absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 -translate-x-1/2 transition-all duration-1000 ${
            visible ? "h-full opacity-100" : "h-0 opacity-0"
          } md:block hidden`}
        />

        <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-pink-500 md:hidden"></div>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full`}
              >
                <div
                  className={`
                    md:w-1/2 w-full
                    ${isLeft ? "md:pr-10" : "md:invisible"}
                    transition-all duration-700
                    ${
                      visible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }
                  `}
                >
                  {isLeft && <Card exp={exp} />}
                </div>

                <div className="absolute md:left-1/2 left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(255,119,201,0.8)] z-10"></div>

                <div
                  className={`
                    md:w-1/2 w-full mt-10 md:mt-0
                    ${!isLeft ? "md:pl-10" : "md:invisible"}
                    transition-all duration-700
                    ${
                      visible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }
                  `}
                >
                  {!isLeft && <Card exp={exp} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
