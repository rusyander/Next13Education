"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
type NavLink = {
  href: string;
  label: string;
};
type Props = {
  navItems: NavLink[];
};

export default function Navigation({ navItems }: Props) {
  const pathName = usePathname();
  const session = useSession();
  console.log("session", session);

  return (
    <>
      {navItems.map((navItem) => {
        const isActive = pathName === navItem.href;
        return (
          <Link
            href={navItem.href}
            key={navItem.href}
            className={isActive ? "active" : ""}
          >
            {navItem.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}

      {session?.data ? (
        <Link
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Sing Out
        </Link>
      ) : (
        // <Link href="/api/auth/signin">Sing In</Link>
        <Link href="/signin">Sing In</Link>
      )}
    </>
  );
}
