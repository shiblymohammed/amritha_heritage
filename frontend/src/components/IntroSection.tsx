import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const toggleMute1 = () => {
    if (videoRef1.current) {
      videoRef1.current.muted = !isMuted1;
      setIsMuted1(!isMuted1);
    }
  };

  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };

  return (
    <div
      className="w-full bg-white"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* First Section - Responsive Layout */}
      <div
        ref={sectionRef}
        className="min-h-screen flex flex-col md:flex-row bg-white"
      >
        {/* Left Side - Video (on mobile: top) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-2/5 relative bg-white md:pl-[8%]"
        >
          <div className="relative w-full h-64 md:h-4/5 mt-0 md:mt-16">
            <video
              ref={videoRef1}
              className="w-full h-full object-cover rounded-none"
              poster="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="./src/assets/videos/intro_1.mp4" type="video/mp4" />
              <source
                src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute1}
              className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-amber-800/70 transition-all duration-300"
            >
              {isMuted1 ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Side - Content (on mobile: bottom) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-3/5 bg-white flex flex-col justify-center md:pr-[8%] md:pl-12 py-8 md:py-20"
        >
          <div className="max-w-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-5xl font-light text-[#3F1800] leading-tight mb-8 text-center md:text-left"
            >
              Discover
              <br />
              <span className="font-normal">Amrítha Heritage</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-[#55453c] italic leading-relaxed md:pl-20 md:pr-12 mb-8 md:mb-12 text-center md:text-left"
            >
              'A graceful revival of the past, a retreat into elegance, a
              tribute to Thiruvananthapuram’s heritage.''
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base md:text-lg text-gray-700 leading-relaxed md:px-20 mb-6 md:mb-8 text-center md:text-left"
            >
              Once known as Essenden Bungalow, this beautifully restored
              five-room villa blends Travancore’s colonial charm with serene
              surroundings and vintage architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-base md:text-lg text-gray-700 leading-relaxed md:pl-20 md:pr-20 mb-6 md:mb-8 text-center md:text-left"
            >
              Surrounded by gardens and timeless grace, it also marks the return
              of the iconic Kohinoor Restaurant, offering a blend of Indian and
              European flavours with open-lawn dining.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-base md:text-lg text-gray-700 leading-relaxed md:pl-20 md:pr-20 mb-8 md:mb-16 text-center md:text-left"
            >
              Experience a stay where the past lives on — gracefully.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:pr-20 md:pl-20 items-center md:items-start"
            >
              <button className="text-lg font-medium text-gray-800 tracking-wider uppercase hover:text-amber-700 transition-colors pb-2">
                ABOUT US
              </button>
              <button className="text-lg font-medium text-gray-500 tracking-wider uppercase hover:text-amber-700 transition-colors pb-2">
                ACCOMMODATION
              </button>
              <button className="text-lg font-medium text-gray-500 tracking-wider uppercase hover:text-amber-700 transition-colors pb-2">
                EVENTS
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Second Section - Full Width Video with Off-White Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full bg-gray-50 py-0"
      >
        <div className="w-full h-[60vh] md:h-screen relative flex items-center justify-center">
          <video
            ref={videoRef2}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center md:object-cover md:w-full md:h-full rounded-none md:rounded-none aspect-[9/16] md:aspect-auto"
            style={{
              maxHeight: '100vh',
              aspectRatio: '9/16',
              borderRadius: 0,
            }}
          >
            <source src="./src/assets/videos/intro_2.mp4" type="video/mp4" />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute2}
            className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-amber-800/70 transition-all duration-300 z-10"
          >
            {isMuted2 ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Optional overlay for text or controls */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-5xl font-light mb-6 [text-shadow:_0_0_8px_rgba(0,0,0,0,7)]">
                Experience Tranquility
              </h2>
              <p className="text-lg md:text-xl opacity-90 [text-shadow:_0_0_6px_rgba(0,0,0,0,7)]">
                Where nature meets luxury in perfect harmony
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
