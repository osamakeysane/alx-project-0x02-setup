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
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
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

// Fetch posts at build time
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
