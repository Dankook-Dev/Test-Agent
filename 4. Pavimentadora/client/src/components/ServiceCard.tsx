import React from 'react';
import { Service } from '../types';
import { Truck } from 'lucide-react';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
      <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2 flex items-center gap-1">
            <Truck size={16} /> Maquinaria Utilizada
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.machinery.map((item, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
          <span className="text-primary font-bold">{service.priceEstimate}</span>
          <button className="text-secondary font-semibold hover:underline">Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
