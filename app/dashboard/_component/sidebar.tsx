import React from 'react';

function Sidebar() {
    return (
        <ul className="bg-blue-400 w-full h-full">
            <li>Home</li>
            <li className="py-2">Explore</li>
            <li className="py-2">Following</li>
            <li className="py-2 mt-10">Community</li>
            <li className="py-2">Profile</li>
        </ul>
    );
}

export default Sidebar;