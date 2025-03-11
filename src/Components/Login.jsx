import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

const AuthPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isSignIn) {
            // Sign In Logic
            if (!nickname.trim() || !password.trim()) {
                setError('Please fill in all fields');
                return;
            }
            
            // Check against stored users
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.nickname === nickname.trim() && u.password === password.trim());
            
            if (!user) {
                setError('Invalid credentials');
                return;
            }

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userNickname', user.nickname);
            window.location.href = '/';

        } else {
            // Sign Up Logic
            if (!nickname.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
                setError('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(u => u.nickname === nickname.trim())) {
                setError('Username already exists');
                return;
            }

            // Save new user
            const newUser = {
                nickname: nickname.trim(),
                email: email.trim(),
                password: password.trim()
            };

            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userNickname', newUser.nickname);
            window.location.href = '/';
        }
    };

    return (
        <div className="pt-16 min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-gray-50">
            <Navbar />
            
            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-orange-100">
                    <div className="text-center space-y-2">
                        <div className="mx-auto h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            {isSignIn ? 'Welcome Back!' : 'Join Us Today'}
                        </h2>
                        <p className="text-gray-500">
                            {isSignIn ? 'Sign in to manage your events' : 'Create an account to get started'}
                        </p>
                    </div>
                    
                    {error && (
                        <div className="bg-red-50 p-3 rounded-lg flex items-center space-x-2 animate-fade-in">
                            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-red-600 text-sm">{error}</span>
                        </div>
                    )}
                    
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nickname
                                </label>
                                <div className="relative">
                                    <input
                                        id="nickname"
                                        name="nickname"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                        placeholder="Enter your nickname"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                    />
                                </div>
                            </div>

                            {!isSignIn && (
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                            placeholder="hello@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {!isSignIn && (
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                                            placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isSignIn ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                    )}
                                </svg>
                                <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    {isSignIn ? 'Or continue with' : 'Already have an account?'}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <button
                                type="button"
                                onClick={() => setIsSignIn(!isSignIn)}
                                className="w-full py-2.5 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 text-gray-700 font-medium flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 4a4 4 0 110 8 4 4 0 010-8zm0 14.5a9.5 9.5 0 01-9.5-9.5 9.5 9.5 0 019.5-9.5 9.5 9.5 0 019.5 9.5 9.5 9.5 0 01-9.5 9.5zM12 7a1 1 0 100 2 1 1 0 000-2zm0 10.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"/>
                                </svg>
                                <span>{isSignIn ? 'Create New Account' : 'Sign In Instead'}</span>
                            </button>
                            
                          
                        </div>
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default AuthPage; 