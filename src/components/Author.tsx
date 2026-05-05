import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Author() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-indigo-100 overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/marcia-reges.jpg" 
                  alt="Márcia Reges" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-indigo-50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-200">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-xl leading-tight">Especialista</p>
                    <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase">DP & MEI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">SOBRE</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Márcia Reges</h2>
            
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p className="text-indigo-600 font-black text-2xl uppercase tracking-tighter">Consultoria Empresarial</p>
              <p>
                Especialista em Departamento Pessoal, ajudando empreendedores a organizarem seus negócios com clareza, segurança e praticidade.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-gray-900 font-semibold">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-indigo-600" /> Consultoria Empresarial
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-indigo-600" /> Especialista em DP
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
