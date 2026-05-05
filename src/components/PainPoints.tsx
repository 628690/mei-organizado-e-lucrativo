import { motion } from 'motion/react';
import { AlertCircle, XCircle, TrendingDown, ShieldAlert, Wallet } from 'lucide-react';

const pains = [
  { icon: Wallet, text: "Mistura dinheiro pessoal com o do negócio" },
  { icon: TrendingDown, text: "Não sabe quanto realmente lucra no mês" },
  { icon: ShieldAlert, text: "Tem medo de errar com impostos" },
  { icon: AlertCircle, text: "Vive apagando incêndios financeiros" },
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            SE IDENTIFICOU?
          </h2>
          <p className="text-xl text-gray-600">Se você é MEI, provavelmente já passou por isso:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
            >
              <div className="bg-indigo-50 p-3 rounded-xl">
                <pain.icon className="w-6 h-6 text-indigo-500" />
              </div>
              <p className="text-lg text-gray-700 font-medium">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 mb-8">E o pior: acha que está tudo sob controle… até o problema aparecer.</p>
          
          <div className="bg-red-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 tracking-widest uppercase opacity-80">A VERDADE QUE NINGUÉM TE CONTA</h3>
            <p className="text-2xl sm:text-3xl font-black mb-8 leading-tight">
              Ser MEI não é só emitir nota e pagar o DAS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                Prejuízos silenciosos
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                Desorganização financeira
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                Multas e dores de cabeça
              </div>
            </div>
            <p className="text-xl text-indigo-100">
              E o problema não é falta de esforço… é falta de orientação simples e prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
