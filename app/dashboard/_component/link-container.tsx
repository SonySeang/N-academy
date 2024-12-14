import React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import prisma from "@/prisma/client";


interface Props {
    className?: string;
    params: { postId: string }
}

async function LinkContainer({className, params}: Props) {
    const post = await prisma.post.findUnique({
        where: {postId: params.postId}
    });
    if (!post) return <div>Post not found</div>;
    return (
        <Link href={`/dashboard/pagedetail/${post.postId}`} className={cn("hover:bg-[#BCCCDC]/10", className)}>Click to See
            Detail
        </Link>
    );
}

export default LinkContainer;