import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="bg-gray-900 text-white"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-amber-300">
              AMRITHA HERITAGE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              History comes to life in Thiruvananthapuram as another relic of
              the past undergoes a fabulous makeover, resurrecting the city's
              glorious past. Amritha Heritage was once known as Essenden
              Bungalow. It was the home of the Portuguese citizen Eunice Gomez
              and her husband T. Shivaramasethu Pillai. It became a part of the
              Amritha Hotel in the 1950s.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Suites", "Dining", "Spa", "Activities", "Events"].map(
                (item, index) => (
                  <motion.li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 3 }}
                      className="text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-medium">Services</h4>
            <ul className="space-y-2">
              {[
                "Concierge",
                "Room Service",
                "Valet Parking",
                "Airport Transfer",
                "Laundry",
                "Business Center",
              ].map((item) => (
                <motion.li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="text-gray-300 hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg md:text-xl font-medium">Contact</h4>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-gray-300 text-sm">
                  Thycaud, Thiruvananthapuram, Kerala - 695 014
                  <br />
                  Kerala - 695 014
                </span>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span className="text-gray-300">+91 471 222 0025</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-amber-300" />
                <span className="text-gray-300">
                  info@amrithaheritage.com
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center"
        >
          <p className="text-sm md:text-base text-gray-400">
            © 2025 Amritha Resorts. All rights reserved. | Privacy Policy |
            Terms & Conditions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
