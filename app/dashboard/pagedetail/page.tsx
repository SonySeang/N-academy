"use client";
import React from 'react';
import "easymde/dist/easymde.min.css";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {usePostContext} from "@/lib/hook";
import PostForm from "@/app/dashboard/_component/post-form";
import PostDetail from "@/app/dashboard/_component/post-detail";

function Detail() {
    return (
        <PostDetail/>
    )
}

export default Detail;