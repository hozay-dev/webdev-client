"use client";
import { usePathname } from "next/navigation";
export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  let label = section.charAt(0).toUpperCase() + section.slice(1);
  if (section === "table") {
    label = "People";
  }
  return (
    <span>
      {course?.name} &gt; {label}
    </span>
  );
}
