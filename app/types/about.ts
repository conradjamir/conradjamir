export interface Experience {
    company: string;
    location: string;
    title: string;
    period: string;
    description: string;
}

export interface Skill {
    name: string;
    icon: string;
}

export interface Tool {
    name: string;
    icon: string;
}

export interface AboutData {
    experiences: Experience[];
    skills: Skill[];
    tools: Tool[];
    bio: string;
}
