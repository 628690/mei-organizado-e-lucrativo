import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              MEI ORGANIZADO
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('features')} className="text-gray-600 hover:text-indigo-600 transition-colors font-bold uppercase text-xs tracking-widest">Conteúdo</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-600 hover:text-indigo-600 transition-colors font-bold uppercase text-xs tracking-widest">Investimento</button>
            <button onClick={() => scrollTo('pricing')} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 group shadow-lg shadow-indigo-100">
              Comprar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl"
        >
          <button onClick={() => scrollTo('features')} className="w-full text-left block text-gray-600 font-bold uppercase text-xs tracking-widest pt-4">Conteúdo</button>
          <button onClick={() => scrollTo('pricing')} className="w-full text-left block text-gray-600 font-bold uppercase text-xs tracking-widest py-4 border-b border-gray-50">Investimento</button>
          <button onClick={() => scrollTo('pricing')} className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-indigo-100">
            Comprar Agora
          </button>
        </motion.div>
      )}
    </nav>
  );
}
