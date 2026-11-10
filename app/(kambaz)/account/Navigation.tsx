"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

const ACTIVE = "list-group-item active border-0";
const IDLE = "list-group-item border-0 text-red-600";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          id={`wd-account-${link}-link`}
          className={pathname === `/account/${link}` ? ACTIVE : IDLE}
        >
          {link === "signin"
            ? "Signin"
            : link === "signup"
              ? "Signup"
              : "Profile"}
        </Link>
      ))}
    </div>
  );
}
