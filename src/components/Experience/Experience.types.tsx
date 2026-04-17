export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
};

export type ExperienceProps = {
  experiences: ExperienceItem[];
};