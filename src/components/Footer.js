import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  // Links structured to be easily mapped into columns
  const footerLinks = [
    ['Audio Description', 'Investor Relations', 'Legal Notices'],
    ['Help Center', 'Jobs', 'Cookie Preferences'],
    ['Gift Cards', 'Terms of Use', 'Corporate Information'],
    ['Media Center', 'Privacy', 'Contact Us'],
  ];

  return (
    <footer className="bg-black py-16 px-4 md:px-10 border-t border-gray-900">
      <div className="max-w-5xl mx-auto text-gray-400">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          {socialIcons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="hover:text-white transition duration-200"
            >
              <item.icon size={24} />
            </a>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-sm">
          {footerLinks.flat().map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:underline hover:text-gray-300 transition duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Service Code and Language Selector */}
        <div className="mt-8 mb-6">
          <button className="flex items-center space-x-2 border border-gray-600 px-3 py-1 text-sm text-gray-400 hover:text-white hover:border-white transition duration-200">
            <Globe size={18} />
            <span>English</span>
          </button>
        </div>

        {/* Service Code / Location */}
        <div className="text-xs text-gray-500 mt-6">
          <p>
            Service Code
          </p>
          <p className="mt-4">
            &copy; 1997-2024 نتفلكس, Inc. 
            (i-002d99c43b0060000)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;