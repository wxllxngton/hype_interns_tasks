'use client';

import { useState } from 'react';
import { NavBar } from '@/components/NavBar/NavBar';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';
import { CreatePostModal } from '@/components/CreatePostModal/CreatePostModal';
import file from '../../config/posts.json';
import { Heart, List } from 'lucide-react';

export default function ProfilePage() {
    enum Tabs {
        POSTS = 'posts',
        LIKES = 'likes',
    }

    const [activeTab, setActiveTab] = useState<Tabs>(Tabs.POSTS);
    const [showCreatePost, setShowCreatePost] = useState(false);

    const toggleCreatePostModal = () => setShowCreatePost((prev) => !prev);

    const renderPostsTab = () =>
        file.posts.length ? (
            <div className="grid grid-cols-3 gap-2">
                {file.posts.map((post, index) => (
                    <div
                        key={index}
                        className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                    >
                        <img
                            src={post.imageSrc}
                            alt="Post Image"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                                {post.postContent}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
                No posts found!
            </p>
        );

    const renderLikesTab = () => {
        const likedPosts = [
            {
                imageSrc: 'https://via.placeholder.com/150',
                content: 'React project.',
            },
            {
                imageSrc: 'https://via.placeholder.com/150',
                content: 'TailwindCSS UI!',
            },
            {
                imageSrc: 'https://via.placeholder.com/150',
                content: 'Next.js & TypeScript.',
            },
        ];
        return likedPosts.length ? (
            <div className="grid grid-cols-3 gap-2">
                {likedPosts.map((like, index) => (
                    <div
                        key={index}
                        className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                    >
                        <img
                            src={like.imageSrc}
                            alt="Liked Post"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                                {like.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
                No liked posts yet!
            </p>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 text-gray-900 dark:text-gray-100">
            {/* Top Navigation */}
            <NavBar />

            <main className="pt-20 sm:pb-20">
                <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl mx-auto max-w-4xl">
                    {/* Profile Section */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <img
                            src="https://i.pravatar.cc/300"
                            alt="Profile Picture"
                            className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-indigo-800 dark:border-blue-900 hover:scale-105 transition-transform"
                        />
                        <div className="flex-1 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-indigo-800 dark:text-white">
                                John Doe
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Software Developer
                            </p>
                            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Followers/Following/Posts */}
                    <div className="flex justify-around w-full mt-8 border-t pt-4">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-indigo-800 dark:text-white">
                                100
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Followers
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-indigo-800 dark:text-white">
                                200
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Following
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-indigo-800 dark:text-white">
                                {file.posts.length}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Posts
                            </p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center w-full mt-8">
                        <button
                            onClick={() => setActiveTab(Tabs.POSTS)}
                            className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 border-b-2 transition-all ${
                                activeTab === Tabs.POSTS
                                    ? 'border-indigo-600 text-indigo-600 font-bold'
                                    : 'border-transparent'
                            }`}
                        >
                            <List className="mr-2 h-5 w-5" />
                            Posts
                        </button>
                        <button
                            onClick={() => setActiveTab(Tabs.LIKES)}
                            className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 border-b-2 transition-all ${
                                activeTab === Tabs.LIKES
                                    ? 'border-indigo-600 text-indigo-600 font-bold'
                                    : 'border-transparent'
                            }`}
                        >
                            <Heart className="mr-2 h-5 w-5" />
                            Likes
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="w-full mt-6">
                        {activeTab === Tabs.POSTS && renderPostsTab()}
                        {activeTab === Tabs.LIKES && renderLikesTab()}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavBar toggleCreatePostModal={toggleCreatePostModal} />
            {/* Creat Post Modal */}
            {showCreatePost && (
                <CreatePostModal
                    toggleCreatePostModal={toggleCreatePostModal}
                />
            )}
        </div>
    );
}
