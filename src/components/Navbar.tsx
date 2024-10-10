import React, { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="Logo" className="h-8 w-8 mr-2" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-600 rounded-full px-3 py-1 flex items-center">
            <Phone size={16} className="mr-2" />
            <span>01 23 45 67 89</span>
          </div>
          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <Menu size={24} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a href="#accueil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accueil</a>
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Services</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;