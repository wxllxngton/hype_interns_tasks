'use client';

import { useState } from 'react';
import { NavBar } from '@/components/NavBar/NavBar';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';
import { CreatePostModal } from '@/components/CreatePostModal/CreatePostModal';

export default function SettingsPage() {
    // Define the type for the index parameter
    type ToggleDropdown = (index: number) => void;

    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown: ToggleDropdown = (index) => {
        setOpenDropdown((prev) => (prev === index ? null : index));
    };

    const [showCreatePost, setShowCreatePost] = useState(false);

    // Toggles the visibility of the create post modal
    const toggleCreatePostModal = () => {
        setShowCreatePost((prev) => !prev);
    };

    // Data for settings
    interface SettingChild {
        id: number;
        title: string;
        description: string;
    }

    interface Setting {
        id: number;
        title: string;
        description: string;
        iconBg: string;
        iconPath: string;
        children: SettingChild[] | null;
    }

    // Updated settings data
    const settings: Setting[] = [
        {
            id: 1,
            title: 'Change Profile Picture',
            description: 'Update your profile image.',
            iconBg: 'bg-orange-50',
            iconPath:
                'M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z',
            children: null,
        },
        {
            id: 2,
            title: 'Privacy Settings',
            description: 'Manage your privacy preferences.',
            iconBg: 'bg-emerald-50',
            iconPath:
                'M25.3333 6.84527C25.3333 5.62971 24.3452 4.6322 23.1365 4.76127C21.1735 4.97089 19.2468 5.46081 17.416 6.21916C14.9059 7.25888 12.6251 8.78283 10.704 10.704C8.78283 12.6251 7.25888 14.9059 6.21916 17.416C5.46081 19.2468 4.97089 21.1735 4.76127 23.1365C4.6322 24.3452 5.62971 25.3333 6.84526 25.3333H23.1324C24.3479 25.3333 25.3333 24.3479 25.3333 23.1324L25.3333 6.84527Z',
            children: [
                {
                    id: 21,
                    title: 'Change Password',
                    description: 'Update your account password.',
                },
                {
                    id: 22,
                    title: 'Two-Factor Authentication',
                    description: 'Enable 2FA for added security.',
                },
            ],
        },
        {
            id: 3,
            title: 'Integrations',
            description: 'Seamlessly integrate with other services.',
            iconBg: 'bg-blue-50',
            iconPath:
                'M4.75 22.1667C4.75 26.5389 8.29441 30.0833 12.6667 30.0833H22.0227C22.9767 30.0833 23.75 29.31 23.75 28.3561V15.9773C23.75 15.0233 22.9767 14.25 22.0227 14.25H12.6667C8.29441 14.25 4.75 17.7944 4.75 22.1667Z',
            children: null,
        },
        {
            id: 4,
            title: 'Notification Settings',
            description: 'Customize how you receive notifications.',
            iconBg: 'bg-yellow-50',
            iconPath:
                'M19.5 13.25C19.5 9.5 16.25 6.25 12.5 6.25C8.75 6.25 5.5 9.5 5.5 13.25V16.5L4 18H21L19.5 16.5V13.25ZM12.5 24C13.3284 24 14 23.3284 14 22.5C14 21.6716 13.3284 21 12.5 21C11.6716 21 11 21.6716 11 22.5C11 23.3284 11.6716 24 12.5 24Z',
            children: [
                {
                    id: 41,
                    title: 'Email Notifications',
                    description: 'Enable or disable email alerts.',
                },
                {
                    id: 42,
                    title: 'Push Notifications',
                    description: 'Set up app notifications.',
                },
                {
                    id: 43,
                    title: 'SMS Notifications',
                    description: 'Receive updates via text messages.',
                },
            ],
        },
        {
            id: 5,
            title: 'Security Settings',
            description: 'Enhance your account security.',
            iconBg: 'bg-red-50',
            iconPath:
                'M20 2H4C2.89 2 2 2.9 2 4V20C2 21.1 2.89 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM11 20V18C11 16.9 11.9 16 13 16H17C18.1 16 19 16.9 19 18V20H11ZM12 12.5C13.1 12.5 14 13.4 14 14.5C14 15.6 13.1 16.5 12 16.5C10.9 16.5 10 15.6 10 14.5C10 13.4 10.9 12.5 12 12.5ZM6 10C6 8.9 6.9 8 8 8H16C17.1 8 18 8.9 18 10V12H6V10Z',
            children: [
                {
                    id: 51,
                    title: 'Login Alerts',
                    description: 'Get alerts for suspicious logins.',
                },
                {
                    id: 52,
                    title: 'App Permissions',
                    description: 'Control app access to your account.',
                },
            ],
        },
        {
            id: 6,
            title: 'Appearance and Accessibility',
            description: 'Personalize your interface and accessibility.',
            iconBg: 'bg-purple-50',
            iconPath:
                'M16 2C10.48 2 6 6.48 6 12C6 17.52 10.48 22 16 22C21.52 22 26 17.52 26 12C26 6.48 21.52 2 16 2ZM16 18C13.79 18 12 16.21 12 14C12 11.79 13.79 10 16 10C18.21 10 20 11.79 20 14C20 16.21 18.21 18 16 18Z',
            children: [
                {
                    id: 61,
                    title: 'Theme',
                    description: 'Switch between light and dark mode.',
                },
                {
                    id: 62,
                    title: 'Text Size',
                    description: 'Adjust text size for readability.',
                },
            ],
        },
        {
            id: 7,
            title: 'Account Management',
            description: 'Manage your account preferences and data.',
            iconBg: 'bg-green-50',
            iconPath:
                'M17 14H7C5.9 14 5 14.9 5 16V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V16C19 14.9 18.1 14 17 14ZM14 10C15.1 10 16 9.1 16 8C16 6.9 15.1 6 14 6C12.9 6 12 6.9 12 8C12 9.1 12.9 10 14 10ZM9 10C10.1 10 11 9.1 11 8C11 6.9 10.1 6 9 6C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10Z',
            children: null,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen text-gray-900 dark:text-gray-100">
            {/* Top Navigation */}
            <NavBar />

            {/* Main Content */}
            <main className="max-w-2xl mx-auto pt-20 pb-16 px-4 ">
                <div
                    id="settings-container"
                    className="dropdown-menu animate-fade z-10 relative rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800"
                >
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        {settings.map((setting, index) => (
                            <li key={setting.id} className="w-full">
                                {/* Parent Setting */}
                                <div
                                    onClick={() =>
                                        setting.children &&
                                        toggleDropdown(index)
                                    }
                                    className={`cursor-pointer px-3 py-4 transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl flex items-center ${
                                        setting.children
                                            ? 'justify-between'
                                            : ''
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <div
                                            className={`${setting.iconBg} rounded-lg w-12 h-12 flex items-center justify-center`}
                                        >
                                            <svg
                                                width="38"
                                                height="38"
                                                viewBox="0 0 38 38"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d={setting.iconPath}
                                                    fill="#3B82F6"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-gray-900 dark:text-gray-100 text-base font-semibold">
                                                {setting.title}
                                            </h5>
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                {setting.description}
                                            </p>
                                        </div>
                                    </div>
                                    {setting.children && (
                                        <div className="text-gray-500 dark:text-gray-400">
                                            {openDropdown === index ? '▲' : '▼'}
                                        </div>
                                    )}
                                </div>

                                {/* Child Settings */}
                                {setting.children && openDropdown === index && (
                                    <ul className="ml-8 space-y-2">
                                        {setting.children.map((child) => (
                                            <li
                                                key={child.id}
                                                className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                            >
                                                <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                    {child.title}
                                                </h6>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {child.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
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
