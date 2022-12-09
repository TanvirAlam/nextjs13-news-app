"use client";

import type { Article } from "@/src/types/typings";
import Image from "next/image";
import React from "react";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <article>
      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-lg object-cover shadow-md"
          width="200"
          height="200"
        />
      )}

      <div>
        <div>
          <h2>{article.title}</h2>
          <section>
            <p>{article.description}</p>
          </section>
          <footer>
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>
    </article>
  );
}
