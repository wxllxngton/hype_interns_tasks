'use client';

import { useEffect, useState } from 'react';
import { Bell, Sun, Moon, Link } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { changeTheme } from '@/config/helpers';
import { NotificationDropdown } from '../Dropdowns/NotificationDropdown';
import { ProfileDropdown } from '../Dropdowns/ProfileDropdown';

/**
 * NavBar Component
 *
 * This component renders the top navigation bar for the application. It includes
 * branding, a theme toggle button, notifications menu, and a profile dropdown.
 *
 * @returns {JSX.Element} The NavBar component.
 */
export const NavBar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'light' ? false : true
    );

    useEffect(() => {
        changeTheme(darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <motion.a
                        href="/"
                        className="text-2xl font-bold text-indigo-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        NextConnect
                    </motion.a>
                    <div className="flex items-center space-x-4">
                        <motion.button
                            id="themeToggle"
                            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={darkMode ? 'dark' : 'light'}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {darkMode ? (
                                        <Sun className="h-5 w-5 dark:text-slate-300" />
                                    ) : (
                                        <Moon className="h-5 w-5 dark:text-slate-300" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Notification Dropdown */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <NotificationDropdown />
                        </motion.div>

                        {/* Profile Dropdown */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ProfileDropdown />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};
