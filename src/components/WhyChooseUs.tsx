import { CheckCircle2, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Point {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function WhyChooseUs() {
  const whyChooseUs: Point[] = [
    {
      icon: <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Expert Team with End-to-End Capabilities',
      description: 'A team of experienced professionals across design, content, development, and strategy, all working together to help your brand grow faster, smarter, and convert better.',
    },
    {
      icon: <Zap className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Fast, Transparent & Collaborative',
      description: 'Clear pricing, direct communication, and quick turnarounds. We work like a true partner, keeping you involved from idea to execution.',
    },
    {
      icon: <Award className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Results that Speak for Themselves',
      description: 'Every project is built around your goals, backed by data, and refined until it delivers measurable growth and real impact.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section id="why-us" className="scroll-mt-28 py-20 relative min-h-screen flex flex-col justify-center">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white tracking-widest">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
            We don't just work for your brand,<br />
            we <span className="italic font-['Instrument_Serif']">grow</span> it with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {whyChooseUs.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <motion.div
                className="mb-8"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 5, -5, 0],
                  scale: [1, 1.1, 0.95, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
              >
                {point.icon}
              </motion.div>
              <h3 className="text-3xl font-medium text-white mb-4 leading-tight">{point.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
