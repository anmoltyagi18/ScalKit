import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Search, Map, PenTool, CheckCircle, BarChart3 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function HowWeWork() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const steps: Step[] = [
    {
      number: "01",
      title: "Onboarding & Discovery",
      description:
        "A 30-60 minute call to understand your goals, audience, and challenges. We ask focused questions and gather all brand assets to align with your vision early on.",
      icon: (
        <Rocket className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
    {
      number: "02",
      title: "Research & Competitive Audit",
      description:
        "We dedicate 9-12 hours studying your market, analyzing competitors, reviewing your digital presence, and identifying opportunities to help your brand stand out.",
      icon: (
        <Search className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
    {
      number: "03",
      title: "Strategy & Roadmap Development",
      description:
        "Based on insights, we create a strategy combining design, technology, and marketing, outlining what we'll do, how we'll do it, and when it’ll go live.",
      icon: (
        <Map className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
    {
      number: "04",
      title: "Content Creation & Delivery",
      description:
        "We execute the plan by designing, developing, or creating content. Every deliverable reflects your brand voice and growth goals with consistent quality throughout.",
      icon: (
        <PenTool className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
    {
      number: "05",
      title: "Feedback & Approvals",
      description:
        "A collaborative review process ensures every deliverable meets your expectations before going live.",
      icon: (
        <CheckCircle className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
    {
      number: "06",
      title: "Performance Tracking & Optimization",
      description:
        "We monitor performance, gather insights, and continuously optimize, while meeting with your team regularly to plan ahead.",
      icon: (
        <BarChart3 className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      ),
    },
  ];

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="py-20 relative min-h-screen flex flex-col justify-center">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white tracking-widest">HOW WE WORK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight text-white">
            Every <span className="italic font-['Instrument_Serif']">great outcome</span> starts with a
            <br />
            good process. Here's ours.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="h-72 sm:h-80 md:h-96 cursor-pointer"
              onMouseEnter={() => toggleFlip(index)}
              onMouseLeave={() => toggleFlip(index)}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
              >
                {/* Front Side */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute w-full h-full rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between 
                             bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 
                             shadow-[0_8px_40px_rgba(255,255,255,0.05)] 
                             hover:bg-[#2a2a2a]/90 transition-all duration-500 group"
                >
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                    <div className="text-white">{step.icon}</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute w-full h-full rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between 
                             bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 
                             shadow-[0_8px_40px_rgba(255,255,255,0.05)] 
                             hover:bg-[#2a2a2a]/90 transition-all duration-500"
                >
                  <div className="flex flex-col justify-center items-center text-center flex-1 space-y-6">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-light text-white/60 leading-none block">
                      {step.number}
                    </span>
                    <p className="text-gray-200 md:text-base text-sm leading-relaxed max-w-sm tracking-wide">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
