import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import { Service } from './types';

const App: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // En un entorno real, esto apuntaría a http://localhost:5000/api/services
        // Para el MVP, si no hay backend corriendo, usamos datos semilla
        const response = await fetch('http://localhost:5000/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          throw new Error('Backend not reachable');
        }
      } catch (error) {
        console.log('Usando datos semilla (Backend no detectado)');
        setServices([
          {
            title: "Pavimentación Asfáltica",
            description: "Aplicación de mezcla asfáltica en caliente para calles y avenidas de alto tráfico.",
            machinery: ["Finisher", "Rodillo Tandem", "Camiones Tolva"],
            priceEstimate: "Desde $25/m2",
            imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Bacheo y Reparación",
            description: "Reparación focalizada de grietas y baches para extender la vida útil del pavimento.",
            machinery: ["Cortadora de Pavimento", "Compactador Manual"],
            priceEstimate: "Desde $15/m2",
            imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Movimiento de Tierras",
            description: "Nivelación y preparación de terreno base para proyectos de construcción civil.",
            machinery: ["Motoniveladora", "Excavadora", "Bulldozer"],
            priceEstimate: "Cotización personalizada",
            imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-grow container mx-auto px-4 py-12" id="servicios">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">Nuestros Servicios</h2>
          <p className="text-gray-600">Equipamiento de última generación para resultados impecables.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-secondary text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PAVIMENTA-PRO. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Expertos en infraestructura vial y maquinaria pesada.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
