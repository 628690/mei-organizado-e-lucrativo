import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: "Eu não entendo nada de contabilidade, serve para mim?",
    a: "Sim! Este material foi feito exatamente para quem está começando ou não entende nada do assunto. Tudo é explicado de forma simples, direta e sem termos técnicos complicados."
  },
  {
    q: "Como recebo o acesso ao material?",
    a: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o eBook e a Planilha Livro Caixa."
  },
  {
    q: "A planilha funciona em celular?",
    a: "Sim, você pode abrir e editar pelo Google Sheets ou Excel mobile, mas para uma melhor experiência de organização, recomendamos o uso em computador ou tablet."
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que o material não é para você, basta pedir o reembolso e devolvemos 100% do seu dinheiro."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-indigo-600" /> Dúvidas Frequentes
          </h2>
          <p className="text-gray-500">Respondemos as principais perguntas para sua segurança.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-medium">Ainda tem alguma dúvida específica?</p>
          <a 
            href="https://wa.me/5511999999999" 
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100"
          >
            <MessageCircle className="w-6 h-6" /> Falar com Suporte no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
