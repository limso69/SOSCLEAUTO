import React from 'react';
import { Ghost, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-xl font-semibold mb-4">Nos réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-600"><Ghost size={24} /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><Instagram size={24} /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">Notre localisation</h3>
            <img 
              src="https://source.unsplash.com/random/800x600/?city" 
              alt="Notre localisation" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;