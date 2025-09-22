// //task3
// import Card from "@/components/common/Card";

// export default function HomePage() {
//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl font-bold">Welcome to the Home Page 🚀</h1>

//       <Card
//         title="Card One"
//         content="This is the first reusable card component."
//       />

//       <Card
//         title="Card Two"
//         content="Here’s another card with different content."
//       />

//       <Card
//         title="Card Three"
//         content="You can create as many cards as you like!"
//       />
//     </div>
//   );
// }

//task 4
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: CardProps) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add Post
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
