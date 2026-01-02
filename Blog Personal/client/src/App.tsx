import React, { useEffect, useState } from 'react';
import { Post } from './types';
import { BookOpen, User, Calendar, Tag } from 'lucide-react';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // In a real scenario, this would be your API URL
        const response = await fetch('http://localhost:5000/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          // Fallback seed data if server is not running
          setPosts([
            {
              _id: '1',
              title: 'Mi Primer Post en el Blog',
              content: 'Este es el contenido de mi primer post. ¡Bienvenidos a mi portfolio personal!',
              author: 'Admin',
              tags: ['React', 'MERN'],
              createdAt: new Date().toISOString()
            },
            {
              _id: '2',
              title: 'Aprendiendo TypeScript',
              content: 'TypeScript es una herramienta poderosa para el desarrollo moderno...',
              author: 'Admin',
              tags: ['TypeScript', 'WebDev'],
              createdAt: new Date().toISOString()
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Mi Blog & Portfolio</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-600 transition">Inicio</a>
            <a href="#" className="hover:text-blue-600 transition">Proyectos</a>
            <a href="#" className="hover:text-blue-600 transition">Sobre Mí</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hola, soy un Desarrollador Full Stack</h2>
          <p className="text-xl opacity-90">Compartiendo mis conocimientos y proyectos con el mundo.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <BookOpen className="text-blue-600" /> Últimas Publicaciones
        </h3>

        {loading ? (
          <p className="text-center text-gray-500">Cargando posts...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post._id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>&copy; 2026 Mi Portfolio Personal. Construido con el Stack MERN.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
