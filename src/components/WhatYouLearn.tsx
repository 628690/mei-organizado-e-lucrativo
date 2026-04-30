import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, CreditCard, Users, Zap } from 'lucide-react';

const lessons = [
  { icon: Target, title: "Organização Prática", desc: "Como organizar seu dinheiro na prática, separando pessoal do profissional." },
  { icon: TrendingUp, title: "Cálculo de Lucro", desc: "Como saber se você realmente tem lucro ou se está pagando para trabalhar." },
  { icon: ShieldCheck, title: "Livre de Multas", desc: "Como evitar multas e erros comuns que a maioria dos MEIs comete." },
  { icon: CreditCard, title: "Guia do DAS", desc: "Como pagar o DAS corretamente e manter sua empresa em dia." },
  { icon: Zap, title: "Crescimento Seguro", desc: "Como crescer com segurança e planejamento para o futuro." },
  { icon: Users, title: "Primeiro Funcionário", desc: "Como contratar sem dor de cabeça e cumprir as regras trabalhistas." },
];

export default function WhatYouLearn() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">🔥 Conteúdo do Guia</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            O que você vai aprender na prática:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
