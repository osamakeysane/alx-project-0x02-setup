import type { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="mb-1">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
