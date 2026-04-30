import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold tracking-wide mb-6">
              EXCLUSIVO PARA MICROEMPREENDEDORES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
              Organize seu MEI, <span className="text-indigo-600">pare de perder dinheiro</span> e evite impostos atrasados
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              Um guia simples para você controlar seu dinheiro, cumprir obrigações e ter mais lucro — <strong>mesmo sem entender nada de contabilidade.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-5 rounded-2xl text-lg font-black hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
              QUERO ORGANIZAR MEU MEI AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500 font-bold uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" /> Método Prático
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" /> Planilha Inclusa
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" /> Acesso Vitalício
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="bg-indigo-50 p-4 sm:p-8 rounded-[3rem] border-2 border-dashed border-indigo-200">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white aspect-[16/9] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="bg-indigo-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-200">
                   <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Assista ao Vídeo de Apresentação</h3>
                <p className="text-gray-500">Descubra em 2 minutos como organizar seu MEI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
