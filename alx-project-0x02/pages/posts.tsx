// // pages/posts.tsx
// import Header from "@/components/layout/Header";

// export default function Posts() {
//   return (
//     <div>
//       <Header />
//       <main className="p-6">
//         <h1 className="text-2xl">Posts Page</h1>
//         {/* Content like PostCard components */}
//       </main>
//     </div>
//   );
// }
// task7
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();
      // Transform API data to match PostProps interface
      const formattedPosts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formattedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
}
