import { gql } from "graphql-request";
import type { Category } from "@/src/types/typings";
import sortNews from "./sortNews";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort: "published_desc"
                keywords: $keywords
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    url
                    title
                    source
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    const res = await fetch('https://sabuncu.stepzen.net/api/malarivnat/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords
            }
        })
    })

    const newResponse = await res.json()
    const news = sortNews(newResponse.data.myQuery)

    return news
}

export default fetchNews
