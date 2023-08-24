import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();
  return data;
}

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <div>
      <h1>page Blog</h1>
      <ul>
        {posts.map((post: PostProps) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
