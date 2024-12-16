'use-client';

import { useEffect, useState } from 'react';
import { Bell, Sun, Moon, Link } from 'lucide-react';
import { changeTheme } from '@/config/helpers';
import { NotificationDropdown } from '../Dropdowns/NotificationDropdown';
import { ProfileDropdown } from '../Dropdowns/ProfileDropdown';

/**
 * NavBar Component
 *
 * This component renders the top navigation bar for the application. It includes
 * branding, a responsive menu toggle button, and a dropdown notifications menu.
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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="/"
                        className="text-xl font-bold text-black dark:text-slate-300"
                    >
                        NextConnect
                    </a>
                    <div className="flex items-center space-x-4">
                        <button
                            id="themeToggle"
                            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5 dark:text-slate-300" />
                            ) : (
                                <Moon className="h-5 w-5 dark:text-slate-300" />
                            )}
                        </button>

                        {/* Notification Dropdown */}
                        <NotificationDropdown />

                        {/* Profile Dropdown */}
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
        </header>
    );
};
