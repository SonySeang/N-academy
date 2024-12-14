import React from 'react';
import Navbar from "@/app/dashboard/_component/navbar";
import {Toaster} from "@/components/ui/sonner";
import PostContextProvider from '../context/post-context-provider';
import prisma from '@/prisma/client';
import SearchContextProvider from '../context/search-post-provider';
import ContentBlock from './_component/content-block';
import Sidebar from './_component/sidebar';
import RecentPost from "@/app/dashboard/_component/recent-post";

const DashboardLayout = async ({children}: { children: React.ReactNode }) => {
    const post = await prisma.post.findMany()
    return (
        <SearchContextProvider>
            <PostContextProvider data={post}>
                <Navbar/>
                <div className="grid grid-cols-9">
                    <ContentBlock className="w-[320px] border-r-2 p-2 mt-1">
                        <Sidebar/>
                    </ContentBlock>
                    <div className="col-start-3 col-span-7 border-r-2">
                        <ContentBlock>
                            {children}
                        </ContentBlock>
                    </div>
                </div>
                <Toaster position="top-right"/>
                {/* </div> */}
            </PostContextProvider>
        </SearchContextProvider>
    );
};

export default DashboardLayout;