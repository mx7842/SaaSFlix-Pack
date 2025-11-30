import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full h-[85vh] sm:h-[95vh] text-white">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for a cool tech/dashboard collage background */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-12 lg:px-16 pt-16">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#E50914] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm">
              Série Original
            </span>
            <span className="text-gray-300 text-sm font-semibold tracking-wide uppercase">
              Temporada 1 • 60+ Episódios
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 drop-shadow-2xl leading-none">
            PACK DE SAAS <br />
            <span className="text-red-600">UNLIMITED</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 font-medium drop-shadow-md max-w-lg leading-relaxed">
            Não assista ao sucesso dos outros. Crie o seu. Adquira códigos-fonte completos de 60 SaaS prontos para vender e fature 100% do lucro.
          </p>

          <div className="flex flex-row gap-4">
            <a 
              href="#pricing"
              className="flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-black px-8 py-3 rounded text-lg font-bold transition-all hover:scale-105"
            >
              <Play className="w-6 h-6 fill-black" />
              Comprar Pack
            </a>
            <a 
              href="#benefits"
              className="flex items-center justify-center gap-3 bg-gray-500/40 hover:bg-gray-500/50 text-white px-8 py-3 rounded text-lg font-bold backdrop-blur-sm transition-all hover:scale-105"
            >
              <Info className="w-6 h-6" />
              Mais Info
            </a>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400 font-medium">
            <span className="border border-gray-500 px-2 py-0.5 text-xs text-gray-300">TV-MA</span>
            <span>Código Fonte Incluso</span>
            <span>•</span>
            <span>Sem Royalties</span>
            <span>•</span>
            <span>White Label</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;