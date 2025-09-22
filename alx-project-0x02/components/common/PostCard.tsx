import type { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{content}</p>
      <p className="text-gray-500 text-sm">User ID: {userId}</p>
    </div>
  );
}
