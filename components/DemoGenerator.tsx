import React from 'react';
import { CatalogRow, SaasMovie } from '../types';
import { ChevronRight } from 'lucide-react';

const saasCatalog: CatalogRow[] = [
  {
    title: "Em Alta no Brasil",
    items: [
      { title: "ZapBot Pro", match: "98% Relevância", category: "Automação", imageColor: "bg-green-800" },
      { title: "CRM Imobiliário", match: "99% Relevância", category: "Gestão", imageColor: "bg-blue-800" },
      { title: "Agendador Insta", match: "95% Relevância", category: "Marketing", imageColor: "bg-pink-800" },
      { title: "ERP Simples", match: "92% Relevância", category: "Finanças", imageColor: "bg-amber-800" },
      { title: "Delivery App", match: "97% Relevância", category: "Food", imageColor: "bg-red-800" },
      { title: "E-mail Sender", match: "89% Relevância", category: "Marketing", imageColor: "bg-indigo-800" },
    ]
  },
  {
    title: "Novos Lançamentos (Micro-SaaS)",
    items: [
      { title: "Link Bio Builder", match: "Novo", category: "Social", imageColor: "bg-purple-900" },
      { title: "Gerador de QR", match: "Novo", category: "Ferramenta", imageColor: "bg-gray-800" },
      { title: "PDF Editor", match: "Novo", category: "Produtividade", imageColor: "bg-red-900" },
      { title: "Feedback Widget", match: "Novo", category: "Dev Tools", imageColor: "bg-cyan-900" },
      { title: "Image Compressor", match: "Novo", category: "Ferramenta", imageColor: "bg-emerald-900" },
    ]
  },
  {
    title: "Ferramentas de IA (Bônus)",
    items: [
      { title: "ChatPDF Clone", match: "Top 10", category: "IA", imageColor: "bg-violet-900" },
      { title: "Avatar Generator", match: "Top 10", category: "IA", imageColor: "bg-fuchsia-900" },
      { title: "Copy Writer AI", match: "Top 10", category: "IA", imageColor: "bg-blue-900" },
      { title: "Logo Maker AI", match: "Top 10", category: "IA", imageColor: "bg-orange-900" },
    ]
  }
];

const CatalogPreview: React.FC = () => {
  return (
    <div id="catalog" className="bg-[#141414] pb-16 pl-4 sm:pl-12 lg:pl-16 overflow-hidden relative z-20 -mt-24">
      {saasCatalog.map((row, index) => (
        <div key={index} className="mb-8 sm:mb-12 group">
          <h3 className="text-gray-100 font-semibold text-lg sm:text-xl mb-3 flex items-center gap-2 group-hover:text-white transition-colors cursor-pointer">
            {row.title}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold flex items-center text-cyan-400">
              Ver tudo <ChevronRight className="w-3 h-3" />
            </span>
          </h3>
          
          <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-4 no-scrollbar scroll-smooth">
            {row.items.map((movie, mIndex) => (
              <div 
                key={mIndex} 
                className="flex-none w-48 sm:w-64 aspect-video rounded md:rounded-md overflow-hidden relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-50 hover:shadow-xl hover:shadow-black"
              >
                {/* Thumbnail Mockup */}
                <div className={`w-full h-full ${movie.imageColor} flex items-center justify-center`}>
                  <div className="text-center px-4">
                     <span className="font-bold text-white/90 text-lg drop-shadow-md">{movie.title}</span>
                  </div>
                </div>
                
                {/* Hover Info (Simplified style) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[10px] font-bold text-green-400 mb-1">{movie.match}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white bg-gray-600/50 px-1 rounded border border-gray-500">HD</span>
                    <span className="text-[10px] text-gray-300">{movie.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="w-full h-20 bg-gradient-to-b from-[#141414] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default CatalogPreview;