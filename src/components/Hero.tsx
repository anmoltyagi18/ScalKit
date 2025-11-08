import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scrollYProgress to a linear Y transform
  const videoYLinear = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // Apply spring for smooth easing
  const videoY = useSpring(videoYLinear, {
    stiffness: 20,   // Lower = slower response, more easing
    damping: 30,     // Higher = less bounce
    mass: 1,
  });

  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <div className="relative w-full" id="home" ref={sectionRef}>
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden px-4">
        {/* Hero Text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-snug mb-8 max-w-6xl mx-auto break-words whitespace-normal">
          A Complete <span className="italic font-['Instrument_Serif']">System</span> for
          Brands Ready to Scale.
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-12 max-w-5xl mx-auto">
          Using our extensive knowledge of design, technology, and strategy,
          <br />
          we build brands that grow without limits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/book-a-call"
            className="bg-[#6214d9] hover:bg-[#6214d9]/90 text-white px-8 py-4 rounded-full text-lg transition-colors"
          >
            Book a Call
          </Link>
          <a
            href="#services"
            className="text-white hover:text-gray-300 px-8 py-4 text-lg transition-colors border border-gray-300/40 rounded-full"
          >
            View Services
          </a>
        </div>

        {/* Desktop Video */}
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 z-10 will-change-transform hidden md:block"
        >
          <video
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Scalkit Text */}
          <motion.div
            style={{ opacity: logoOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-['Instrument_Serif'] tracking-tight">
              <span className="text-white font-['Instrument_Serif']">
                S<span className="italic font-['Instrument_Serif']">c</span>al
              </span>
              <span className="text-gray-300/70 font-['Instrument_Serif']">
                Kit
              </span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/0 pointer-events-none z-20 hidden md:block"
        />
      </section>

      {/* Mobile Video */}
      <div className="relative block md:hidden w-full h-[40vh] overflow-hidden">
        <video
          src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-['Instrument_Serif'] tracking-tight">
            <span className="text-white font-['Instrument_Serif']">
              S<span className="italic font-['Instrument_Serif']">c</span>al
            </span>
            <span className="text-gray-300/70 font-['Instrument_Serif']">
              Kit
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
