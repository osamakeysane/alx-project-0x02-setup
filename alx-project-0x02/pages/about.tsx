// export default function AboutPage() {
//   return (
//     <div>
//       <h1>About Us 📘</h1>
//     </div>
//   );
// }
//task 5
// pages/about.tsx
// components/common/Button.tsx
// pages/about.tsx
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function About() {
  return (
    <div className="p-6">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">About Page</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small & Rounded-SM
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium & Rounded-MD
          </Button>
          <Button size="large" shape="rounded-full">
            Large & Rounded-Full
          </Button>
        </div>
      </main>
    </div>
  );
}
