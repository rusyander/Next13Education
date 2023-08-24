import { Metadata } from "next";
import React from "react";

async function getDataById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Error no data exist");
  const data: PostProps = await res.json();
  return data;
}
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getDataById(id);
  return {
    // title: `Blog | Next App | ${id}`,
    title: post.title,
    description: post?.body,
  };
}

interface Props {
  params: {
    id: string;
  };
}

interface PostProps {
  id?: number;
  title: string;
  body: string;
}

export default async function Post({ params: { id } }: Props) {
  const post = await getDataById(id);
  return (
    <div>
      <h1>Post {id}</h1>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
}
