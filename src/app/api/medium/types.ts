export interface MediumPost {
    title: string;
    link: string;
    pubDate: string;
    releaseDate: string;
    content: string;
    categories: string[];
    author: string;
}

export interface MediumFeed {
    title: string;
    description: string;
    url: string;
    items: MediumPost[];
}

