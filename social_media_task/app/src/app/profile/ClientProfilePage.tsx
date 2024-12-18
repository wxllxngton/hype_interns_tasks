'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBar } from '@/components/NavBar/NavBar';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';
import { CreatePostModal } from '@/components/CreatePostModal/CreatePostModal';
import file from '../../config/posts.json';
import { Heart, List } from 'lucide-react';

export default function ClientProfilePage() {
    enum Tabs {
        POSTS = 'posts',
        LIKES = 'likes',
    }

    const [activeTab, setActiveTab] = useState<Tabs>(Tabs.POSTS);
    const [showCreatePost, setShowCreatePost] = useState(false);

    const toggleCreatePostModal = () => setShowCreatePost((prev) => !prev);

    const renderPostsTab = () =>
        file.posts.length ? (
            <motion.div
                className="grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {file.posts.map((post, index) => (
                    <motion.div
                        key={index}
                        className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={post.imageSrc}
                            alt="Post Image"
                            className="w-full h-48 object-cover"
                        />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <p className="text-white px-2 text-center">
                                {post.postContent}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        ) : (
            <motion.p
                className="text-center text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                No posts found!
            </motion.p>
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
            <motion.div
                className="grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {likedPosts.map((like, index) => (
                    <motion.div
                        key={index}
                        className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={like.imageSrc}
                            alt="Liked Post"
                            className="w-full h-48 object-cover"
                        />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <p className="text-white px-2 text-center">
                                {like.content}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        ) : (
            <motion.p
                className="text-center text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                No liked posts yet!
            </motion.p>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 text-gray-900 dark:text-gray-100">
            <NavBar />

            <motion.main
                className="pt-20 sm:pb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl mx-auto max-w-4xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <motion.img
                            src="https://i.pravatar.cc/300"
                            alt="Profile Picture"
                            className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-indigo-800 dark:border-blue-900"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 10,
                            }}
                        />
                        <div className="flex-1 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                            <motion.h1
                                className="text-3xl font-bold text-indigo-800 dark:text-white"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Bonnie Green
                            </motion.h1>
                            <motion.p
                                className="text-gray-600 dark:text-gray-300 mt-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Software Developer
                            </motion.p>
                            <motion.button
                                className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Edit Profile
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="flex justify-around w-full mt-8 border-t pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {['Followers', 'Following', 'Posts'].map(
                            (item, index) => (
                                <motion.div
                                    key={item}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.5 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                >
                                    <h2 className="text-2xl font-semibold text-indigo-800 dark:text-white">
                                        {item === 'Posts'
                                            ? file.posts.length
                                            : (index + 1) * 100}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item}
                                    </p>
                                </motion.div>
                            )
                        )}
                    </motion.div>

                    <div className="flex justify-center w-full mt-8">
                        {[
                            { tab: Tabs.POSTS, icon: List, label: 'Posts' },
                            { tab: Tabs.LIKES, icon: Heart, label: 'Likes' },
                        ].map(({ tab, icon: Icon, label }) => (
                            <motion.button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 border-b-2 transition-all ${
                                    activeTab === tab
                                        ? 'border-indigo-600 text-indigo-600 font-bold'
                                        : 'border-transparent'
                                }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <Icon className="mr-2 h-5 w-5" />
                                {label}
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="w-full mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === Tabs.POSTS && renderPostsTab()}
                            {activeTab === Tabs.LIKES && renderLikesTab()}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </motion.main>

            <BottomNavBar toggleCreatePostModal={toggleCreatePostModal} />

            <AnimatePresence>
                {showCreatePost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <CreatePostModal
                            toggleCreatePostModal={toggleCreatePostModal}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
