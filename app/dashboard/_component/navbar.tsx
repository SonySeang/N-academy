"use client";
import React from "react";
import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/signout-button";
import { useSession } from "next-auth/react";
import Search from "@/components/search";
import PostButton from "@/components/post-button";
import { GoPlus } from "react-icons/go";
import Link from "next/link";

function Navbar() {
  const { status, data: session } = useSession();
  return (
    <header className="sticky top-0 left-0 right-0 bg-[#1C2321] text-white flex items-center justify-between px-5 py-2 z-50">
      <div className="flex items-center">
        <div className="bg-gray-500 w-10 h-10 rounded-full mr-4">Logo</div>
        <span className="text-xl font-bold">
          <Link href={"/dashboard"}>Nexus Academy</Link>
        </span>
      </div>
      <div className="flex items-center">
        <Search />
      </div>
      <PostButton actionType="create">
        <GoPlus />
      </PostButton>
      <div>
        {status === "authenticated" && (
          <div className="flex flex-row gap-5 items-center">
            {session.user!.name}
            <SignOut />
          </div>
        )}
        {status === "unauthenticated" && <SignIn />}
      </div>
    </header>
  );
}

export default Navbar;
