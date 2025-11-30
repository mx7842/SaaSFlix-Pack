import React from 'react';
import { Check, X } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    id: "basic",
    name: "Pack Standard",
    price: "49,97",
    originalPrice: "97,00",
    description: "Ideal para começar a revender hoje.",
    features: [
      "30 SaaS Diversos",
      "Código Fonte Incluso",
      "Acesso Vitalício",
      "Direito de Revenda",
      "Bônus de Marketing",
    ],
    isPremium: false
  },
  {
    id: "premium",
    name: "Pack Premium 4K",
    price: "79,90",
    originalPrice: "197,00",
    description: "O catálogo completo para dominar o mercado.",
    features: [
      "60 SaaS (Catálogo Completo)",
      "Código Fonte Incluso",
      "Acesso Vitalício",
      "Direito de Revenda",
      "Bônus de Marketing",
      "Guia de Instalação",
      "Scripts de Venda",
      "Atualizações Futuras"
    ],
    isPremium: true
  }
];

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-[#141414] py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Escolha o seu plano</h2>
          <p className="text-gray-400 text-lg">Cancele o "trabalho duro" a qualquer momento.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                tier.isPremium 
                  ? 'bg-gradient-to-b from-red-900/20 to-zinc-900 border border-red-600 scale-105 shadow-2xl shadow-red-900/20 z-10' 
                  : 'bg-zinc-900 border border-zinc-700 opacity-90 hover:opacity-100'
              }`}
            >
              {tier.isPremium && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-lg">
                  Melhor Oferta
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                   <span className="text-zinc-500 line-through text-sm">R$ {tier.originalPrice}</span>
                   <span className="text-4xl font-black text-white">R$ {tier.price}</span>
                </div>
                <p className="text-zinc-400 text-sm mt-2">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${tier.isPremium ? 'text-red-500' : 'text-gray-500'}`} />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
                {!tier.isPremium && (
                   <div className="flex items-center gap-3 opacity-50">
                     <X className="w-5 h-5 text-gray-600" />
                     <span className="text-gray-600 text-sm font-medium">Bônus Exclusivos</span>
                   </div>
                )}
              </div>

              <button className={`w-full py-4 rounded font-bold text-lg transition-all ${
                tier.isPremium
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg'
                  : 'bg-white hover:bg-gray-200 text-black'
              }`}>
                QUERO ESTE PACK
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-zinc-500 text-sm">
               Pagamento único. Acesso imediato via download. Garantia de satisfação de 7 dias.
             </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;