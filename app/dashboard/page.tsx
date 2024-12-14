import React from 'react';
import Sidebar from "@/app/dashboard/_component/sidebar";
import ContentBlock from "@/app/dashboard/_component/content-block";
import RecentPost from "@/app/dashboard/_component/recent-post";
import PostList from "@/app/dashboard/_component/post-list";

function DashboardPage() {

    return (
        <div className="grid grid-cols-3">
            <ContentBlock className="col-start-1 col-span-2">
                <PostList/>
            </ContentBlock>
            <div className="col-start-3 col-span-1">
                <ContentBlock className=" bg-blue-400 border-2">
                    <RecentPost/>
                </ContentBlock>
            </div>
        </div>

    );
}

export default DashboardPage;