import GoogleButton from "@/Components/GoogleButton";
import SignInForm from "@/Components/SignInForm";
import { authConfig } from "@/config/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Singin | Next App",
};

export default async function Singin() {
  const session = await getServerSession(authConfig);
  return (
    <div className="stack">
      <h1>SingIn</h1>
      <GoogleButton />
      <div>
        <SignInForm />
      </div>
    </div>
  );
}
