import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  icon: string;
  title: string;
  description: string;
  number: string;
  gradient: string;
  image: string;
}

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: '💻',
      title: 'Web & App Development',
      description:
        'We build fast, reliable, and user-friendly websites and apps that make your brand look great and perform even better.',
      number: '01',
      gradient: 'from-blue-600 via-cyan-500 to-blue-400',
      image: '/1.png',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'We design clean, intuitive interfaces that make every interaction feel effortless and memorable.',
      number: '02',
      gradient: 'from-green-600 via-emerald-500 to-teal-400',
      image: '/2.png',
    },
    {
      icon: '🖼️',
      title: 'Graphic Design',
      description:
        "From social posts to pitch decks, we create designs that look stunning and speak your brand's language.",
      number: '03',
      gradient: 'from-orange-600 via-yellow-500 to-amber-400',
      image: '/3.png',
    },
    {
      icon: '✍️',
      title: 'Content Writing',
      description:
        'We write content that connects. Clear, engaging, and built to make people stop scrolling.',
      number: '04',
      gradient: 'from-red-600 via-rose-500 to-pink-400',
      image: '/4.png',
    },
    {
      icon: '📣',
      title: 'Branding & Marketing',
      description:
        'We help you define who you are, how you sound, and how you show up online and everywhere else.',
      number: '05',
      gradient: 'from-cyan-600 via-blue-500 to-teal-400',
      image: '/5.png',
    },
    {
      icon: '🎥',
      title: 'Video Production',
      description:
        'We craft videos that feel authentic, look stunning, and tell your story with impact.',
      number: '06',
      gradient: 'from-violet-600 via-fuchsia-500 to-pink-400',
      image: '/6.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section
        id="services"
        className="py-20 relative min-h-screen flex flex-col justify-center"
      >
        {/* Header */}
        <div className="text-center mb-20 px-4">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight max-w-4xl mx-auto break-words whitespace-normal text-white">
            From idea to <span className="italic font-['Instrument_Serif']">execution,</span>
            <br />
            we've got you covered.
          </h2>
        </div>

        {/* Services List */}
        <div className="relative flex flex-col gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-6 md:px-8 py-6 rounded-2xl transition-all duration-300 cursor-pointer group ${
                hoveredService === index
                  ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 md:gap-12'
                  : 'hover:bg-white/5'
              }`}
            >
              {/* Text & Number */}
              <div className="flex items-center gap-4 md:gap-8 flex-1 w-full z-10">
                <span className="text-gray-500 text-lg font-light min-w-[2.5rem] md:min-w-[3rem]">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed flex-1 hidden md:block z-10 max-w-2xl">
                {service.description}
              </p>
              <p className="text-gray-400 text-base leading-relaxed mt-2 md:hidden z-10">
                {service.description}
              </p>

              {/* Hover Overlay Image (Desktop Only) */}
              <AnimatePresence>
                {hoveredService === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none hidden md:flex"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/20">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-100"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
