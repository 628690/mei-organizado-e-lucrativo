import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, CreditCard, Users, Zap } from 'lucide-react';

const lessons = [
  { icon: ShieldCheck, title: "Clareza financeira", desc: "Clareza financeira total, sem achismo, sabendo exatamente para onde vai seu dinheiro." },
  { icon: TrendingUp, title: "Segurança com impostos", desc: "Segurança total com impostos e obrigações, evitando multas e problemas com o governo." },
  { icon: Zap, title: "Mais controle", desc: "Mais controle e menos estresse no dia a dia do seu negócio." },
  { icon: Target, title: "Decisões inteligentes", desc: "Tome decisões mais inteligentes e embasadas para o crescimento do seu MEI." },
];

export default function WhatYouLearn() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">RESULTADOS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            O QUE VOCÊ VAI CONSEGUIR
          </h2>
          <p className="text-xl text-gray-600">
            Você deixa de “tentar controlar” e passa a ter controle de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <lesson.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{lesson.title}</h3>
              <p className="text-gray-600 leading-relaxed">{lesson.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl">
           <div className="max-w-4xl mx-auto">
             <h3 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">O QUE TEM DENTRO</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Controle financeiro simplificado",
                  "Obrigações do MEI explicadas sem linguagem difícil",
                  "Como evitar multas e problemas",
                  "Rotina prática de organização",
                  "Estratégias para crescer com segurança"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0 font-medium text-gray-800">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    {item}
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
