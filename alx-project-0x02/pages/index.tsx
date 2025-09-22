// alx-project-0x02/pages/index.tsx
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ALX Project 0x02
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Your Next.js + TypeScript + Tailwind setup is working!
        </p>
      </main>
    </div>
  );
}
