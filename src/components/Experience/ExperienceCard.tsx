import type { ExperienceProps } from "./Experience.types";

export default function Card({ entry }: { entry: ExperienceProps["experiences"][0] }) {
  const isWork = entry.type === "work";
  return (
    <div
      className="bg-[#0F172A] border border-purple-500/20 rounded-2xl p-5
        shadow-lg transition-all duration-300 hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(255,119,201,0.4)] w-full max-w-[480px]"
    >
      <div className="flex justify-between items-start gap-2 mb-2">
        <p className="text-white font-medium text-sm leading-snug">{entry.role}</p>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${
          isWork ? "bg-purple-900/50 text-purple-300" : "bg-pink-900/50 text-pink-300"
        }`}>
          {isWork ? "Work" : "Education"}
        </span>
      </div>
      <p className="text-white/50 text-xs mb-1 leading-snug">{entry.company}</p>
      <p className="text-white/35 text-xs mb-3">{entry.duration}</p>
      <ul className="space-y-1 mb-3">
        {entry.bullets.map((b, i) => (
          <li key={i} className="text-white/60 text-xs pl-3 relative leading-relaxed
            before:content-[''] before:absolute before:left-0 before:top-[7px]
            before:w-1 before:h-1 before:rounded-full before:bg-white/25">
            {b}
          </li>
        ))}
      </ul>
      {entry.gpa && (
        <p className="text-white/40 text-xs mb-2">
          GPA <span className="text-white/70 font-medium">{entry.gpa}</span>
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {entry.tech.map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5
            border border-white/10 text-white/50">{t}</span>
        ))}
      </div>
    </div>
  );
}