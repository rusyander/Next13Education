"use client";
export default function Home() {
  const fetchData = async () => {
    const request = await fetch("/api/posts");
    const res = await request.json();
    console.log(res);
    return res;
  };
  return (
    <div>
      <button onClick={fetchData}>subm</button>
      <h1>next</h1>
    </div>
  );
}
