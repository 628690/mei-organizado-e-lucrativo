import { motion } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function ProductPresentation() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">A SOLUÇÃO</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              MEI ORGANIZADO E <span className="text-indigo-600">LUCRATIVO</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Um guia direto ao ponto para você organizar seu financeiro de verdade, saber exatamente quanto ganha no mês e ter controle total do seu negócio.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Organizar seu financeiro de verdade</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Saber exatamente quanto ganha no mês</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Evitar erros que fazem você perder dinheiro</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Cumprir suas obrigações sem confusão</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Ter controle total do seu negócio</span>
              </div>
            </div>

            <button className="mt-12 bg-indigo-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 uppercase tracking-tight">
              Quero organizar meu mei agora
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="input_file_0.png" 
                alt="MEI Organizado e Lucrativo Ebook" 
                className="relative rounded-[2rem] shadow-2xl w-full h-auto transform transition duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
