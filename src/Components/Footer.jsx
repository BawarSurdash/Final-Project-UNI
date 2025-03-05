import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import f1 from '../assets/imgs/8.jpg';
import f2 from '../assets/imgs/1-3.jpg';
import f3 from '../assets/imgs/2-1.jpg';
import f4 from '../assets/imgs/5-1.jpg';
import f5 from '../assets/imgs/6-1.jpg';
import f6 from '../assets/imgs/7-1.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Newsletter Signup Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg text-white font-semibold">Get the FREE Newsletter</h3>
            <p className="text-sm text-gray-400">Sign up to get the updates about new events</p>
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Your email address ..."
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full outline-none w-90"
            />
           <Link to="/"> <FaEnvelope className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-2 mb-4">About Events</h3>
            <p className="text-sm">
              The Events Specialists! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className="mt-4 px-4 py-2 text-gray-400 bg-gray-800 rounded opacity-50 cursor-not-allowed">Read More</button>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-2 mb-4">Keep In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-orange-500" /> 38-2 Hilton Street, California, USA</li>
              <li className="flex items-center"><FaPhoneAlt className="mr-2 text-orange-500" /> (+01) 123 456 7890</li>
              <li className="flex items-center"><FaEnvelope className="mr-2 text-orange-500" /> info@dvents.org</li>
              <li className="flex items-center"><FaClock className="mr-2 text-orange-500" /> Mon - Fri 9:00 am - 6:00 pm</li>
            </ul>
          </div>

          {/* Events Gallery */}
          <div>
            <h3 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-2 mb-4">Events Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src={f1} alt="f1" className="w-full h-16 object-cover" />
              <img src={f2} alt="f2" className="w-full h-16 object-cover" />
              <img src={f3} alt="f3" className="w-full h-16 object-cover" />
              <img src={f4} alt="f4" className="w-full h-16 object-cover" />
              <img src={f5} alt="f5" className="w-full h-16 object-cover" />
              <img src={f6} alt="f6" className="w-full h-16 object-cover" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-2 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-orange-500">Our Services</Link></li>
              <li><Link to="/events" className="hover:text-orange-500">About Events</Link></li>
              <li><Link to="/news" className="hover:text-orange-500">News Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Get In Touch</Link></li>
              <li><Link to="/team" className="hover:text-orange-500">Our Team</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 Events – The Events Specialists All Rights Reserved.</p>
            <div className="my-4 md:my-0">
              <Link to="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Use</Link> |
              <Link to="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGoogle className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
