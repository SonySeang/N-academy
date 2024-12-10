import React from 'react';
import Navbar from "@/app/dashboard/Navbar";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <Navbar/>
            {children}
        </div>

    );
};

export default DashboardLayout;