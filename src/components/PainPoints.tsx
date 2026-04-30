import { motion } from 'motion/react';
import { AlertCircle, XCircle, TrendingDown, ShieldAlert, Wallet } from 'lucide-react';

const pains = [
  { icon: TrendingDown, text: "Não sabe quanto realmente ganha no mês" },
  { icon: Wallet, text: "Mistura dinheiro pessoal com o do negócio" },
  { icon: ShieldAlert, text: "Tem medo de fazer algo errado e pagar multa" },
  { icon: AlertCircle, text: "Não entende direito o DAS e suas obrigações" },
  { icon: XCircle, text: "Trabalha muito… mas o dinheiro não sobra" },
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Se você é MEI, provavelmente já passou por isso:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-red-50 p-3 rounded-xl">
                <pain.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-lg text-gray-700 font-medium pt-2">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-red-50 rounded-2xl border border-red-100 max-w-2xl">
            <p className="text-xl text-red-800 font-semibold mb-2">👉 O problema não é falta de esforço.</p>
            <p className="text-2xl text-red-900 font-bold">É falta de organização.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
