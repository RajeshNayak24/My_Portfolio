import type { IconType } from "react-icons";

export type SkillCategory = {
  tag:IconType;
  title: string;
  skills: string[];
}

export type SkillProps = {
    categories: SkillCategory[];
}