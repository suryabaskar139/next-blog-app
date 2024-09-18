"use client";
import { useEffect, useState } from "react";
const PostDetails = ({ params }) => {
  const [post, setPost] = useState(null);

  const id = params.id;

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <>
      {post && (
        <main className="container mx-auto px-4 py-6">
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500">Published on {post.created_at_formatted}</p>
          <img
            src={post.image}
            alt="Post Image"
            className="my-4"
          />
          <p>
            {post.description}
          </p>
        </main>
      )}
    </>
  );
};

export default PostDetails;
