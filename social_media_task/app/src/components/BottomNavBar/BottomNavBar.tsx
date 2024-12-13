import { Home, Plus, Settings } from 'lucide-react';

/**
 * BottomNavBar Component
 *
 * This component renders the bottom navigation bar for the application. It includes
 * the Home, Add Post, and Settings buttons.
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
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-around h-16">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Home className="h-5 w-5 dark:text-slate-300" />
                    </button>
                    <button
                        onClick={toggleCreatePostModal}
                        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Settings className="h-5 w-5 dark:text-slate-300" />
                    </button>
                </div>
            </div>
        </nav>
    );
};
