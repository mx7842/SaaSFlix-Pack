import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-red-600 font-black text-3xl tracking-tighter uppercase" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.5)' }}>
                SAASFLIX
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                <a href="#hero" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Início</a>
                <a href="#catalog" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">Catálogo</a>
                <a href="#benefits" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">Benefícios</a>
                <a href="#pricing" className="text-gray-300 text-sm font-medium hover:text-white transition-colors">Planos</a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-white hidden sm:block cursor-pointer" />
            <Bell className="h-5 w-5 text-white hidden sm:block cursor-pointer" />
            <a href="#pricing" className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
              Assinar Agora
            </a>
            <div className="hidden md:flex items-center gap-1 cursor-pointer group">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                 <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-zinc-800 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Início</a>
            <a href="#catalog" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Catálogo</a>
            <a href="#pricing" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Planos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;