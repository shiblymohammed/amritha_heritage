import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BedDouble, Wifi, Tv, Eye, Bath, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description:
      "Spanning 32 m², the Deluxe Room blends vintage teak furnishing with a king-size bed and opens onto a private balcony overlooking the heritage gardens.",
    price: "₹6,000 / night",
    images: [
      "/assets/images/demo/hotel-room.jpg",
      "/assets/images/demo/bedroom.jpg",
      "/assets/images/demo/balcony.jpg",
    ],
    amenities: [BedDouble, Wifi, Eye, Bath],
  },
  {
    id: "executive",
    name: "Executive Suite",
    description:
      "At 48 m² the Executive Suite offers a living salon, bespoke art pieces, and wrap-around windows framing panoramic estate views.",
    price: "₹9,000 / night",
    images: [
      "/assets/images/demo/suite1.jpg",
      "/assets/images/demo/living-room.jpg",
      "/assets/images/demo/panorama.jpg",
    ],
    amenities: [BedDouble, Wifi, Tv, Eye, Bath],
  },
  {
    id: "accessible",
    name: "Accessible Room",
    description:
      "A barrier-free 30 m² retreat featuring wider doorways, roll-in shower, grab bars, and lowered amenities for effortless comfort.",
    price: "₹5,500 / night",
    images: [
      "/assets/images/demo/accessible1.jpg",
      "/assets/images/demo/bathroom.jpg",
      "/assets/images/demo/garden-view.jpg",
    ],
    amenities: [BedDouble, Wifi, Eye, Bath],
  },
];

export default function Accommodation() {
  const navigate = useNavigate();

  const handleBook = (roomId: string) => {
    navigate(`/room-booking?room=${roomId}`);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navigation alwaysScrolled />

      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
        <img src="/assets/images/hero/hero-1.jpg" alt="Heritage Rooms" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-4">Our Elegant Rooms</h1>
          <p className="max-w-xl mx-auto text-base md:text-lg opacity-90 leading-relaxed px-2 sm:px-4">
            Find the perfect sanctuary suited to your tastes—each room blends timeless charm with contemporary luxury.
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Carousel */}
              <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0">
                <div className="relative">
                  <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide">
                    {room.images.map((img, i) => (
                      <img key={i} src={img} alt={room.name} className="snap-center w-80 h-56 md:w-[28rem] md:h-72 object-cover rounded-xl flex-shrink-0" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0">
                <h2 className="text-3xl font-medium mb-4">{room.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {room.description}
                </p>
                {room.amenities && (
                  <div className="grid grid-cols-4 gap-4 mb-6 text-gray-600">
                    {room.amenities.map((Icon, idx2) => (
                      <div key={idx2} className="flex flex-col items-center text-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xl font-semibold text-gray-800">
                    {room.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBook(room.id)}
                    className="bg-amber-700 text-white px-6 py-3 inline-flex items-center justify-center hover:bg-amber-800 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
} 