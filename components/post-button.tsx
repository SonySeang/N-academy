import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import PostForm from "@/app/dashboard/_component/post-form";

interface CreatePostProps {
    children: React.ReactNode;
    actionType: "create" | "update" | "delete";
}

export default function PostButton({children, actionType}: CreatePostProps) {
    if (actionType === "delete") {
        return <Button variant="destructive">{children}</Button>;
    }
    if (actionType === "create" || actionType === "update") {
        return (
            <div>
                {
                    actionType === "create" ? (
                        <Link href="/dashboard/createpost">
                            <Button variant="secondary">{children}</Button>
                        </Link>
                    ) : (
                        <Link href="/dashboard/editpost">
                            <Button variant="default">{children}</Button>
                        </Link>
                    )
                }
            </div>
        );
    }
}
