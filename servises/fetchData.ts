export const fetchData = () => {
  return fetch("/api/posts", {
    method: "GET",
    next: {
      revalidate: 60,
    },
  }).then((res) => {
    const resp = res.json();
    return resp;
  });
};

export const searchPosts = async (search: any) => {
  const response = await fetch(`/api/posts?q=${search}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const resp = await response.json();
  return resp;
};

export const deletePosts = async (id: any) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const resp = await response.json();
  return resp;
};
