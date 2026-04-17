import type { IconType } from "react-icons";

export type SkillCategory = {
  tag: IconType;
  title: string;
  skills: {
    name: string;
    image: string ;
    level: number; 
    experience: string; 
    note: string;
  }[];
};

export type SkillProps = {
  categories: SkillCategory[];
};
