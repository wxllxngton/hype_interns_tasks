import { Home, Plus, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * BottomNavBar Component
 *
 * This component renders the bottom navigation bar for the application. It includes
 * the Home, Add Post, and Profile buttons with enhanced animations.
 *
 * @param {Object} props
 * @param {Function} props.toggleCreatePostModal - Function to toggle the create post modal.
 *
 * @returns {JSX.Element} The BottomNavBar component.
 */
export const BottomNavBar: React.FC<{ toggleCreatePostModal: () => void }> = ({
    toggleCreatePostModal,
}) => {
    return (
        <motion.nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-around h-16">
                    <Link href="/home">
                        <motion.div
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Home className="h-5 w-5 dark:text-slate-300" />
                        </motion.div>
                    </Link>
                    <motion.button
                        onClick={toggleCreatePostModal}
                        className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            duration: 0.5,
                        }}
                    >
                        <Plus className="h-5 w-5" />
                    </motion.button>
                    <Link href="/profile">
                        <motion.div
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <UserCircle className="h-5 w-5 dark:text-slate-300" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};
