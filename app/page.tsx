import React from "react";
import { categories } from "@/src/utils/data";
import type { NewsResponse } from "@/src/types/typings";
import fetchNews from "./utils/fetchNews";
import NewsList from "./components/News/NewsList";
import DummyResponse from "../response.json";

export default async function Homepage() {
  const news: NewsResponse =
    DummyResponse || (await fetchNews(categories.join(",")));

  return <NewsList news={news} />;
}
