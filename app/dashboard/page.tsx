import React from 'react';
import Sidebar from "@/app/dashboard/sidebar";
import RecentPost from "@/app/dashboard/recent-post";
import MainContent from "@/app/dashboard/main-content-list";

function DashboardPage() {
    return (
        <div className="grid grid-cols-12 grid-rows-1">
            <div className="bg-blue-400 col-span-2">
                <Sidebar/>
            </div>
            <div className="bg-emerald-600 col-span-8">

                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <p className="text-lg">Welcome to your dashboard</p>
            </div>
            <div className="bg-amber-50 col-span-2 ">
                <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
            </div>

        </div>
    );
}

export default DashboardPage;