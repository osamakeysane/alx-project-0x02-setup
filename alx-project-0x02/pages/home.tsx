import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page 🚀</h1>

      <Card
        title="Card One"
        content="This is the first reusable card component."
      />

      <Card
        title="Card Two"
        content="Here’s another card with different content."
      />

      <Card
        title="Card Three"
        content="You can create as many cards as you like!"
      />
    </div>
  );
}
