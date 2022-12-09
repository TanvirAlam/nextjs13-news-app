"use client";

import type { Article } from "@/src/types/typings";
import Image from "next/image";
import React from "react";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <article className="reounded-lg flex flex-col bg-slate-100 shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-lg dark:bg-slate-800">
      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-lg object-cover shadow-md"
          width="200"
          height="200"
        />
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-1">{article.description}</p>
          </section>
          <footer className="ml-auto flex flex-col space-x-1 pt-5 text-right text-xs italic text-gray-400">
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        {/* Read more */}
      </div>
    </article>
  );
}
