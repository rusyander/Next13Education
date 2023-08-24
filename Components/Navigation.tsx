"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type NavLink = {
  href: string;
  label: string;
};
type Props = {
  navItems: NavLink[];
};

export default function Navigation({ navItems }: Props) {
  const pathName = usePathname();
  return (
    <>
      {/* <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link> */}
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
    </>
  );
}
