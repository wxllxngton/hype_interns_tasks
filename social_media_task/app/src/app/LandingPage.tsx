'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle, Zap, DoorOpen, User } from 'lucide-react';
import Link from 'next/link';

const featureData = [
    {
        icon: Users,
        title: 'Build Meaningful Connections',
        description:
            'Connect with like-minded individuals and grow your network.',
    },
    {
        icon: MessageCircle,
        title: 'Engage in Rich Conversations',
        description:
            'Share ideas, discuss topics, and learn from others in our vibrant community.',
    },
    {
        icon: Zap,
        title: 'Boost Your Online Presence',
        description:
            'Enhance your personal brand and reach a wider audience with our powerful tools.',
    },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white text-gray-900">
            {/* Header */}
            <header className="sticky top-0 container mx-auto px-4 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md z-50 shadow-md">
                <h1 className="text-2xl font-bold text-indigo-600">
                    NextConnect
                </h1>
                <div className="flex flex-row justify-between">
                    <Link
                        href="/auth"
                        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors px-4 py-2"
                    >
                        <DoorOpen className="w-5 h-5 mr-2" />
                        <span className="hidden sm:inline">Login</span>
                    </Link>
                    <Link
                        href="/profile"
                        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors px-4 py-2"
                    >
                        <User className="w-5 h-5 mr-2" />
                        <span className="hidden sm:inline">Profile</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main>
                <section className="container mx-auto px-4 py-20 text-center">
                    <motion.h2
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Connect, Share, Thrive
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Join the next generation social platform that puts you
                        in control.
                    </motion.p>
                    <motion.div
                        className="flex justify-center space-x-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href="/auth"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section id="features" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            Why Choose NextConnect?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {featureData.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <feature.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                                    <h4 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h4>
                                    <p>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        © {new Date().getFullYear()} NextConnect. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
