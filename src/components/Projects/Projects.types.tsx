export type Project = {
    title: string;
    description: string;
    tech: string[];
    impact: string;
}

export type ProjectsProps = {
    projects: Project[];
}