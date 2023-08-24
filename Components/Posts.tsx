"use client";
import { deletePosts, fetchData } from "@/servises/fetchData";
import { usePosts } from "@/store";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import shallow from "zustand/shallow";

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const { data: posts, isLoading: loading } = useSWR("posts", fetchData);
  const { mutate } = useSWR("posts");

  //   const [posts, loading, getAllPosts] = usePosts(
  //     (state) => [state.posts, state.loading, state.getAllPosts],
  //     shallow
  //   );

  //   useEffect(() => {
  //     getAllPosts();
  //   }, [getAllPosts]);

  //   console.log(posts);
  const handleDelete = async (id: number, e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await deletePosts(id);
    // const res = await request.json();
    console.log(res);
    mutate();
  };

  if (loading) return <div>loading...</div>;
  return (
    <ul>
      {!loading &&
        posts?.map((post: PostProps) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={(e) => handleDelete(post.id, e)}>delete</button>
            </Link>
          </li>
        ))}
    </ul>
  );
}
