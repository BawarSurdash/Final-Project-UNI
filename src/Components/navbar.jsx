import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.png'; // Add this import at the top

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userNickname, setUserNickname] = useState('');
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    // Check if user is logged in on component mount
    useEffect(() => {
        const checkLoginStatus = () => {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const nickname = localStorage.getItem('userNickname') || '';
            setIsLoggedIn(loggedIn);
            setUserNickname(nickname);
        };

        // Check initially
        checkLoginStatus();
        
        // Add event listener for storage changes
        window.addEventListener('storage', checkLoginStatus);
        
        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            // Toggle logout dropdown
            setShowLogout(!showLogout);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserNickname('');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userNickname');
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-25 w-32 object-contain hover:opacity-80 transition-opacity duration-300" />
                        </Link>
                    </div>

                    {/* Burger Menu Button (visible on mobile) */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                ) : (
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/services" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/events" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Events
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/about" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/news" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            News
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/contact" className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        
                        {/* Profile Section */}
                        <div className="relative">
                            <button 
                                onClick={handleProfileClick}
                                className="relative !text-orange-500 hover:!text-orange-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                            >
                                {isLoggedIn ? (
                                    <>
                                        <span className="flex items-center">
                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                            {userNickname}
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                                    </>
                                ) : (
                                    <>
                                        <span className="flex items-center">
                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                            Profile
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                                    </>
                                )}
                            </button>
                            
                            {/* Logout dropdown */}
                            {isLoggedIn && showLogout && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                                    <button 
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm !text-orange-500 hover:!text-orange-600 hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Mobile Menu (slides down when open) */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="flex flex-col items-center space-y-2 pb-3">
                        <Link 
                            to="/" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/services" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link 
                            to="/events" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Events
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            to="/news" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            News
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        
                        {/* Mobile Profile Section */}
                        {isLoggedIn ? (
                            <>
                                <div 
                                    className="flex items-center justify-center text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    {userNickname}
                                </div>
                                <button 
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full transition-colors duration-300"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link 
                                to="/login" 
                                className="flex items-center justify-center text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium text-center w-full"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Profile / Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;