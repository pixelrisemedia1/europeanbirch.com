import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'About Us', page: 'AboutUs' },
  { name: 'Plywood', page: 'Plywood' },
  { name: 'Partners', page: 'Partners' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Atom orbits */}
                <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#C9A962" strokeWidth="2" transform="rotate(-30 50 50)" />
                <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#C9A962" strokeWidth="2" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#C9A962" strokeWidth="2" transform="rotate(90 50 50)" />
                {/* Globe center */}
                <circle cx="50" cy="50" r="15" fill="#1a1a1a" />
                <ellipse cx="50" cy="50" rx="15" ry="8" fill="none" stroke="white" strokeWidth="1" />
                <line x1="50" y1="35" x2="50" y2="65" stroke="white" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 tracking-wide">RPL</span>
              <span className="text-sm text-gray-600 tracking-widest">International</span>
            </div>
          </Link>

          {/* Phone */}
          <a href="tel:+18008456001" className="flex items-center gap-2 text-gray-900">
            <Phone className="w-5 h-5" />
            <span className="text-xl md:text-2xl font-semibold">(800) 845-6001</span>
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#1a1a1a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <ul className="flex flex-wrap justify-center">
            {navItems.map((item) => (
              <li key={item.page}>
                <Link
                  to={createPageUrl(item.page)}
                  className={`block px-4 md:px-6 py-4 text-sm tracking-wide transition-colors
                    ${currentPageName === item.page 
                      ? 'bg-[#C9A962] text-white' 
                      : 'text-gray-300 hover:bg-[#C9A962] hover:text-white'
                    }`}
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-4">RPL International</h3>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className="text-gray-300 hover:text-[#C9A962] transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="text-gray-400 text-sm mb-2">
            1851 Whitney Mesa Drive, Henderson, NV 89014
          </p>
          <p className="text-gray-400 text-sm">
            Phone: <a href="tel:+18008456001" className="hover:text-[#C9A962]">(800) 845-6001</a>
          </p>
          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} RPL International
          </p>
        </div>
      </footer>
    </div>
  );
}