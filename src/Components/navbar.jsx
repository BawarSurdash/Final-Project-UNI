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
                            <img src={logo} alt="Logo" className="h-25 w-32 object-contain" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            Home
                        </Link>
                        <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            Services
                        </Link>
                        <Link to="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            Events
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            About
                        </Link>
                        <Link to="/news" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            News
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;