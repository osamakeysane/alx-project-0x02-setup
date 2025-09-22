// // alx-project-0x02/components/layout/Header.tsx
// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white p-4 shadow-md">
//       <nav className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">ALX Project 0x02</h1>
//         <ul className="flex space-x-6">
//           <li>
//             <a href="/" className="hover:underline">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="hover:underline">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="/posts" className="hover:underline">
//               Posts
//             </a>
//           </li>
//           <li>
//             <a href="/users" className="hover:underline">
//               Users
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/home">Go to /home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
