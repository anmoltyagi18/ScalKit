import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'What industries do you specialize in?',
      answer: 'Our team works across diverse industries such as tech, wellness, healthcare, education, real estate, finance, entertainment, and retail. Each project is led by specialists who understand your space inside out.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 2-6 weeks, depending on the scope and feedback cycles. We keep timelines clear from day one so you always know what to expect.',
    },
    {
      question: 'What if I just need one service?',
      answer: 'That works perfectly. We can integrate seamlessly with your team and handle exactly what you need, whether it\'s design, content, or development, without any extra layers or long-term commitments.',
    },
    {
      question: 'How does your pricing work, and do you offer ongoing support?',
      answer: 'Our pricing is transparent and tailored to your specific needs. Each project begins with a clear quote based on its scope, whether it\'s a website, brand identity, or design and content work. We don\'t include maintenance charges by default; these are discussed with you upfront, based on the level of post-launch support you need. For brands that want continued assistance, we offer flexible monthly retainers for maintenance, updates, optimization, and creative support while you stay focused on growth.',
    },
    {
      question: 'Why wouldn\'t I just hire a full-time team for this?',
      answer: 'Hiring in-house often means higher costs, especially for expert-level designers, developers, and strategists. Plus, you might not always have enough work to keep everyone engaged, leaving you paying for downtime. With ScalKit, you get top-tier expertise, only when you need it.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="py-20 relative min-h-screen flex flex-col justify-center">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white tracking-widest">FAQs</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Got questions? Here's <span className="italic font-['Instrument_Serif']">everything</span><br />
            you might want to know.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-light pr-8">{faq.question}</h3>
                <Plus
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
