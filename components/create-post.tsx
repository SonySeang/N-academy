import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

function CreatePost({children}: { children: React.ReactNode }) {
    return (
        <Link href="/dashboard/post">
            <Button>
                {children}
            </Button>
        </Link>

    );
}

export default CreatePost;