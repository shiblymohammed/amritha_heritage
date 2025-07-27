import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Demo menu items for quick restaurant showcase
const sampleMenu = [
  {
    name: "Chef's Seasonal Risotto",
    price: "$42",
  },
  {
    name: "Lobster Thermidor",
    price: "$78",
  },
  {
    name: "Wagyu Beef Carpaccio",
    price: "$38",
  },
];

const roomOptions = [
  { id: "deluxe", name: "Deluxe Room" },
  { id: "executive", name: "Executive Suite" },
  { id: "accessible", name: "Differently-Abled Room" },
];

export default function RoomBooking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [gender, setGender] = useState("");

  useEffect(() => {
    const roomParam = searchParams.get("room");
    if (roomParam) {
      setSelectedRoom(roomParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple confirmation for now
    alert(
      `Thank you! Your booking for ${selectedRoom} from ${checkIn} to ${checkOut} for ${adults} adults and ${children} children has been received.`
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navigation alwaysScrolled />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/assets/images/hero/hero-2.jpg" alt="Heritage Villa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-4">Reserve Your Luxury Stay</h1>
          <p className="max-w-xl mx-auto text-base md:text-lg opacity-90 leading-relaxed px-2 sm:px-4">
            Choose from our exquisite range of rooms and experience timeless elegance blended with modern comfort. Complete your stay with fine dining and curated experiences.
          </p>
        </motion.div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-xl rounded-lg p-6 md:p-10 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">Booking Details</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Room Type */}
              <div>
                <label className="block text-lg mb-4">Room Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roomOptions.map((room) => (
                    <label
                      key={room.id}
                      className={`border px-4 py-3 cursor-pointer text-center transition-colors ${
                        selectedRoom === room.id
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="room"
                        value={room.id}
                        className="hidden"
                        checked={selectedRoom === room.id}
                        onChange={() => setSelectedRoom(room.id)}
                      />
                      {room.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg mb-2">Check-In</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full border px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Check-Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full border px-4 py-3"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-lg mb-2">Adults</label>
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="w-full border px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Children</label>
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-full border px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="w-full border px-4 py-3 bg-white"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gray-800 text-yellow-50 py-2 md:py-4 text-sm md:text-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-60"
                disabled={!selectedRoom}
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Menu Teaser */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Indulge in Gourmet Dining</h2>
            <p className="max-w-2xl mx-auto text-gray-700 px-2 sm:px-4">Pair your stay with our signature dishes curated by award-winning chefs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            {sampleMenu.map((dish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border p-6 rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-medium mb-2">{dish.name}</h3>
                <p className="text-gray-800 font-semibold">{dish.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 