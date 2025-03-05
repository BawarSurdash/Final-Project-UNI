import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png'; // Add this import at the top

const Navbar = () => {
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

                    {/* Navigation Links */}
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
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;