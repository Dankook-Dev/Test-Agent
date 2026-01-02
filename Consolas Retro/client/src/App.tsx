import React, { useEffect, useState } from 'react';
import { Console } from './types';
import { ShoppingCart, Gamepad2, Info, Tag } from 'lucide-react';

const App: React.FC = () => {
  const [consoles, setConsoles] = useState<Console[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/consoles');
        if (response.ok) {
          const data = await response.json();
          setConsoles(data);
        } else {
          // Seed data fallback
          setConsoles([
            {
              _id: '1',
              name: 'Super Nintendo (SNES)',
              brand: 'Nintendo',
              price: 150,
              description: 'La consola legendaria de 16 bits con dos controles originales.',
              imageUrl: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400',
              stock: 5,
              createdAt: new Date().toISOString()
            },
            {
              _id: '2',
              name: 'Sega Genesis',
              brand: 'Sega',
              price: 120,
              description: 'Blast processing y los mejores juegos de Sonic.',
              imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400',
              stock: 3,
              createdAt: new Date().toISOString()
            },
            {
              _id: '3',
              name: 'PlayStation 1',
              brand: 'Sony',
              price: 100,
              description: 'La revolución del 3D. Incluye Memory Card.',
              imageUrl: 'https://images.unsplash.com/photo-1526509429168-2e43f01f6b81?auto=format&fit=crop&q=80&w=400',
              stock: 8,
              createdAt: new Date().toISOString()
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching consoles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsoles();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-purple-500" size={32} />
            <span className="text-2xl font-black tracking-tighter italic">RETRO ZONE</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-purple-400 transition">Consolas</a>
            <a href="#" className="hover:text-purple-400 transition">Juegos</a>
            <a href="#" className="hover:text-purple-400 transition">Accesorios</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-1.5 rounded-full">0</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Revive la Época Dorada
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Las mejores consolas retro restauradas y listas para jugar. Calidad garantizada para coleccionistas.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
            Ver Catálogo
          </button>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent"></div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold">Consolas Disponibles</h2>
            <p className="text-slate-400">Stock limitado, ¡no te quedes sin la tuya!</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consoles.map((item) => (
              <div key={item._id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-purple-400 border border-purple-500/30">
                    {item.brand}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-black text-white">${item.price}</span>
                    <button className="bg-slate-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                      <ShoppingCart size={18} /> Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Gamepad2 className="text-purple-500" size={24} />
            <span className="text-xl font-black italic">RETRO ZONE</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; 2026 Retro Zone MVP. Todos los derechos reservados. <br />
            Hecho con el Stack MERN + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
