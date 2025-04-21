import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Burger button clicked, toggling menu');
    setIsOpen((prev) => !prev);
  };

  // Log state changes
  useEffect(() => {
    console.log('isOpen state:', isOpen);
  }, [isOpen]);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest('.mobile-menu') &&
        !target.closest('.menu-button')
      ) {
        console.log('Closing menu due to outside click');
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center relative">
          <a href="#hero" className="flex items-center gap-2 text-2xl font-bold text-purple-500 z-50">
            <Gamepad2 className="h-8 w-8" />
            <span>
              Nexus<span className="text-cyan-400">Gaming</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-purple-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="md:hidden text-gray-300 hover:text-purple-500 transition-colors duration-300 z-[70] menu-button"
            aria-label="Toggle menu"
            style={{ position: 'relative', zIndex: 70 }}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>

        {/* Mobile Navigation - Updated for Sidebar Behavior */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 shadow-xl md:hidden transition-transform duration-300 ease-in-out z-[60] ${ // Changed: inset-0 -> top-0 right-0 h-full w-4/5 max-w-sm; bg-gray-900/95 backdrop-blur-lg -> bg-gray-900 shadow-xl; transition-all -> transition-transform
            isOpen ? 'translate-x-0' : 'translate-x-full' // Changed: opacity/translate logic adjusted for transform only
          }`}
          // Removed pointer-events classes, visibility is handled by transform
        >
          {/* Adjusted inner container layout */}
          <div className="flex flex-col items-center justify-start pt-24 space-y-8 p-4 h-full"> {/* Changed: min-h-screen -> h-full; justify-center -> justify-start pt-24 */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl text-gray-300 hover:text-purple-500 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;