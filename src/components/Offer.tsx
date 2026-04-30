import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck, Star } from 'lucide-react';

export default function Offer() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-sm border border-white/10">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Oferta Especial de Lançamento
                </div>
                
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Tudo que você precisa para <br />
                  <span className="text-indigo-300 font-serif italic text-3xl md:text-5xl">viver tranquilo com seu MEI</span>
                </h2>
                
                <div className="flex flex-col items-center justify-center mb-12">
                  <span className="text-indigo-200 line-through text-2xl mb-2">De R$ 97</span>
                  <div className="flex items-start gap-1">
                    <span className="text-3xl font-bold mt-2">R$</span>
                    <span className="text-8xl font-black tracking-tighter">37</span>
                  </div>
                  <span className="text-indigo-200 font-medium">Pagamento Único. Acesso Vitalício.</span>
                </div>

                <div className="space-y-4 mb-12 max-w-sm mx-auto text-left bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-4">Você recebe agora:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-bold">📘 eBook Completo MEI Lucrativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-bold">📊 Planilha Livro Caixa Pronta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-bold">🔒 Garantia de 7 dias ou seu dinheiro de volta</span>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-white text-indigo-900 px-12 py-6 rounded-2xl text-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl mb-8 group">
                  <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  QUERO ORGANIZAR MEU MEI AGORA
                </button>

                <div className="flex items-center justify-center gap-6 opacity-60">
                  <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png" alt="Visa" className="h-6 object-contain invert brightness-0" />
                  <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="MasterCard" className="h-6 object-contain invert brightness-0" />
                  <img src="https://logodownload.org/wp-content/uploads/2015/03/pix-logo-1.png" alt="PIX" className="h-6 object-contain invert brightness-0" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-indigo-50 rounded-3xl border border-indigo-100 italic">
            <p className="text-indigo-900 font-medium text-lg leading-relaxed">
              🎁 <strong>BÔNUS EXTRA:</strong> E você ainda pode adicionar o <strong>Kit Profissional</strong> com planilhas e modelos prontos diretamente no checkout!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
