import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const hero1 = "/assets/images/hero/hero-1.jpg";
const hero2 = "/assets/images/hero/hero-2.jpg";
const hero3 = "/assets/images/hero/hero-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Our villas",
    subtitle: "Discover our villas",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel. Nestled in the heart of pristine Mediterranean landscapes, our exclusive villas offer an unparalleled escape from the ordinary.",
    tagline: "The genuine authenticity of our island",
    features: ["ICONIC VILLA", "OCEAN VILLAS", "COLLECTION VILLAS", "SEA LOUNGE VILLAS", "DELUXE VILLAS", "RUSTIC VILLAS"],
    image: hero1,
  },
  {
    title: "Private Pools",
    subtitle: "Exclusive relaxation",
    description:
      "Each villa features its own private pool surrounded by Mediterranean gardens and stunning views. Dive into crystal-clear waters while overlooking the endless azure horizon.",
    tagline: "Your personal oasis awaits",
    features: ["INFINITY POOLS", "HEATED POOLS", "POOL BAR SERVICE", "UNDERWATER LIGHTING", "PRIVACY LANDSCAPING", "POOL MAINTENANCE"],
    image: hero2,
  },
  {
    title: "Authentic Design",
    subtitle: "Island architecture",
    description:
      "Traditional stone walls meet modern luxury in our carefully crafted villa interiors and exteriors. Every detail has been meticulously chosen to honor the rich architectural heritage.",
    tagline: "Where heritage meets luxury",
    features: ["STONE CONSTRUCTION", "HANDCRAFTED FURNISHING", "TRADITIONAL ARCHWAYS", "MODERN AMENITIES", "CULTURAL ART PIECES", "LOCAL MATERIALS"],
    image: hero3,
  },
  {
    title: "Panoramic Views",
    subtitle: "Breathtaking vistas",
    description:
      "Wake up to spectacular sunrise views over the Aegean Sea from your private villa terrace. Floor-to-ceiling windows and expansive outdoor spaces ensure breathtaking beauty.",
    tagline: "Nature's canvas before you",
    features: ["SEA VIEWS", "PRIVATE TERRACES", "FLOOR-TO-CEILING WINDOWS", "SUNSET VIEWING DECKS", "OUTDOOR DINING AREAS", "MOUNTAIN VIEWS"],
    image: hero1,
  },
  {
    title: "Premium Services",
    subtitle: "Hotel luxury",
    description:
      "Enjoy concierge services, daily housekeeping, and 24/7 support while maintaining your privacy. Our dedicated team ensures every aspect exceeds expectations.",
    tagline: "The best of both worlds",
    features: ["PERSONAL CONCIERGE", "DAILY HOUSEKEEPING", "24/7 GUEST SUPPORT", "PRIVATE TRANSFERS", "EXCLUSIVE EXPERIENCES", "BUTLER SERVICE"],
    image: hero2,
  },
  {
    title: "Cultural Immersion",
    subtitle: "Local experiences",
    description:
      "Connect with authentic island culture through curated experiences and local partnerships. Discover hidden gems and participate in traditional activities.",
    tagline: "Live like a local",
    features: ["COOKING CLASSES", "CULTURAL TOURS", "ARTISAN WORKSHOPS", "HISTORICAL SITE VISITS", "AUTHENTIC DINING", "LOCAL FESTIVALS"],
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
    
    // Different behavior for mobile vs desktop
    if (isMobile) {
      // On mobile, use vertical scroll with snap points
      gsap.set(scrollRef.current, { x: 0, flexDirection: "column" });
      
      // Simple fade-in animations for mobile
      Array.from(sections).forEach((section, index) => {
        const content = section.querySelector(".feature-content");
        const image = section.querySelector(".feature-image");

        if (content) {
          gsap.fromTo(
            content,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    } else {
      // Desktop horizontal scroll
      const totalWidth = sections.length * window.innerWidth;
      gsap.set(scrollRef.current, { flexDirection: "row" });

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

      Array.from(sections).forEach((section, index) => {
        const content = section.querySelector(".feature-content");

        if (content) {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

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
      className={`relative bg-stone-100 overflow-hidden ${isMobile ? 'min-h-screen' : 'h-screen'}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div 
        ref={scrollRef} 
        className={`${isMobile ? 'flex flex-col' : 'flex h-full'}`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              isMobile 
                ? 'w-full min-h-[70vh] flex-col py-6 px-0' 
                : 'w-screen h-screen flex-shrink-0'
            } relative flex items-center`}
          >
            {/* Layout container */}
            <div className={`w-full max-w-8xl mx-auto flex items-center h-full ${
              isMobile ? 'flex-col space-y-6 max-w-md' : 'flex-row'
            }`}>
              
              {/* Text content */}
              <div className={`feature-content ${
                isMobile 
                  ? 'w-full text-center order-2 px-4' 
                  : 'flex-1 max-w-2xl pl-16 h-full flex flex-col justify-center'
              }`}>
                
                {/* Mobile content - minimal and clean */}
                {isMobile ? (
                  <>
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-2xl sm:text-3xl font-light mb-3 text-[#271608] leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-sm leading-relaxed text-stone-600 mb-4 max-w-xs mx-auto"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.description.split('.')[0]}.
                    </motion.p>

                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative"
                    >
                      <button className="group relative text-sm font-light text-stone-700 tracking-wide transition-colors duration-300 hover:text-stone-900"
                              style={{ fontFamily: "'Playfair Display', serif" }}>
                        {feature.subtitle}
                        <div className="absolute -bottom-1 left-0 w-full h-px bg-stone-800 transition-all duration-300" />
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-5xl md:text-6xl font-light mb-8 text-[#271608] leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-lg leading-relaxed text-stone-600 mb-12 italic max-w-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Features list - Desktop only */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="space-y-6 mb-12"
                    >
                      {feature.features.map((item, idx) => (
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
                      whileInView={{ y: 0, opacity: 1 }}
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
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-sm text-stone-500 mt-8 italic absolute top-8 right-8"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.tagline}
                    </motion.p>
                  </>
                )}
              </div>

              {/* Image */}
              <div className={`feature-image ${
                isMobile 
                  ? 'w-full order-1 h-80 sm:h-96' 
                  : 'flex-1 max-w-4xl h-full flex items-center justify-center'
              } relative`}>
                <div className={`relative overflow-hidden ${
                  isMobile 
                    ? 'w-full h-full rounded-2xl shadow-2xl mx-4' 
                    : 'w-[750px] h-[750px] pl-20'
                }`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${index}-${currentImageIndex}`}
                      initial={{ 
                        scale: isMobile ? 1.1 : 0.8, 
                        opacity: 0,
                        z: -1,
                        rotateY: isMobile ? 0 : -15
                      }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        z: 0,
                        rotateY: 0
                      }}
                      exit={{ 
                        scale: isMobile ? 0.9 : 1.1, 
                        opacity: 0,
                        z: 1,
                        rotateY: isMobile ? 0 : 15
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-cover bg-center shadow-2xl"
                      style={{
                        backgroundImage: `url(${[hero1, hero2, hero3][currentImageIndex]})`,
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Feature number indicator */}
            <div className={`absolute text-stone-400 font-light ${
              isMobile 
                ? 'top-4 right-4 text-sm' 
                : 'top-8 left-8 text-lg'
            }`}>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(features.length).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}