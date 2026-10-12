"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

const ACTIVE = "list-group-item active border-0";
const IDLE = "list-group-item border-0 text-red-600";

const LINKS = [
  { label: "Signin", href: "/account/signin", id: "wd-account-signin-link" },
  { label: "Signup", href: "/account/signup", id: "wd-account-signup-link" },
  { label: "Profile", href: "/account/profile", id: "wd-account-profile-link" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ label, href, id }) => (
        <Link
          key={id}
          href={href}
          id={id}
          className={pathname === href ? ACTIVE : IDLE}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
