import React from 'react';
import { HardHat } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-secondary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HardHat className="text-primary" size={32} />
          <span className="text-xl font-bold tracking-tight">PAVIMENTA-PRO</span>
        </div>
        <div className="hidden md:flex gap-6 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
