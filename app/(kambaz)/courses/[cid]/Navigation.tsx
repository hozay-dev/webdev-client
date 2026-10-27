"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const ACTIVE = "list-group-item active border-0";
const IDLE = "list-group-item border-0 text-red-600";

const LINKS = [
  { label: "Home", path: "home", id: "wd-course-home-link" },
  { label: "Modules", path: "modules", id: "wd-course-modules-link" },
  { label: "Piazza", path: "piazza", id: "wd-course-piazza-link" },
  { label: "Zoom", path: "zoom", id: "wd-course-zoom-link" },
  { label: "Assignments", path: "assignments", id: "wd-course-assignments-link" },
  { label: "Quizzes", path: "quizzes", id: "wd-course-quizzes-link" },
  { label: "Grades", path: "grades", id: "wd-course-grades-link" },
  { label: "People", path: "people/table", id: "wd-course-people-link" },
  { label: "Announcements", path: "announcements", id: "wd-course-announcements-link" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  // Nested paths (e.g. /assignments/123) keep their section highlighted
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ label, path, id }) => {
        const href = `/courses/${cid}/${path}`;
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={isActive(href) ? ACTIVE : IDLE}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
