"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./lab2/tailwind/utilities.css";
const LINKS = [
  {
    href: "/labs",
    id: "wd-home-link",
    label: "Home",
    match: (p: string) => p === "/labs",
  },
  {
    href: "/labs/lab1",
    id: "wd-lab1-link",
    label: "Lab 1",
    match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/"),
  },
  {
    href: "/labs/lab2",
    id: "wd-lab2-link",
    label: "Lab 2",
    match: (p: string) => p.includes("/lab2"),
  },
  {
    href: "/labs/lab3",
    id: "wd-lab3-link",
    label: "Lab 3",
    match: (p: string) => p.includes("/lab3"),
  },
  {
    href: "/labs/lab4",
    id: "wd-lab4-link",
    label: "Lab 4",
    match: (p: string) => p.includes("/lab4"),
  },
  {
    href: "/book/ch1",
    id: "wd-toc-book-link",
    label: "Chapter 1",
    match: () => false,
  },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  {
    href: "https://kambaz.dev/book/ch3",
    id: "wd-book-ch3-link",
    label: "Book Ch3",
    match: () => false,
  },
] as const;
const activeClass = "rounded bg-blue-600 px-2 py-0.5 text-white no-underline";
export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <strong>Jose Diaz</strong>
      <ul>
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                className={active ? activeClass : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
