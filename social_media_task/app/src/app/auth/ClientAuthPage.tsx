'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, DoorOpen } from 'lucide-react';
import Link from 'next/link';

export default function ClientAuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleAuthMode = () => setIsSignUp(!isSignUp);

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex items-center justify-center px-4">
            {/* Main Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
                {/* Authentication Header */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 className="text-4xl md:text-5xl font-bold text-gray-900">
                        <DoorOpen className="inline-block w-10 h-10 mr-2 text-indigo-600" />
                        Authentication
                    </h4>
                    <AnimatePresence mode="wait">
                        {isSignUp ? (
                            <motion.p
                                key="signup-text"
                                className="mt-4 text-gray-600 text-sm md:text-base max-w-sm mx-auto md:mx-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                Create your account and join our vibrant
                                community today.
                            </motion.p>
                        ) : (
                            <motion.p
                                key="signin-text"
                                className="mt-4 text-gray-600 text-sm md:text-base max-w-sm mx-auto md:mx-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                Welcome back! Sign in to access your account.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Authentication Form */}
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
                        {isSignUp ? 'Create an Account' : 'Welcome Back'}
                    </h2>
                    <AnimatePresence mode="wait">
                        <motion.form
                            key={isSignUp ? 'signup' : 'signin'}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {isSignUp && (
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Bonnie Green"
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </motion.button>
                        </motion.form>
                    </AnimatePresence>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            {isSignUp
                                ? 'Already have an account?'
                                : "Don't have an account?"}
                            <button
                                onClick={toggleAuthMode}
                                className="ml-1 text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
