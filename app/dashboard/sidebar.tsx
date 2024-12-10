import React from 'react';

function Sidebar() {
    return (
        <ul className="  p-4 shadow-md">
            <li className="py-2">Home</li>
            <li className="py-2">Explore</li>
            <li className="py-2">Following</li>
            <li className="py-2 mt-10">Community</li>
            <li className="py-2">Profile</li>
        </ul>
    );
}

export default Sidebar;