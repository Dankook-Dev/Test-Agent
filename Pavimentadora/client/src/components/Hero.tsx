import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pavimentación Profesional con Maquinaria Pesada</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">Soluciones duraderas para carreteras, estacionamientos y proyectos industriales.</p>
        <button className="bg-primary text-secondary px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-500 transition-colors">
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
};

export default Hero;
