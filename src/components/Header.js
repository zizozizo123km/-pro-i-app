import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const navigationLinks = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'TV Shows', href: '#tv-shows', isActive: false },
    { name: 'Movies', href: '#movies', isActive: false },
    { name: 'New & Popular', href: '#new-popular', isActive: false },
    { name: 'My List', href: '#my-list', isActive: false },
];

/**
 * Modern Netflix-style Header component.
 * Fixed to the top and uses subtle gradient background for aesthetic depth.
 */
const Header = () => {
    // Note: In a real app, 'isScrolled' state and useEffect would be used 
    // to dynamically change the 'bg-gradient-to-b' to 'bg-black'.

    return (
        <header className="fixed top-0 z-50 w-full text-white transition duration-300 ease-in-out bg-gradient-to-b from-black/90 to-transparent md:px-8">
            <div className="flex items-center justify-between h-16 px-4 md:px-0">
                
                {/* Left Side: Logo and Primary Navigation */}
                <div className="flex items-center space-x-8">
                    
                    {/* Logo: نتفلكس (Netflix Arabic) */}
                    <a href="/" className="text-3xl font-bold text-red-600">
                        نتفلكس
                    </a>

                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden text-sm lg:flex space-x-6">
                        {navigationLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                className={`
                                    font-medium 
                                    transition duration-200 
                                    ${link.isActive 
                                        ? 'text-white' 
                                        : 'text-gray-300 hover:text-gray-50'}
                                `}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Navigation Dropdown */}
                    <div className="flex items-center text-sm font-medium cursor-pointer lg:hidden hover:text-gray-300">
                        Browse
                        <ChevronDown className="w-4 h-4 ml-1 transition duration-200" />
                    </div>
                </div>

                {/* Right Side: Secondary Actions and Profile */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    
                    {/* Search Icon */}
                    <button 
                        aria-label="Search" 
                        className="text-white hover:text-gray-300 transition duration-200"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                    
                    {/* Notifications */}
                    <button 
                        aria-label="Notifications" 
                        className="hidden text-white sm:block hover:text-gray-300 transition duration-200"
                    >
                        <Bell className="w-6 h-6" />
                    </button>

                    {/* Profile Avatar and Dropdown */}
                    <div className="relative flex items-center cursor-pointer group">
                        <img 
                            // Placeholder image. In a real application, this would be dynamic.
                            src="https://picsum.photos/40/40" 
                            alt="User Profile" 
                            className="object-cover w-8 h-8 rounded-md" 
                        />
                        <ChevronDown 
                            className="w-4 h-4 ml-1 transition duration-200 transform text-gray-400 group-hover:text-white lg:group-hover:rotate-180 hidden lg:block" 
                        />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;