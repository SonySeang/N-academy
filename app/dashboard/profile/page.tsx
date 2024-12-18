import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/sign-out-button";
export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>
      Profile
      <div>
        <h1>Profile</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.name}</p>
      </div>
      <h1>Post </h1>
      <SignOutButton />
    </div>
  );
}
