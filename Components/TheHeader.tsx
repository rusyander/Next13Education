import React from "react";
import Navigation from "./Navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function TheHeader() {
  return (
    <header className="">
      <Navigation navItems={navItems} />
    </header>
  );
}
