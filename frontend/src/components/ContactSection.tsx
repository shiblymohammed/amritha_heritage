import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-[#3F1800] mt-4 mb-6">
            Contact{" "}
            <span className="font-normal text-amber-700">
              Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Plan your perfect getaway with our dedicated concierge team. We're
            here to make your luxury experience unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-light text-[#3F1800] mb-8">
                Resort Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MapPin className="w-6 h-6 text-amber-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F1800] mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      Thycaud, Thiruvananthapuram, Kerala - 695 014
                      <br />
                      Kerala - 695 014
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-6 h-6 text-amber-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F1800] mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600">
                      +91 471 222 0025, +91 471 222 0024 ,+91 87146 53336
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Mail className="w-6 h-6 text-amber-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F1800] mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      info@amrithaheritage.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Clock className="w-6 h-6 text-amber-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3F1800] mb-1">
                      Concierge Hours
                    </h4>
                    <p className="text-gray-600">
                      24/7 Available
                      <br />
                      Premium Service Always
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 bg-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-amber-50/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-2" />
                  <p className="text-[#3F1800] font-medium">Interactive Map</p>
                  <p className="text-gray-600 text-sm">
                    Location Preview
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-3xl font-light text-[#3F1800] mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    className="bg-gray-50 border-gray-200 focus:border-amber-700 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    className="bg-gray-50 border-gray-200 focus:border-amber-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-50 border-gray-200 focus:border-amber-700 transition-colors"
                />
              </div>

              <div>
                <Input
                  placeholder="Phone Number"
                  className="bg-gray-50 border-gray-200 focus:border-amber-700 transition-colors"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-gray-50 border-gray-200 focus:border-amber-700 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-1.5 md:py-3 bg-transparent border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs md:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
