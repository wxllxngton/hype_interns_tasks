'use client';

import { useState } from 'react';
import {
    Heart,
    MessageCircle,
    Share2,
    MoreHorizontal,
    Globe,
} from 'lucide-react';
import file from '../../config/posts.json';
import { NavBar } from '@/components/NavBar/NavBar';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';
import { CreatePostModal } from '@/components/CreatePostModal/CreatePostModal';

export default function HomePage() {
    const [showCreatePost, setShowCreatePost] = useState(false);

    // Toggles the visibility of the create post modal
    const toggleCreatePostModal = () => {
        setShowCreatePost((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen text-gray-900 dark:text-gray-100">
            {/* Top Navigation */}
            <NavBar />

            {/* Main Content */}
            <main className="max-w-2xl mx-auto pt-20 pb-16 px-4">
                {/* News Feed */}
                <div className="space-y-6 ">
                    {file.posts?.length > 0 ? (
                        file.posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow"
                            >
                                <div className="p-4 flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-sm font-medium">
                                            {post.userInitials}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold dark:text-slate-300">
                                            {post.username}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {post.postTime} ·{' '}
                                            <Globe className="inline h-4 w-4" />
                                        </p>
                                    </div>
                                    <button className="ml-auto p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {post.postContent}
                                    </p>
                                    <img
                                        src={post.imageSrc}
                                        alt="Post preview"
                                        className="mt-4 rounded-lg w-full object-cover h-64"
                                    />
                                </div>
                                <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                                        <Heart className="h-5 w-5" />
                                        <span>{post.likes}</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                                        <MessageCircle className="h-5 w-5" />
                                        <span>{post.comments}</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                                        <Share2 className="h-5 w-5" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No posts!</div>
                    )}
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavBar toggleCreatePostModal={toggleCreatePostModal} />

            {/* Create Post Modal */}
            {showCreatePost && (
                <CreatePostModal
                    toggleCreatePostModal={toggleCreatePostModal}
                />
            )}
        </div>
    );
}
