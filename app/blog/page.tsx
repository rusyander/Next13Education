import PostSearch from "@/Components/PostSearch";
import Posts from "@/Components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  return (
    <div>
      <h1>page Blog</h1>
      <PostSearch />
      <Posts />
    </div>
  );
}
