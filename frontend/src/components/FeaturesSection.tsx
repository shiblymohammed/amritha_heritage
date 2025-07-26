import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "@/assets/images/hero/hero-1.jpg";
import hero2 from "@/assets/images/hero/hero-2.jpg";
import hero3 from "@/assets/images/hero/hero-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Our villas",
    subtitle: "Discover our villas",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel. Nestled in the heart of pristine Mediterranean landscapes, our exclusive villas offer an unparalleled escape from the ordinary.",
    tagline: "The genuine authenticity of our island",
    features: ["ICONIC VILLA", "OCEAN VILLAS", "COLLECTION VILLAS"],
    image: hero1,
  },
  {
    title: "Private Pools",
    subtitle: "Exclusive relaxation",
    description:
      "Each villa features its own private pool surrounded by Mediterranean gardens and stunning views. Dive into crystal-clear waters while overlooking the endless azure horizon.",
    tagline: "Your personal oasis awaits",
    features: ["INFINITY POOLS", "HEATED POOLS", "POOL BAR SERVICE"],
    image: hero2,
  },
  {
    title: "Authentic Design",
    subtitle: "Island architecture",
    description:
      "Traditional stone walls meet modern luxury in our carefully crafted villa interiors and exteriors. Every detail has been meticulously chosen to honor the rich architectural heritage.",
    tagline: "Where heritage meets luxury",
    features: ["STONE CONSTRUCTION", "HANDCRAFTED FURNISHING", "TRADITIONAL ARCHWAYS"],
    image: hero3,
  },
  {
    title: "Panoramic Views",
    subtitle: "Breathtaking vistas",
    description:
      "Wake up to spectacular sunrise views over the Aegean Sea from your private villa terrace. Floor-to-ceiling windows and expansive outdoor spaces ensure breathtaking beauty.",
    tagline: "Nature's canvas before you",
    features: ["SEA VIEWS", "PRIVATE TERRACES", "FLOOR-TO-CEILING WINDOWS"],
    image: hero1,
  },
  {
    title: "Premium Services",
    subtitle: "Hotel luxury",
    description:
      "Enjoy concierge services, daily housekeeping, and 24/7 support while maintaining your privacy. Our dedicated team ensures every aspect exceeds expectations.",
    tagline: "The best of both worlds",
    features: ["PERSONAL CONCIERGE", "DAILY HOUSEKEEPING", "24/7 GUEST SUPPORT"],
    image: hero2,
  },
  {
    title: "Cultural Immersion",
    subtitle: "Local experiences",
    description:
      "Connect with authentic island culture through curated experiences and local partnerships. Discover hidden gems and participate in traditional activities.",
    tagline: "Live like a local",
    features: ["COOKING CLASSES", "CULTURAL TOURS", "ARTISAN WORKSHOPS"],
    image: hero3,
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const sections = scrollRef.current.children;
    const totalWidth = sections.length * window.innerWidth;

    // Horizontal scroll animation
    const scrollTween = gsap.to(scrollRef.current, {
      x: -totalWidth + window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Enhanced parallax and scale effects for each feature
    Array.from(sections).forEach((section, index) => {
      const content = section.querySelector(".feature-content");

      if (content) {
        // Content animation
        gsap.fromTo(
          content,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "left center",
              end: "center center",
              scrub: 1,
              containerAnimation: scrollTween,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleFeatureHover = (index, featureIndex) => {
    setHoveredFeature({ sectionIndex: index, featureIndex });
    const imageIndex = (featureIndex % 3);
    setCurrentImageIndex(imageIndex);
  };

  const handleFeatureLeave = () => {
    setHoveredFeature(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-stone-100 overflow-hidden h-screen"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div ref={scrollRef} className="flex h-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 flex items-center relative"
          >
            {/* Mobile Layout */}
            {isMobile ? (
              <>
                {/* Top Half - Full Screen Image */}
                <div className="absolute inset-0 w-full h-1/2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${index}-${currentImageIndex}`}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${[hero1, hero2, hero3][currentImageIndex]})`,
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Feature number indicator */}
                  <div className="absolute top-4 right-4 text-white/80 font-light text-sm backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(features.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Bottom Half - Content */}
                <div className="feature-content absolute bottom-0 w-full h-1/2 flex flex-col justify-center px-6 py-8 bg-stone-50">
                  <h1
                    className="text-2xl font-light mb-3 text-[#271608] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.title}
                  </h1>
                  
                  <p
                    className="text-xs leading-relaxed text-stone-600 mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.description.split('.')[0]}.
                  </p>

                  <div className="space-y-2 mb-4">
                    {feature.features.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="relative group cursor-pointer py-1"
                        onMouseEnter={() => handleFeatureHover(index, idx)}
                        onMouseLeave={handleFeatureLeave}
                      >
                        <p className="text-[10px] font-medium text-stone-600 tracking-widest transition-colors duration-300 group-hover:text-stone-900 uppercase" 
                           style={{ fontFamily: "'Inter', sans-serif" }}>
                          {item}
                        </p>
                        <div className={`absolute -bottom-0 left-0 h-px bg-stone-400 transition-all duration-300 ${
                          hoveredFeature?.sectionIndex === index && hoveredFeature?.featureIndex === idx 
                            ? 'w-full' 
                            : 'w-4'
                        }`} />
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-auto">
                    <button className="group relative text-xs font-light text-stone-700 tracking-wide transition-colors duration-300 hover:text-stone-900 py-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                      {feature.subtitle}
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-stone-600 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Desktop Layout */
              <div className="w-full max-w-8xl mx-auto flex items-center h-full flex-row px-4 sm:px-6 md:px-8">
                {/* Text content */}
                <div className="feature-content flex-1 max-w-2xl pl-4 sm:pl-8 md:pl-16 h-full flex flex-col justify-center">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-light mb-8 text-[#271608] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg leading-relaxed text-stone-600 mb-12 italic max-w-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Features list - Desktop */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6 mb-12"
                  >
                    {feature.features.concat(["SEA LOUNGE VILLAS", "DELUXE VILLAS", "RUSTIC VILLAS"]).slice(0, 6).map((item, idx) => (
                      <div 
                        key={idx} 
                        className="relative group cursor-pointer"
                        onMouseEnter={() => handleFeatureHover(index, idx)}
                        onMouseLeave={handleFeatureLeave}
                      >
                        <p className="text-lg font-light text-stone-700 tracking-wide transition-colors duration-300 group-hover:text-stone-900" 
                           style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item}
                        </p>
                        <div className={`absolute -bottom-2 left-0 h-px bg-stone-800 transition-all duration-300 ${
                          hoveredFeature?.sectionIndex === index && hoveredFeature?.featureIndex === idx 
                            ? 'w-full' 
                            : 'w-0'
                        }`} />
                      </div>
                    ))}
                  </motion.div>

                  {/* Discover button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <button className="group relative text-lg font-light text-stone-700 tracking-wide transition-colors duration-300 hover:text-stone-900"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                      {feature.subtitle}
                      <div className="absolute -bottom-2 left-0 w-full h-px bg-stone-800 transition-all duration-300" />
                    </button>
                  </motion.div>

                  {/* Desktop tagline */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm text-stone-500 mt-8 italic absolute top-8 right-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feature.tagline}
                  </motion.p>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-4xl h-full flex items-center justify-center relative px-4 sm:px-6 md:px-8">
                  <div className="relative overflow-hidden w-[750px] h-[750px] pl-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${index}-${currentImageIndex}`}
                        initial={{ scale: 0.8, opacity: 0, z: -1, rotateY: -15 }}
                        animate={{ scale: 1, opacity: 1, z: 0, rotateY: 0 }}
                        exit={{ scale: 1.1, opacity: 0, z: 1, rotateY: 15 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center shadow-2xl"
                        style={{
                          backgroundImage: `url(${[hero1, hero2, hero3][currentImageIndex]})`,
                        }}
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* Feature number indicator - Desktop */}
                <div className="absolute top-8 left-8 text-stone-400 font-light text-lg">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(features.length).padStart(2, "0")}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}