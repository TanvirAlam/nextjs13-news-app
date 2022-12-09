import type { Category, NewsResponse } from "@/src/types/typings";
import { categories } from "@/src/utils/data";
import fetchNews from "../../../utils/fetchNews";
import NewsList from "../../News/NewsList";

type Props = {
  params: { category: Category };
};
export default async function NewsCategoryPage({
  params: { category },
}: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
