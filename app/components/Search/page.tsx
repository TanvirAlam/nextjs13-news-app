import type { NewsResponse } from "@/src/types/typings";
import fetchNews from "../../utils/fetchNews";
import NewsList from "../News/NewsList";

type Props = {
  searchParams?: { term: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}
