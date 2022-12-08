"use client";

import { categories } from "../../../src/utils/data";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="max-auto grid max-w-6xl grid-cols-4 gap-4 border-b pb-10 text-xs md:grid-cols-7 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}
