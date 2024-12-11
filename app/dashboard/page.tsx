import React from 'react';
import Sidebar from "@/app/dashboard/_component/sidebar";
import ContentBlock from "@/app/dashboard/_component/content-block";
import MainContent from "@/app/dashboard/_component/main-content-list";
import RecentPost from "@/app/dashboard/_component/recent-post";

function DashboardPage() {
    // 1024
    return (
        <div className="grid grid-cols-1 md:grid-cols-10 border-2 border-black h-screen">
            <div className="hidden md:block md:col-span-2  sticky bg-blue-500 border-1 border-black">
                <ContentBlock>
                    <Sidebar/>
                </ContentBlock>
            </div>
            <div className="col-span-1 md:col-span-5 bg-green-500 border-1 border-black">
                <ContentBlock>
                    <MainContent/>
                </ContentBlock>
            </div>
            <div className="hidden md:block md:col-span-3 bg-red-500 border-1 border-black">
                <ContentBlock>
                    <RecentPost/>
                </ContentBlock>
            </div>
        </div>

    );
}

export default DashboardPage;