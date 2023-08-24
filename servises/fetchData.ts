export const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
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
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const resp = await response.json();

  return resp;
};

// export const getPostsBySearch = async (search: string) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?q=${search}`
//   );

//   if (!response.ok) throw new Error("Unable to fetch posts.");
//   console.log("response", response);

//   return response.json();
// };
