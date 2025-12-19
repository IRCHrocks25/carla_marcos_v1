import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/30fe6310c908eb33183748fe726ce54b6ccb4f93.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-2 md:py-3 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Carla Marcos Hypnotherapy - Finding your unique balance" 
              className="h-3 md:h-5 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">Carla</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">My Services</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">My Mission</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">FAQs</a>
            <Button className="bg-purple-600 hover:bg-purple-700 font-semibold">Contact</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Carla
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Services
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Mission
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 font-semibold w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}