import React from 'react';

const ServiceSection: React.FC<{ imageSrc: string; title: string; description: string; imageLeft?: boolean }> = ({ imageSrc, title, description, imageLeft }) => {
  return (
    <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}>
      <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${imageLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover rounded-lg" />
      </div>
      <div className={`w-full md:w-1/2 ${imageLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <ServiceSection
          imageSrc="https://source.unsplash.com/random/800x600/?service"
          title="Service 1"
          description="Description détaillée du service 1. Nous offrons une solution complète pour répondre à vos besoins."
        />
        <ServiceSection
          imageSrc="https://source.unsplash.com/random/800x600/?business"
          title="Service 2"
          description="Description détaillée du service 2. Notre expertise vous garantit des résultats exceptionnels."
          imageLeft
        />
        <ServiceSection
          imageSrc="https://source.unsplash.com/random/800x600/?professional"
          title="Service 3"
          description="Description détaillée du service 3. Découvrez comment nous pouvons vous aider à atteindre vos objectifs."
        />
      </div>
    </section>
  );
};

export default Services;