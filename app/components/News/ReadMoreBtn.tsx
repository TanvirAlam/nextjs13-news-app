"use client";

import { useRouter } from "next/navigation";

import type { Article } from "@/src/types/typings";

type Props = {
  article: Article;
};

export default function ReadMoreBtn({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="h-10 rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
    >
      Read More
    </button>
  );
}
