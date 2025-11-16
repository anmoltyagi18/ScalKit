import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, TrendingUp, ShoppingBag, Briefcase } from 'lucide-react';

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Cards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [isStatic, setIsStatic] = useState(false); // MOBILE + TABLET = STATIC 2x2 GRID

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Detect screen width & container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }

      // BELOW 1024PX → STATIC GRID (no animation)
      setIsStatic(window.innerWidth < 1024);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const cards: Card[] = [
    {
      icon: <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Startups & Emerging Brands',
      description:
        'Turning early ideas into powerful digital identities that grow fast and look sharp from day one.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Established Businesses',
      description:
        'Elevating growing companies with next-level digital presence, design, and marketing.',
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'E-commerce & D2C Brands',
      description:
        'Building experiences that attract customers, drive conversions, and strengthen long-term brand presence.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-white" strokeWidth={1.5} />,
      title: 'Founders & CxOs',
      description:
        'Shaping personal brands, refining online presence, and amplifying influence through strategic social media.',
    },
  ];

  // Spread distance for desktop animation
  const spread = containerWidth * 0.25;

  // Desktop animation transforms. Static layout gets 0 always.
  const card1X = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    isStatic ? [0, 0, 0] : [spread * 2, 0, 0]
  );
  const card2X = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    isStatic ? [0, 0, 0] : [spread, 0, 0]
  );
  const card3X = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    isStatic ? [0, 0, 0] : [-spread, 0, 0]
  );
  const card4X = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    isStatic ? [0, 0, 0] : [-spread * 2, 0, 0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    isStatic ? [0, 0, 0] : [60, 0, 0]
  );

  const cardTransforms = [card1X, card2X, card3X, card4X];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section
        ref={sectionRef}
        id="about"
        className="scroll-mt-28 py-20 relative min-h-screen flex flex-col justify-center bg-black overflow-hidden"
      >
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white">WHO WE HELP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-white max-w-4xl mx-auto break-words whitespace-normal">
            Empowering bold{' '}
            <span className="italic font-['Instrument_Serif']">ideas</span>
            <br />
            across industries.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              // Disable transforms on tablet + mobile
              style={isStatic ? {} : { x: cardTransforms[index], y: cardY }}
              className={`relative h-full z-[${10 - index}]`}
            >
              <div
                className="
                  rounded-3xl 
                  p-6 sm:p-8 md:p-10 
                  h-[340px] sm:h-[380px] md:h-[440px] 
                  flex flex-col justify-center
                  bg-white/5 backdrop-blur-md border border-white/10 
                  shadow-[0_4px_40px_rgba(255,255,255,0.05)]
                  hover:bg-white/10 hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
                  transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
                  group
                "
              >
                <div className="mb-8">{card.icon}</div>
                <h3 className="text-3xl font-light mb-5 leading-snug text-white">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
