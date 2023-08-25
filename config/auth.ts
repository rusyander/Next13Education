import { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        const { email, password }: any = credentials;
        const currentUsers = users.find((user) => user.email === email);
        if (currentUsers && currentUsers.password === password) {
          const { password, ...userWithoutPass } = currentUsers;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
