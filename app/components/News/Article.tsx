"use client";

import type { Article } from "@/src/types/typings";
import Image from "next/image";
import React from "react";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  console.log(article);
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
    </article>
  );
}
