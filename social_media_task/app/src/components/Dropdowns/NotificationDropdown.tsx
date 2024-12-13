import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';

export const NotificationDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <Bell className="h-5 w-5 dark:text-slate-300" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                    <ul>
                        {/* Notification Items */}
                        {notifications.map((notification, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                                <a
                                    href="#"
                                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <div className="flex-shrink-0 relative">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src={notification.image}
                                            alt={`${notification.name} profile`}
                                        />
                                        <div
                                            className={`absolute flex items-center justify-center w-5 h-5 ${notification.statusColor} border border-white rounded-full dark:border-gray-800`}
                                        >
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                {notification.iconPath}
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full pl-3">
                                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                            {notification.message}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-500">
                                            {notification.time}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Sample notification data
const notifications = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s',
        name: 'Jese Leos',
        statusColor: 'bg-blue-600',
        iconPath: (
            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
        ),
        message: `New message from Jese Leos: "Hey, what's up? All set for the presentation?"`,
        time: 'a few moments ago',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&s',
        name: 'Joseph Mcfall',
        statusColor: 'bg-gray-900',
        iconPath: (
            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        ),
        message: `Joseph Mcfall and 5 others started following you.`,
        time: '10 minutes ago',
    },
    // Add more notifications as needed
];
