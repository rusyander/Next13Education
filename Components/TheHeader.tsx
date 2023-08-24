import Link from "next/link";
import React from "react";

export default function TheHeader() {
  return (
    <header className="">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
