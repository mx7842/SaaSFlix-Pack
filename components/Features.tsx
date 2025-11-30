import React from 'react';
import { DollarSign, Unlock, Code2, Users } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: "100% do Lucro é Seu",
    description: "Esqueça comissões. Ao comprar o pack, você vende pelo preço que quiser e fica com todo o dinheiro. É o seu negócio.",
    icon: DollarSign,
  },
  {
    title: "Sem Mensalidades",
    description: "Você paga uma única vez pelo pack e tem acesso vitalício aos códigos. Sem taxas ocultas ou renovações.",
    icon: Unlock,
  },
  {
    title: "Mercado Aquecido",
    description: "Empresas precisam de software. Venda CRMs, ERPs e ferramentas de marketing para negócios locais e fature alto.",
    icon: Users,
  },
  {
    title: "Código Aberto & Limpo",
    description: "Receba o código fonte completo (React, Node, PHP, Laravel dependendo do item) pronto para customizar ou traduzir.",
    icon: Code2,
  },
];

const Benefits: React.FC = () => {
  return (
    <div id="benefits" className="bg-[#141414] py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por que investir no Pack?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            A maneira mais rápida de começar sua software house sem precisar desenvolver nada do zero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-red-900 transition-colors group">
              <div className="w-12 h-12 rounded bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <benefit.icon className="h-6 w-6 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-zinc-900 p-8 rounded-xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex-1">
             <h3 className="text-2xl font-bold text-white mb-2">Bônus Exclusivo: Guia de Vendas</h3>
             <p className="text-gray-400">Comprando hoje o Pack Premium, você leva um PDF com scripts de vendas e lista de nichos para atacar.</p>
           </div>
           <div className="shrink-0">
             <span className="inline-block bg-white text-black font-bold px-6 py-3 rounded uppercase tracking-wide text-sm">
               Incluso Grátis
             </span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;