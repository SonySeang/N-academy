import React from 'react';

const Post = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                <div>
                    <h2 className="text-lg font-semibold">User</h2>
                    <p className="text-gray-500">Post title or brief description...</p>
                </div>
            </div>
            <p className="text-gray-700">Post content goes here...</p>
            <div className="flex justify-between mt-4">
                <button className="text-blue-500 hover:underline">Like</button>
                <button className="text-blue-500 hover:underline">Comment</button>
                <button className="text-blue-500 hover:underline">Share</button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white flex items-center justify-between p-4">
                <div className="flex items-center">
                    <div className="bg-gray-500 w-10 h-10 rounded-full mr-4"></div>
                    <span className="text-xl font-bold">Logo</span>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 text-white mr-4 "/>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded ml-40">+ Post</button>
                    <div className="bg-gray-500 w-10 h-10 rounded-full ml-20"></div>
                </div>
            </header>
            <div className="flex flex-1 bg-gray-100">
                <nav className="w-64 bg-white p-4 shadow-md">
                    <ul>
                        <li className="py-2">Home</li>
                        <li className="py-2">Explore</li>
                        <li className="py-2">Following</li>
                        <li className="py-2 mt-10">Community</li>
                        <li className="py-2">Profile</li>
                    </ul>
                </nav>
                <main className="flex-1 p-4">
                    <div className="max-w-3xl mx-auto">
                        <Post />
                        <Post />
                    </div>
                </main>
                <aside className="w-64 bg-white p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Recent Posts</h2>
                </aside>
            </div>
        </div>
    );
};

export default App;
