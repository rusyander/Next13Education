"use client";
import { usePosts } from "@/store";
import React, { FormEventHandler, useState } from "react";
import shallow from "zustand/shallow";
import useSWR from "swr";
import { searchPosts } from "@/servises/fetchData";

type Props = {
  //   onSearch: (value: any[]) => void;
};

export default function PostSearch() {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState("");

  const [getPostBySearch] = usePosts(
    (state) => [state.getPostBySearch],
    shallow
  );

  const handleFilter = (e: any) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // searchPosts(search).then((data) => {
    //   onSearch(data);
    // });
    const posts = await searchPosts(search);
    mutate(posts);
    // // searchPosts(search).then((data) => {
    // //   console.log("data +++", data);

    // //   mutate(data);
    // // });
    // console.log("data +++", posts);

    // getPostBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" value={search} onChange={handleFilter} />
      <button type="submit">submit</button>
    </form>
  );
}
