// "use client"
import Link from "next/link";
import Search from "./_component/search";


export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();


  return (
    <Search posts={posts} />
  );
}
