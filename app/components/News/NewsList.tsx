import type { Article, NewsResponse } from "@/src/types/typings";
import ArticleList from "./Article";

type Props = {
  news: NewsResponse;
};

const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function NewsList({ news }: Props) {
  return (
    <main className="lg:gird-cols-3 grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
      {news.data.map((article: Article) => (
        <ArticleList key={generateKey(article.title)} article={article} />
      ))}
    </main>
  );
}
