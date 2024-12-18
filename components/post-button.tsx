"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePostContext } from "@/lib/hook";
import { useRouter } from "next/navigation";

interface CreatePostProps {
  children?: React.ReactNode;
  actionType: "create" | "update" | "delete" | "cancel";
  onClick?: () => void;
}

export default function PostButton({
  children,
  actionType,
  onClick
}: CreatePostProps) {

  const {handleDelete , selectedPost} = usePostContext()
  const router = useRouter();
    
  if (actionType === "delete") {
    return (
      <Button variant="destructive" onClick={onClick}>
        {children}
      </Button>
    );
  }
  if (actionType === "create" || actionType === "update") {
    return (
      <div>
        {actionType === "create" ? (
          <Link href={`/dashboard/createpost`}>
            <Button variant="secondary">{children}</Button>
          </Link>
        ) : (
          <Link href={`/dashboard/editpost/${selectedPost?.postId}`}>
            <Button variant="default">{children}</Button>
          </Link>
        )}
      </div>
    );
  }
  if (actionType === "cancel") {
    return (
      <Button variant="destructive" onClick={() => router.back()}>
        {children}
      </Button>
    );
  }
}
