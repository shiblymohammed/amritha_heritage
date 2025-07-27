import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Camera, Mountain, Waves } from "lucide-react";

const destinations = [
  {
    name: "Shanku Mukham Beach",
    distance: "5 min walk",
    description:
      "A pristine valley with crystal-clear streams and lush greenery",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/fd/02/b4/photo0jpg.jpg?w=700&h=400&s=1",
    icon: Mountain,
    activities: ["Hiking", "Photography", "Meditation"],
  },
  {
    name: "Kovalam Beach",
    distance: "10 min drive",
    description: "Perfect for kayaking and peaceful morning reflections",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/kovalam-beach-thiruvananthapuram-kerala-2-attr-hero?qlt=82&ts=1742152368699",
    icon: Waves,
    activities: ["Kayaking", "Swimming", "Fishing"],
  },
  {
    name: "Shri Padmanabhaswami Temple",
    distance: "20 min drive",
    description: "Breathtaking mountain views and sunrise photography spots",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUTav-5Rzud0H3X9x-onnS1Jf1Odegj6guw&s",
    icon: Camera,
    activities: ["Rock Climbing", "Sunrise Tours", "Scenic Drives"],
  },
  {
    name: "Ponmudi",
    distance: "15 min walk",
    description: "Centuries-old trees and hidden waterfalls await discovery",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOjNDcGCjD6l-OVgBHgAKMj0-ZgL24av8Uw&s",
    icon: Mountain,
    activities: ["Nature Walks", "Bird Watching", "Waterfall Tours"],
  },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-20 bg-white relative"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 font-medium tracking-wider uppercase text-sm">
            Explore Nearby
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-[#3F1800] mt-4 mb-6">
            Natural{" "}
            <span className="font-normal text-amber-700">
              Wonders
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Discover breathtaking destinations within minutes of your luxurious
            retreat. From tranquil lakes to majestic peaks, adventure awaits at
            every turn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-amber-50 transition-colors duration-300">
                  <destination.icon className="w-6 h-6 text-gray-600 group-hover:text-amber-700 transition-colors" />
                </div>

                {/* Distance badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-amber-700" />
                    <span className="text-xs font-medium text-gray-800">
                      {destination.distance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-[#3F1800] mb-3 group-hover:text-amber-700 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {destination.description}
                </p>

                {/* Activities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-[#3F1800]">
                    Activities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-100"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 py-1.5 bg-transparent border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs md:text-sm">
                  Explore Destination
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="text-lg font-medium text-gray-800 tracking-wider uppercase hover:text-amber-700 transition-colors pb-2">
            Plan Your Adventure
          </button>
        </motion.div>
      </div>
    </section>
  );
}