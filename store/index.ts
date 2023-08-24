import { fetchData, searchPosts } from "@/servises/fetchData";
import { create } from "zustand";

type UsePosts = {
  posts: any[];
  search: string;
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostBySearch: (search: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  search: "",
  loading: false,

  getAllPosts: async () => {
    set({ loading: true });
    const posts = await fetchData();
    set({ posts: posts, loading: false });
  },
  getPostBySearch: async (search: string) => {
    set({ loading: true });
    const posts = await searchPosts(search);
    set({ posts: posts, loading: false });
  },
}));
