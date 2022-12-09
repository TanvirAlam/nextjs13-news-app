import type { NewsResponse } from "@/src/types/typings";

export default function sortNews(news: NewsResponse) {
    const newsWithImage = news.data.filter((item) => item.image !== null)
    const newsWithOutImage = news.data.filter((item) => item.image === null)

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithOutImage]
    }

    return sortedNewsResponse
}
