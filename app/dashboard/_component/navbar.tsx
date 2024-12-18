"use client";
import React from "react";
import Search from "@/components/search";
import PostButton from "@/components/post-button";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import { usePostContext } from "@/lib/hook";

function Navbar() {
  const {} = usePostContext()
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
      <PostButton actionType="create" >
        <GoPlus />
      </PostButton>
    </header>
  );
}

export default Navbar;
