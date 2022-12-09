type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    publish_at: string;
    source: string;
    title: string;
    url: string;
}

type Pagination = {
    count: number;
    limit: number;
    offset: number;
    total: number;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
}

export type Category = "general" | "business" | "entertainment" | "health" | "science" | "sports" | "technology"
