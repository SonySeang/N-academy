import React from 'react';
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";

function PostFormBtn() {
    const {pending} = useFormStatus();
    return (
        <Button type="submit" disabled={pending}   className="mt-5 self-end">
            Add Post
        </Button>
    );
}

export default PostFormBtn;