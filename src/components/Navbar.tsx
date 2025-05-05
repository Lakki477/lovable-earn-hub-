
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navLinks = [
    { name: 'Bachat Shopping', href: '#bachat-shopping' },
    { name: 'Refer & Earn', href: '#refer-earn' },
    { name: 'Freelancing', href: '#freelancing' },
    { name: 'eBooks', href: '#ebooks' },
    { name: 'Paid Apps', href: '#paid-apps' },
    { name: 'Courses', href: '#courses' },
    { name: 'Earning Apps', href: '#earning-apps' },
    { name: 'No-Investment', href: '#no-investment' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">LOVABLE</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-lovable-light-gray hover:text-lovable-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={toggleSearch}
            variant="ghost" 
            className="px-3 py-2 text-sm"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="gradient"
            className="bg-gradient-to-r from-lovable-pink to-lovable-light-pink hover:opacity-90 text-white ml-2"
          >
            Join Telegram
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center lg:hidden">
          <Button 
            onClick={toggleSearch}
            variant="ghost" 
            className="px-2"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            onClick={toggleMenu}
            variant="ghost" 
            className="px-2 ml-1"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Search Bar - Shown when search is clicked */}
      {isSearchOpen && (
        <div className="container mx-auto px-4 py-3 border-t">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for earning opportunities..."
              className="w-full border rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-lovable-pink"
            />
            <button className="absolute right-3 top-2.5">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu - Shown when menu is clicked */}
      {isMenuOpen && (
        <div className="lg:hidden container mx-auto px-4 py-2 border-t">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-lovable-light-gray hover:text-lovable-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="gradient"
              className="bg-gradient-to-r from-lovable-pink to-lovable-light-pink hover:opacity-90 text-white mt-2"
              onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
            >
              Join Telegram
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
