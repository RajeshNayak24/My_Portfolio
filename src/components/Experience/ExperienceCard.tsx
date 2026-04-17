const Card = ({ exp }: any) => {
  return (
    <div
      className="
        bg-[#0F172A]
        border border-purple-500/20
        rounded-2xl p-6
        shadow-lg
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[0_0_30px_rgba(255,119,201,0.4)]
      "
    >
      <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>

      <p className="text-sm text-pink-400 mb-3">{exp.duration}</p>

      <p className="text-gray-300 mb-3">{exp.company}</p>

      <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
        {exp.description.map((point: string, i: number) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <ul className="flex gap-2 flex-wrap mt-2 ">
        {exp.tech.map((t) => (
          <li
            key={t}
            className="bg-purple-500/20 text-purple-300 rounded px-2 py-3/4 text-xs hover:scale-100 transition"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
