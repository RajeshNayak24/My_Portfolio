import type { ExperienceProps } from "./Experience.types";
import Card from "./ExperienceCard";
import { useState } from "react";

type FilterType = "all" | "work" | "edu";

export default function Experience({ experiences }: ExperienceProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = experiences.filter(
    (e) => filter === "all" || e.type === filter
  );

  const useAlternating = filter === "all";

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
        bg-clip-text text-transparent mb-10 text-center">
        Experience & Education
      </h2>

      <div className="flex gap-3 mb-12 flex-wrap justify-center">
        {(["all", "work", "edu"] as FilterType[]).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              filter === f
                ? "bg-white/10 text-white border-white/30"
                : "text-white/50 border-white/10 hover:border-white/20"
            }`}>
            {f === "all" ? "All" : f === "work" ? "Work experience" : "Education"}
          </button>
        ))}
      </div>

      {useAlternating && (
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          {experiences.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const isWork = entry.type === "work";
            return (
              <div key={i} className="grid grid-cols-[1fr_48px_1fr] items-start mb-10">
                <div className="pr-4 flex justify-end items-start">
                  {isLeft ? (
                    <div className="flex items-start">
                      <Card entry={entry} />
                      <div className="w-5 h-px bg-white/10 mt-5 flex-shrink-0" />
                    </div>
                  ) : <div />}
                </div>
                <div className="flex flex-col items-center pt-3 z-10">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                    isWork ? "bg-purple-900 border-purple-400" : "bg-pink-900 border-pink-400"
                  }`} />
                  <span className="text-[10px] font-medium text-white/40 bg-[#2C2E3D]
                    border border-white/10 rounded-full px-2.5 py-0.5 mt-1.5 whitespace-nowrap">
                    {entry.year}
                  </span>
                </div>
                <div className="pl-4 flex justify-start items-start">
                  {!isLeft ? (
                    <div className="flex items-start">
                      <div className="w-5 h-px bg-white/10 mt-5 flex-shrink-0" />
                      <Card entry={entry} />
                    </div>
                  ) : <div />}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className={`${useAlternating ? "md:hidden" : ""} relative pl-8`}>
        <div className="absolute left-[10px] top-1 bottom-1 w-px bg-white/10" />
        {filtered.map((entry, i) => (
          <div key={i} className="relative mb-8">
            <div className={`absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 ${
              entry.type === "work"
                ? "bg-purple-900 border-purple-400"
                : "bg-pink-900 border-pink-400"
            }`} />
            
            <div className="bg-[#0F172A] border border-purple-500/20 rounded-2xl p-5
              shadow-lg transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(255,119,201,0.4)]">
              <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                <div>
                  <p className="text-white font-medium text-sm">{entry.role}</p>
                  <p className="text-white/50 text-xs mt-1">{entry.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-white/40 text-xs whitespace-nowrap">{entry.duration}</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    entry.type === "work"
                      ? "bg-purple-900/50 text-purple-300"
                      : "bg-pink-900/50 text-pink-300"
                  }`}>
                    {entry.type === "work" ? "Work" : "Education"}
                  </span>
                </div>
              </div>
              <ul className="space-y-1 mb-3">
                {entry.bullets.map((b, j) => (
                  <li key={j} className="text-white/60 text-sm pl-3 relative leading-relaxed
                    before:content-[''] before:absolute before:left-0 before:top-2
                    before:w-1 before:h-1 before:rounded-full before:bg-white/30">
                    {b}
                  </li>
                ))}
              </ul>
              {entry.gpa && (
                <p className="text-white/40 text-xs mb-3">
                  GPA <span className="text-white/70 font-medium">{entry.gpa}</span>
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {entry.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5
                    border border-white/10 text-white/50">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}