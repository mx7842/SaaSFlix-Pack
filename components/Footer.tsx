import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] py-16 border-t border-zinc-800 text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-red-700 font-bold text-2xl tracking-tighter uppercase">SAASFLIX</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
            <li><a href="#" className="hover:underline">Relação com Investidores</a></li>
            <li><a href="#" className="hover:underline">Formas de Assistir</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Centro de Ajuda</a></li>
            <li><a href="#" className="hover:underline">Carreiras</a></li>
            <li><a href="#" className="hover:underline">Termos de Uso</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Conta</a></li>
            <li><a href="#" className="hover:underline">Resgatar Cartão</a></li>
            <li><a href="#" className="hover:underline">Privacidade</a></li>
          </ul>
           <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Comprar Pack</a></li>
            <li><a href="#" className="hover:underline">Entre em Contato</a></li>
          </ul>
        </div>
        
        <div className="mt-8">
          <p>© 2024 SaaSFlix Inc. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Produto destinado a desenvolvedores e empreendedores. Não garantimos lucro sem trabalho.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;