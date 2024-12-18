import AuthForm from "@/components/auth-form";
import Link from "next/link";
import React from "react";

export default function NewUser() {
  return (
    <main>
      <AuthForm  actionType="signup"/>

      <p>
        Have account?
        <Link href="/sign-in" className="text-blue-500">
          {" "}
          Log in{" "}
        </Link>
        .
      </p>
    </main>
  );
}
