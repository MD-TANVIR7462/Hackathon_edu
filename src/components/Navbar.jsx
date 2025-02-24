import { Home, Info, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "About", path: "/about", icon: <Info className="h-5 w-5" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="h-5 w-5" /> },
  // { name: "Hello", path: "/hello", icon: <Mail className="h-5 w-5" /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">MyWebsite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, path, icon }, index) => (
              <Link
                key={index}
                to={path}
                className="relative text-gray-600 hover:text-indigo-600 flex items-center space-x-1 transition-all duration-300 group"
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-white shadow-md rounded-lg mx-4 mt-2"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map(({ name, path }, index) => (
            <Link
              key={index}
              to={path}
              className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
