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
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">💡 Apresentação</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              MEI Organizado e <span className="text-indigo-600">Lucrativo</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Foi pensando nos desafios do microempreendedor que eu criei este método. 
              Um guia simples e direto para te ajudar a organizar seu negócio e finalmente ter controle total do seu dinheiro.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Linguagem simples, sem contalês</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Focado em resultados práticos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Método testado e aprovado</span>
              </div>
            </div>

            <button className="mt-12 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              Quero conhecer o método
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="bg-white w-full h-full rounded-[22px] flex flex-col items-center justify-center p-12 text-center">
                <BookOpen className="w-24 h-24 text-indigo-600 mb-6" />
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">EBOOK COMPLETO</h3>
                <p className="text-gray-500 font-medium">+ PLANILHA LIVRO CAIXA</p>
                <div className="mt-8 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm">
                  MATERIAL PRÁTICO & ATUALIZADO
                </div>
              </div>
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
