import type { Article } from "@/src/types/typings";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};

export default function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            className="mx-auto h-56 max-w-md rounded-lg object-cover shadow-md md:max-w-lg lg:max-w-xl"
            width="200"
            height="200"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle pb-2 no-underline">{article.title}</h1>
          <div className="flex space-x-4 divide-x-2">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="pl-4 font-bold">Source: {article.source}</h2>
            <p className="pl-4">{article.published_at}</p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
