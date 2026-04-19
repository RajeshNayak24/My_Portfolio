// import type { IconType } from "react-icons";

export type Project = {
    image:string;
    title: string;
    description: string;
    tech: string[];
    impact: string;
    github: string;
    live?: string;
}

export type ProjectsProps = {
    projects: Project[];
}