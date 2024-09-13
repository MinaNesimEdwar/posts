import Link from "next/link";

export default async function PostDetails({ params }) {
  
  const { postID } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  const post = await res.json();

  return (
    <div className=" container my-8 h-screen flex justify-center items-center ">
       <div className="w-1/2 m-auto p-8   border border-cyan-700  rounded-md hover:shadow-md  transition-all duration-300">
      <h1 className="text-4xl font-bold text-cyan-600 mb-6">{post.title}</h1>
      <p className="text-lg mb-6">{post.body}</p>
      <Link href="/" className="py-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:transition-all hover:duration-300 text-white rounded-md ">
        Go back to Posts
      </Link>
    </div>
    </div>
 
  );
}