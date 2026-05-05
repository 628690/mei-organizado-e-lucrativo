import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

export default function Offer() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">INVESTIMENTO</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um erro no seu MEI pode custar muito mais do que isso. Por menos do que você gasta em um almoço, você pode evitar prejuízos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {/* Option 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ebook + Livro Caixa</h3>
            <div className="mb-8">
              <span className="text-4xl font-black tracking-tight">R$ 37,00</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Guia MEI Organizado e Lucrativo
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Planilha Livro Caixa Pronta
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              QUERO ESTA OPÇÃO
            </button>
          </motion.div>

          {/* Option 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-900 p-8 md:p-12 rounded-[2.5rem] text-white flex flex-col relative ring-4 ring-indigo-500/30"
          >
            <div className="absolute top-6 right-6 px-3 py-1 bg-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest">Mais Completo</div>
            <h3 className="text-2xl font-bold mb-4">Pack Completo + Bônus</h3>
            <div className="mb-8">
              <span className="text-4xl font-black tracking-tight text-white">R$ 49,90</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                Tudo da opção anterior
              </li>
              <li className="flex items-center gap-3 text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                Planilha de custo de funcionário
              </li>
              <li className="flex items-center gap-3 text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                Modelos de contratos e recibos
              </li>
              <li className="flex items-center gap-3 text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                Documentos editáveis para o dia a dia
              </li>
            </ul>
            <button className="w-full bg-white text-indigo-900 py-5 rounded-xl text-lg font-black hover:bg-indigo-50 transition-all shadow-xl">
              QUERO O PACK COMPLETO
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100">
            <h3 className="text-xl font-bold text-green-900 mb-6 uppercase tracking-widest">BÔNUS EXCLUSIVOS</h3>
            <div className="space-y-4">
              {[
                "Planilha de controle financeiro",
                "Planilha de custo de funcionário",
                "Modelos de contratos",
                "Recibos prontos",
                "Documentos editáveis"
              ].map((bonus, i) => (
                <div key={i} className="flex items-center gap-3 text-green-800 font-medium">
                  <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  {bonus}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100 flex items-center justify-center text-center">
            <div>
              <ShieldCheck className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">GARANTIA</h3>
              <p className="text-gray-700 leading-relaxed italic">
                Se por qualquer motivo você achar que esse material não é pra você, você pode simplesmente não aplicar. O risco de continuar como está é muito maior.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 font-medium">
          <div className="bg-white p-8 rounded-3xl border border-gray-100">
            <h4 className="text-indigo-600 mb-4 uppercase tracking-widest text-sm font-black">PRA QUEM É</h4>
            <ul className="space-y-3 text-gray-700">
              <li>- Para quem fatura mas não vê o dinheiro</li>
              <li>- Para quem quer parar de se sentir perdido</li>
              <li>- Para quem tem medo de errar com o governo</li>
              <li>- Para quem quer crescer com organização</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100">
            <h4 className="text-red-500 mb-4 uppercase tracking-widest text-sm font-black">PRA QUEM NÃO É</h4>
            <ul className="space-y-3 text-gray-700">
              <li>- Quem não quer mudar nada</li>
              <li>- Quem não aplica o que aprende</li>
            </ul>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">FINALMENTE NO CONTROLE</h2>
          <p className="text-xl text-gray-600 mb-10">
            Você tem duas escolhas agora: continuar como está, sem saber pra onde seu dinheiro vai… ou começar hoje a organizar seu MEI, evitar erros e ter controle de verdade.
          </p>
          <button className="bg-indigo-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-tight">
            QUERO ORGANIZAR MEU MEI AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
