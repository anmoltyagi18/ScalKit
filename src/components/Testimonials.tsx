import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useInView, animate } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: JSX.Element;
  rating: number;
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const testimonials: Testimonial[] = [
    {
      name: 'Rahul K',
      role: '',
      text: 'Navya and her entire team have been incredibly easy to work with. The results exceeded our expectations, and her design sense is truly commendable. I haven’t worked with a more cooperative, understanding, and skilled team. Highly recommend their services!',
      image: <FaUserCircle className="w-14 h-14 text-white" />,
      rating: 5,
    },
    {
      name: 'Dr. Andrea Herschorn',
      role: '',
      text: "ScalKit truly brought my vision to life with such care and creativity. They built a website that feels warm, elegant, and perfectly me. I felt heard every step of the way, and the end result couldn't have been more beautiful.",
      image: <FaUserCircle className="w-14 h-14 text-gray-300" />,
      rating: 5,
    },
    {
      name: 'Pranav',
      role: '',
      text: 'ScalKit has been an incredible partner to work with. They brought our vision to life with such thoughtfulness and precision. Their design sense, attention to detail, and commitment to excellence made the entire process a joy.',
      image: <FaUserCircle className="w-14 h-14 text-gray-400" />,
      rating: 5,
    },
    {
      name: 'Jugadveer Singh',
      role: '',
      text: 'Navya was a pleasure to work with. She quickly understood the vision and delivered clear, engaging scripts on time. Professional, creative, and easy to collaborate with.',
      image: <FaUserCircle className="w-14 h-14 text-gray-500" />,
      rating: 5,
    },
  ];

  // --------------------------
  // Animated Stats
  // --------------------------
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const [brands, setBrands] = useState(0);
  const [projects, setProjects] = useState(0);
  const [retention, setRetention] = useState(0);

  useEffect(() => {
    if (statsInView) {
      const controls = [
        animate(0, 85, {
          duration: 3,
          onUpdate: (v) => setBrands(Math.floor(v)),
        }),
        animate(0, 215, {
          duration: 2.7,
          onUpdate: (v) => setProjects(Math.floor(v)),
        }),
        animate(0, 88, {
          duration: 3.2,
          onUpdate: (v) => setRetention(Math.floor(v)),
        }),
      ];
      return () => controls.forEach((control) => control.stop());
    }
  }, [statsInView]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section
        ref={sectionRef}
        className="py-20 relative min-h-screen flex flex-col justify-center"
      >
        {/* ======= HEADER ======= */}
        <div className="text-center mb-16 md:mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 md:mb-6">
            <span className="text-sm font-medium text-white tracking-widest">TESTIMONIALS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-white mb-10 md:mb-8">
            Trusted by{' '}
            <span className="italic font-['Instrument_Serif']">teams</span> around the world.
          </h2><br />

          {/* ======= Animated Stats ======= */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-8 md:mb-4"
          >
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-emphasis text-white mb-2">
                {brands}+
              </div>
              <p className="text-gray-300 text-base md:text-lg font-light">
                Brands scaled with us
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-emphasis text-white mb-2">
                {projects}+
              </div>
              <p className="text-gray-300 text-base md:text-lg font-light">
                Projects successfully delivered
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-emphasis text-white mb-2">
                {retention}%
              </div>
              <p className="text-gray-300 text-base md:text-lg font-light">
                Client retention rate
              </p>
            </div>
          </div>
        </div>

        {/* ===========================================================
            DESKTOP TESTIMONIALS — MARQUEE ANIMATION
        ============================================================ */}
        <div className="relative hidden md:flex overflow-hidden py-10">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 90,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
             <div
  key={index}
  className="min-w-[450px] h-[380px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
>
  <div>
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-xl flex-shrink-0">
        {testimonial.image}
      </div>

      <div className="flex gap-0.5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-white text-base">★</span>
        ))}
      </div>
    </div>

    <p className="text-gray-200 text-md leading-relaxed mb-8">
      {testimonial.text}
    </p>
  </div>

  <div className="pt-6 border-t border-white/10">
    <p className="text-white font-semibold italic text-md">
      {testimonial.name}
    </p>
    {testimonial.role && (
      <p className="text-gray-400 text-xs italic">{testimonial.role}</p>
    )}
  </div>
</div>

            ))}
          </motion.div>
        </div>

        {/* ======= MOBILE TESTIMONIALS ======= */}
        <div className="flex flex-col gap-6 md:hidden mt-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl flex-shrink-0">
                  {testimonial.image}
                </div>

                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-white text-sm">★</span>
                  ))}
                </div>
              </div>

              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold italic text-sm">
                  {testimonial.name}
                </p>
                {testimonial.role && (
                  <p className="text-gray-400 text-xs italic">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
