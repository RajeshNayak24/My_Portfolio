export type ExperienceItem = {
  type: string;
  role: string;
  company: string;
  duration: string;
  year: string;
  bullets: string[];
  tech: string[];
  gpa?: string;
};

export type ExperienceProps = {
  experiences: ExperienceItem[];
};
