export interface ProjectType {
    id: number;
    title: string;
    description: string;
    images: string[];
    videos: string[];
    client: {
        firstName: string;
        lastName: string;
        country: string;
    };
    categories: {
        id: number;
        name: string;
    }[];
    technologies: {
        id: number;
        name: string;
    }[];
    ProjectDemoLink: {
        id: number;
        link: string;
        title: string;
    }[];
    ProjectDescription: {
        id: number;
        heading: string;
        description: string;
        images: string[];
        list: string[];
    }[];
    targetAudience: string;
    keyFeatures: string[];
    ProjectTimeline: {
        title: string;
        duration: string;
        description: string;
    }[];
    ProjectDetail: {
        title: string;
        value: string;
    }[];
    ProjectStat: {
        title: string;
        value: string;
    }[];
}
