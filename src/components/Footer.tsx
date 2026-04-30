import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 tracking-tighter">
          MEI ORGANIZADO E LUCRATIVO
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-indigo-300 font-medium tracking-wide uppercase text-xs">
            <ShieldCheck className="w-4 h-4" /> Pagamento Seguro por Hotmart
          </div>
          <div className="text-gray-400 text-sm max-w-2xl px-4">
            Este produto é comercializado com o apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, tão pouco avalia a tecnicidade e experiência de quem os faz.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-500 font-medium mb-12">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>

        <div className="pt-8 border-t border-gray-800 text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
          © 2024 Márcia Reges - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
