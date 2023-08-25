"use client";
import { useRouter } from "next/navigation";
import React, { FormEventHandler } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res: any = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
      callbackUrl: "/profile",
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log("res.error", res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
