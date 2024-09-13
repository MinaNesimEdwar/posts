"use client"
import { useState } from "react";
import Link from "next/link";

export default  function Search({posts}) {


  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts
    .filter((post) => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())  
    )
    .slice(0, 20); 

  return (
    <div className="container py-8">
      <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-cyan-400 via-sky-500 bg-clip-text text-transparent">Posts</h1>
      
      
      <div className="my-6">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 border border-sky-500 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-12 gap-8 my-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="lg:col-span-3 md:col-span-6 col-span-12 relative p-4 pb-16 border border-cyan-700 rounded-md hover:shadow-md md:hover:scale-110 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-cyan-600">
                {post.title}
              </h2>
              <p className="line-clamp-3 my-2">{post.body}</p>
              <Link
                href={`/posts/${post.id}`}
                className="py-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:transition-all hover:duration-300 text-white rounded-md absolute bottom-4 left-4"
              >
                Show Details
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-12 text-center text-cyan-600">No posts found</p>
        )}
      </div>
    </div>
  );
}
