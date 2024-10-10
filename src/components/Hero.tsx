import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="accueil" className="relative h-screen">
      <img
        src="https://source.unsplash.com/random/1600x900/?business"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur notre site</h1>
        <p className="text-xl md:text-2xl mb-8">Découvrez nos services exceptionnels</p>
        <a href="#contact" className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">
          Obtenir un devis
        </a>
      </div>
    </div>
  );
};

export default Hero;