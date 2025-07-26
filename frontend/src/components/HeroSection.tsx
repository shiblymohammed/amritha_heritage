import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Using placeholder images - replace with your actual hero images
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80",
    title: "Luxury Redefined",
    subtitle: "Experience unparalleled elegance",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
    title: "Premium Suites",
    subtitle: "Where comfort meets sophistication",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80",
    title: "Wellness Sanctuary",
    subtitle: "Rejuvenate your mind and body",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ fontFamily: "'Inter', 'Cormorant Garamond', serif" }}
    >
      {/* Image slider with enhanced transitions */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
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

      {/* Enhanced gradient overlay for perfect text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Mobile-First Responsive Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center text-white w-full max-w-7xl px-4 sm:px-6 md:px-8">
          
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Mobile Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={loaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
                className="space-y-3"
              >
                <h1 className="text-5xl sm:text-6xl font-thin text-white leading-tight tracking-wide">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent"
                    style={{ 
                      textShadow: "0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    }}
                  >
                    Amritha
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="block bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent font-light"
                    style={{ 
                      textShadow: "0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                    }}
                  >
                    Heritage
                  </motion.span>
                </h1>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={loaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-lg sm:text-xl font-light text-amber-200 tracking-[0.2em] uppercase"
                  style={{ 
                    textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
                  }}
                >
                  Hotel & Resort
                </motion.h2>
              </motion.div>

              {/* Mobile Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-lg mx-auto px-4 sm:px-6 md:px-8"
                style={{ 
                  textShadow: "0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
                }}
              >
                Experience timeless luxury and heritage hospitality in the heart of Kerala. 
                Where tradition meets modern comfort.
              </motion.p>

              {/* Mobile Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100 }}
                className="flex flex-col space-y-4 items-center pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-xs py-4 px-8 bg-white text-black font-medium text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-2xl"
                  style={{ 
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={loaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.7 }}
                  >
                    Book Your Stay
                  </motion.span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-xs py-4 px-8 border-2 border-white/80 text-white font-medium text-lg tracking-wide hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={loaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.9 }}
                  >
                    Explore Heritage
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 60 }}
              className="space-y-8"
            >
              {/* Desktop Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={loaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.5, type: "spring", stiffness: 80 }}
                className="space-y-4"
              >
                <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-thin text-white leading-tight tracking-wide">
                  <motion.span
                    initial={{ opacity: 0, y: 40, rotateX: 90 }}
                    animate={loaded ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100 }}
                    className="block bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent"
                    style={{ 
                      textShadow: "0 12px 48px rgba(0,0,0,0.9), 0 6px 24px rgba(0,0,0,0.7)",
                      filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.6))"
                    }}
                  >
                    Amritha
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={loaded ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
                    className="block bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent font-light"
                    style={{ 
                      textShadow: "0 12px 48px rgba(0,0,0,0.9), 0 6px 24px rgba(0,0,0,0.7)",
                      filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.6))"
                    }}
                  >
                    Heritage
                  </motion.span>
                </h1>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1, type: "spring", stiffness: 120 }}
                  className="text-2xl xl:text-3xl font-light text-amber-200 tracking-[0.3em] uppercase"
                  style={{ 
                    textShadow: "0 6px 30px rgba(0,0,0,0.9), 0 3px 15px rgba(0,0,0,0.7)",
                    filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.5))"
                  }}
                >
                  Hotel & Resort
                </motion.h2>
              </motion.div>

              {/* Desktop Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.3 }}
                className="max-w-4xl mx-auto text-xl xl:text-2xl text-gray-100 leading-relaxed font-light px-4 sm:px-6 md:px-8"
                style={{ 
                  textShadow: "0 6px 24px rgba(0,0,0,0.9), 0 3px 12px rgba(0,0,0,0.7)",
                  filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.5))"
                }}
              >
                Experience timeless luxury and heritage hospitality in the heart of Kerala. 
                Where tradition meets modern comfort, creating unforgettable memories for 
                discerning travelers seeking authentic cultural experiences.
              </motion.p>

              {/* Desktop Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 1.5, type: "spring", stiffness: 80 }}
                className="flex flex-row gap-6 justify-center items-center pt-8"
              >
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={loaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-black font-medium text-lg xl:text-xl tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-2xl"
                  style={{ 
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                >
                  Book Your Stay
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: 30 }}
                  animate={loaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.9 }}
                  whileHover={{ scale: 1.08, y: -3, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white/80 text-white font-medium text-lg xl:text-xl tracking-wide hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    backdropFilter: "blur(15px)",
                  }}
                >
                  Explore Heritage
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Dots */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20"
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-500 ${
              index === currentIndex
                ? "w-8 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white/40 hover:bg-white/70 rounded-full"
            }`}
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: index === currentIndex ? "0 4px 20px rgba(255,255,255,0.3)" : "none"
            }}
            disabled={isTransitioning}
          />
        ))}
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}