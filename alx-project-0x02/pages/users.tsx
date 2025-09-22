import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import type { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">Users</h1>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
}

// Fetch user data at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
