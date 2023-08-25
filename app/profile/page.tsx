import { authConfig } from "@/config/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      <h2>Email: {session?.user?.email}</h2>
      {session?.user?.image && (
        <img src={session?.user?.image} alt="user image" />
      )}
    </div>
  );
}
