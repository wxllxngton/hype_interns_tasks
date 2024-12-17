'use client';

import { useState } from 'react';
import {
    Heart,
    MessageCircle,
    Share2,
    MoreHorizontal,
    Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import file from '../../config/posts.json';
import { NavBar } from '@/components/NavBar/NavBar';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';
import { CreatePostModal } from '@/components/CreatePostModal/CreatePostModal';

export default function ClientHomePage() {
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
            <motion.main
                className="max-w-2xl mx-auto pt-20 pb-16 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-6">
                    <AnimatePresence>
                        {file.posts?.length > 0 ? (
                            file.posts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="p-4 flex items-center space-x-4">
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 10,
                                            }}
                                        >
                                            <span className="text-sm font-medium">
                                                {post.userInitials}
                                            </span>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-semibold dark:text-slate-300">
                                                {post.username}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {post.postTime} ·{' '}
                                                <Globe className="inline h-4 w-4" />
                                            </p>
                                        </div>
                                        <motion.button
                                            className="ml-auto p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <MoreHorizontal className="h-5 w-5" />
                                        </motion.button>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {post.postContent}
                                        </p>
                                        <motion.img
                                            src={post.imageSrc}
                                            alt="Post preview"
                                            className="mt-4 rounded-lg w-full object-cover h-64"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                                        <motion.button
                                            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Heart className="h-5 w-5" />
                                            <span>{post.likes}</span>
                                        </motion.button>
                                        <motion.button
                                            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                            <span>{post.comments}</span>
                                        </motion.button>
                                        <motion.button
                                            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Share2 className="h-5 w-5" />
                                            <span>Share</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                No posts!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.main>

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
