import React from 'react';
import PostForm from "@/app/dashboard/_component/post-form";

function EditPage() {
    return (
        <div>
            <PostForm actionType="update"/>
        </div>
    );
}

export default EditPage;