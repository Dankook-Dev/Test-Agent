import React, { useEffect, useState } from 'react';
import { Product } from './types';
import { ShoppingBag, Leaf, Sparkles, Heart, Info } from 'lucide-react';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // Seed data fallback
          setProducts([
            {
              _id: '1',
              name: 'Sérum Facial de Vitamina C',
              category: 'Cuidado Facial',
              price: 25.99,
              description: 'Ilumina y revitaliza tu piel con extractos naturales de cítricos y ácido hialurónico botánico.',
              imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
              ingredients: ['Vitamina C', 'Aloe Vera', 'Aceite de Jojoba'],
              stock: 15,
              createdAt: new Date().toISOString()
            },
            {
              _id: '2',
              name: 'Crema Hidratante de Lavanda',
              category: 'Cuidado Corporal',
              price: 18.50,
              description: 'Calma tu piel y tus sentidos con nuestra crema artesanal de lavanda orgánica.',
              imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400',
              ingredients: ['Lavanda', 'Manteca de Karité', 'Aceite de Coco'],
              stock: 20,
              createdAt: new Date().toISOString()
            },
            {
              _id: '3',
              name: 'Mascarilla de Arcilla Verde',
              category: 'Tratamientos',
              price: 12.00,
              description: 'Desintoxica profundamente los poros con arcilla mineral pura y extracto de té verde.',
              imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400',
              ingredients: ['Arcilla Verde', 'Té Verde', 'Menta'],
              stock: 10,
              createdAt: new Date().toISOString()
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-nature-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-nature-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-nature-600" size={28} />
            <span className="text-2xl font-serif font-bold text-nature-800 tracking-tight">Esencia Natural</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-nature-700">
            <a href="#" className="hover:text-nature-500 transition">Tienda</a>
            <a href="#" className="hover:text-nature-500 transition">Ingredientes</a>
            <a href="#" className="hover:text-nature-500 transition">Nosotros</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-nature-700 hover:text-nature-500 transition">
              <Heart size={24} />
            </button>
            <button className="bg-nature-600 hover:bg-nature-700 text-white p-2 rounded-full transition relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-nature-400 text-[10px] font-bold px-1.5 rounded-full">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 bg-nature-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-nature-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Sparkles size={16} /> Belleza Consciente
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-nature-900 mb-6 leading-tight">
              Tu piel merece lo mejor de la <span className="text-nature-600 italic">naturaleza</span>.
            </h1>
            <p className="text-lg text-nature-800/80 mb-10 leading-relaxed">
              Descubre nuestra colección de cosmética orgánica, libre de químicos y respetuosa con el medio ambiente. Hecha a mano con amor.
            </p>
            <button className="bg-nature-800 hover:bg-nature-900 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-nature-200">
              Explorar Colección
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-nature-300 to-transparent"></div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-nature-900 mb-4">Nuestros Favoritos</h2>
          <div className="w-20 h-1 bg-nature-400 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 bg-nature-200 rounded-full mb-4"></div>
              <div className="text-nature-400 font-medium">Cargando tesoros naturales...</div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-nature-100">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-nature-700 uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-2 text-nature-900">{product.name}</h3>
                  <p className="text-nature-700/70 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.ingredients.slice(0, 2).map(ing => (
                      <span key={ing} className="bg-nature-50 text-nature-600 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter">
                        {ing}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-nature-50">
                    <span className="text-2xl font-bold text-nature-800">${product.price.toFixed(2)}</span>
                    <button className="bg-nature-100 hover:bg-nature-800 text-nature-800 hover:text-white p-3 rounded-2xl transition-colors duration-300">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-nature-900 text-nature-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-nature-400" size={24} />
              <span className="text-xl font-serif font-bold tracking-tight">Esencia Natural</span>
            </div>
            <p className="text-nature-300/70 text-sm leading-relaxed">
              Comprometidos con la belleza ética y sostenible. Ingredientes 100% naturales para el cuidado de tu piel.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-nature-300/70">
              <li><a href="#" className="hover:text-nature-400 transition">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-nature-400 transition">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-nature-400 transition">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-nature-300/70 mb-4">Recibe consejos de belleza y ofertas exclusivas.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Tu email" className="bg-nature-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-nature-400" />
              <button className="bg-nature-400 text-nature-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-nature-300 transition">Unirse</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-nature-800 text-center text-xs text-nature-500">
          &copy; 2026 Esencia Natural MVP. Hecho con el Stack MERN.
        </div>
      </footer>
    </div>
  );
};

export default App;
