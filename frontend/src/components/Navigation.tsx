import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const navItems = [
  {
    name: "About Us",
    href: "#villas",
    image: "https://source.unsplash.com/random/1200x800?heritage",
  },
  {
    name: "Accommodation",
    href: "/accommodation",
    image: "https://source.unsplash.com/random/1200x800?villa",
  },
  {
    name: "Dining",
    href: "/dining",
    image: "https://source.unsplash.com/random/1200x800?restaurant",
  },
  {
    name: "Facilities",
    href: "#services",
    image: "https://source.unsplash.com/random/1200x800?spa",
  },
  {
    name: "Contact Us",
    href: "#experiences",
    image: "https://source.unsplash.com/random/1200x800?travel",
  },
];

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Animated menu toggle using framer-motion
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

function MenuToggle({ isOpen, toggle, scrolled }) {
  return (
    <button
      onClick={toggle}
      className={`transition-colors w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center p-0 ${
        scrolled ? "text-[#5e5554] hover:text-[#5a413d]" : "text-white hover:text-amber-200"
      }`}
    >
      <motion.svg width="24" height="24" viewBox="0 0 23 23" className="sm:w-7 sm:h-7">
        <Path
          variants={{
            closed: { d: "M 2 3 L 21 3" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          stroke="currentColor"
        />
        <Path
          d="M 2 11.5 L 21 11.5"
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          stroke="currentColor"
        />
        <Path
          variants={{
            closed: { d: "M 2 20 L 21 20" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          stroke="currentColor"
        />
      </motion.svg>
    </button>
  );
}

interface NavigationProps {
  alwaysScrolled?: boolean;
}

export default function Navigation({ alwaysScrolled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(alwaysScrolled);

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysScrolled]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 transition-all duration-3000 ${
          scrolled ? "bg-white/95 backdrop-blur-lg" : "bg-transparent/5"
        }`}
      >
        <div className="w-full px-2 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Far Left Corner */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center flex-shrink-0"
            >
              <a href="/">
                <img
                  src={
                    scrolled
                      ? "/assets/logo/logoBlack.png"
                      : "/assets/logo/logoWhite.png"
                  }
                  alt="Logo"
                  className="h-7 sm:h-7 md:h-8 w-auto transition-opacity duration-300 cursor-pointer hover:opacity-80"
                />
              </a>
            </motion.div>

            {/* Center Navigation - Only show when menu is closed and on larger screens */}
            {!isOpen && (
              <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
                {navItems.slice(1, 5).map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm lg:text-base xl:text-lg tracking-widest font-black transition-colors ${
                      scrolled
                        ? "text-[#535554] hover:text-[#d7cdc3]"
                        : "text-white hover:text-amber-200 drop-shadow-lg"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            )}

            {/* Right side - Book button and Menu button */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
              {/* Book button */}
              <motion.button
                whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(90,65,61,0.18)" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`hidden sm:block tracking-widest px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 text-xs sm:text-xs md:text-sm lg:text-base font-black transition-all duration-300 flex items-center justify-center leading-none ${
                  scrolled
                    ? "bg-[#5e5554] text-white hover:bg-[#5a413d] hover:text-white"
                    : "bg-[#fff] text-[#382f2d] hover:bg-[#d7cdc3] hover:text-black"
                }`}
                style={{ borderRadius: "0px" }}
                onClick={() => {}}
              >
                Book Now
              </motion.button>

              {/* Animated Menu button */}
              <MenuToggle isOpen={false} toggle={() => setIsOpen(true)} scrolled={scrolled} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Social Media Buttons - Right Side */}
      <div className="fixed right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        <motion.a
          href="#"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 sm:p-3 md:p-4 rounded-lg bg-[#25D366] text-white shadow-lg transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.a>
        <motion.a
          href="#"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 sm:p-3 md:p-4 rounded-lg bg-[#E1306C] text-white shadow-lg transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: '#E1306C' }}
        >
          <Instagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </motion.a>
        <motion.a
          href="#"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.1 }}
          className="p-2 sm:p-3 md:p-4 rounded-lg bg-[#1877F3] text-white shadow-lg transition-all duration-300 flex items-center justify-center"
          style={{ backgroundColor: '#1877F3' }}
        >
          <Facebook className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </motion.a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
          >
            <div className="relative h-full overflow-hidden">
              {/* Top bar with logo and close button */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-lg">
                <div className="w-full px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center pt-1 flex-shrink-0"
                    >
                      <a href="/" onClick={() => setIsOpen(false)}>
                        <img
                          src="/assets/logo/logoBlack.png"
                          alt="Logo"
                          className="h-6 sm:h-7 md:h-8 w-auto cursor-pointer hover:opacity-80"
                        />
                      </a>
                    </motion.div>

                    {/* Book button and Close button */}
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6 lg:space-x-8">
                      <Button
                        variant="outline"
                        className="hidden sm:block tracking-widest px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-black bg-[#5e5554] text-white hover:bg-[#5a413d] hover:text-white transition-all duration-300"
                        style={{ borderRadius: "0px" }}
                        onClick={() => {}}
                      >
                        BOOK
                      </Button>
                      {/* Animated close button */}
                      <MenuToggle isOpen={true} toggle={() => setIsOpen(false)} scrolled={true} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="h-full pt-16 sm:pt-18 md:pt-20 lg:pt-28 pb-12 sm:pb-16 md:pb-20">
                {/* Navigation - Centered vertically, left aligned */}
                <div className="flex items-center justify-start h-full pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-20">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3 sm:space-y-4 md:space-y-6 w-full"
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <motion.a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 hover:text-amber-600 transition-all duration-300 group cursor-pointer leading-tight"
                          whileHover={{ x: 10 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                        >
                          {item.name}
                          {index < navItems.length - 1 && (
                            <motion.span
                              className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal ml-2 md:ml-4 text-gray-400"
                            >
                              ›
                            </motion.span>
                          )}
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Footer links - Bottom section */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-0 right-0 px-2 sm:px-4 md:px-8 lg:px-20"
              >
                <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
                  {/* Left side - Additional links */}
                  <div className="flex flex-wrap justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-8 lg:space-x-12 text-xs sm:text-sm uppercase tracking-widest text-gray-600">
                    <a href="#" className="hover:text-gray-800 transition-colors">
                      BOOKS
                    </a>
                    <a href="#" className="hover:text-gray-800 transition-colors">
                      ADVANTAGES
                    </a>
                    <a href="#" className="hover:text-gray-800 transition-colors">
                      LOCATION
                    </a>
                    <a href="#" className="hover:text-gray-800 transition-colors">
                      CONTACT
                    </a>
                  </div>

                  {/* Right side - Social links */}
                  <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                    {[Instagram, Facebook, MessageCircle].map((Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        className="p-1 sm:p-2 text-gray-600 hover:text-gray-800 transition-all duration-300"
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
