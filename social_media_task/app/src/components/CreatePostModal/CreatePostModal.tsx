'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload } from 'lucide-react';

export const CreatePostModal: React.FC<{
    toggleCreatePostModal: () => void;
}> = ({ toggleCreatePostModal }) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold">
                            Create a new post
                        </h2>
                        <p className="text-sm text-gray-500">
                            Share your thoughts with your network
                        </p>
                    </div>
                    <div className="p-4 space-y-4">
                        <motion.textarea
                            className="w-full h-32 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            placeholder="What's on your mind?"
                            whileFocus={{ scale: 1.02 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                        ></motion.textarea>

                        <motion.div
                            className="flex items-center justify-center w-full"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <label
                                htmlFor="dropzone-file"
                                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors duration-300 ${
                                    isDragging
                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900'
                                        : ''
                                }`}
                                onDragEnter={() => setIsDragging(true)}
                                onDragLeave={() => setIsDragging(false)}
                                onDrop={() => setIsDragging(false)}
                            >
                                <div className="flex flex-col items-center justify-center pt-3 pb-4">
                                    <motion.div
                                        animate={{
                                            rotate: isDragging ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                                    </motion.div>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{' '}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </motion.div>

                        <div className="flex flex-col justify-between">
                            <motion.button
                                className="px-4 py-2 mb-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                Post
                            </motion.button>
                            <motion.button
                                onClick={toggleCreatePostModal}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                Cancel
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
