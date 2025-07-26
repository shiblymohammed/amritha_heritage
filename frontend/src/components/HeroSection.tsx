import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Using placeholder images - replace with your actual hero images
const heroImages = [
  {
    src: "./src/assets/images/hero/hero-1.jpg",
    title: "Luxury Redefined",
    subtitle: "Experience unparalleled elegance",
  },
  {
    src: "./src/assets/images/hero/hero-2.jpg",
    title: "Premium Suites",
    subtitle: "Where comfort meets sophistication",
  },
  {
    src: "./src/assets/images/hero/hero-3.jpg",
    title: "Wellness Sanctuary",
    subtitle: "Rejuvenate your mind and body",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Image slider with cross-fade transition */}
      <div className="relative h-full">
        <AnimatePresence initial={false}>
      <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            onAnimationComplete={() => setIsTransitioning(false)}
          >
            <img
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-6xl px-6">
      <motion.div
            initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.7)" }}
        >
          Amritha Heritage
        </motion.h1>
        <motion.h2 
              className="text-xl md:text-3xl lg:text-4xl font-light text-amber-300 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: "0 2px 15px rgba(0,0,0,0.6)" }}
        >
          Hotel & Resort
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
        >
          Experience timeless luxury and heritage hospitality in the heart of Kerala. 
          Where tradition meets modern comfort, creating unforgettable memories for 
          discerning travelers seeking authentic cultural experiences.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
        >
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
            Book Your Stay
          </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Explore Heritage
          </button>
        </motion.div>
      </motion.div>
    </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
}

























