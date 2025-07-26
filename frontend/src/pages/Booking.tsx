import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, Star, Check, X } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// All available dishes
const allDishes = [
  {
    id: "niagra-chicken",
    name: "Niagra Chicken",
    description: "Fresh Atlantic sea bass with herb-crusted emerald sauce, seasonal vegetables",
    price: 48,
    image: "/dining/niagrachicken.jpg",
    rating: 5,
    prepTime: "25 min",
    serves: "2-3",
    category: "Main Course"
  },
  {
    id: "beef-onion",
    name: "Beef With Onion",
    description: "Prime Japanese wagyu beef with truffle reduction and roasted root vegetables",
    price: 85,
    image: "/dining/beefwithonion.jpg",
    rating: 5,
    prepTime: "30 min",
    serves: "1-2",
    category: "Main Course"
  },
  {
    id: "chicken-mushroom",
    name: "Chicken Mushroom",
    description: "Creamy arborio rice with wild mushrooms, parmesan, and fresh herbs",
    price: 32,
    image: "/dining/chickenmushroom.jpg",
    rating: 4,
    prepTime: "20 min",
    serves: "1-2",
    category: "Main Course"
  },
  {
    id: "lobster-thermidor",
    name: "Lobster Thermidor",
    description: "Classic French lobster dish with cognac cream sauce and gruyere cheese",
    price: 95,
    image: "/dining/diningSection1.jpg",
    rating: 5,
    prepTime: "35 min",
    serves: "1-2",
    category: "Seafood"
  },
  {
    id: "truffle-pasta",
    name: "Truffle Pasta",
    description: "Handmade tagliatelle with black truffle, parmesan, and butter sauce",
    price: 45,
    image: "/dining/diningSection1.jpg",
    rating: 4,
    prepTime: "20 min",
    serves: "1-2",
    category: "Pasta"
  },
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 18,
    image: "/dining/diningSection1.jpg",
    rating: 5,
    prepTime: "15 min",
    serves: "1",
    category: "Dessert"
  }
];

const categories = ["All", "Main Course", "Seafood", "Pasta", "Dessert"];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: ""
  });

  // Get pre-selected dish from URL params
  useEffect(() => {
    const preselectedDish = searchParams.get("dish");
    if (preselectedDish) {
      setSelectedDishes([preselectedDish]);
    }
  }, [searchParams]);

  const filteredDishes = selectedCategory === "All" 
    ? allDishes 
    : allDishes.filter(dish => dish.category === selectedCategory);

  const selectedDishesData = allDishes.filter(dish => selectedDishes.includes(dish.id));
  const totalAmount = selectedDishesData.reduce((sum, dish) => sum + dish.price, 0);

  const handleDishToggle = (dishId: string) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", { selectedDishes: selectedDishesData, reservationData });
    alert("Booking submitted successfully! We'll confirm your reservation shortly.");
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <Navigation alwaysScrolled />

      {/* Hero */}
      <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden flex items-center justify-center">
        <img src="/assets/images/hero/hero-3.jpg" alt="Dining Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-4">Fine Dining Reservation</h1>
          <p className="max-w-xl mx-auto text-base md:text-lg opacity-90 leading-relaxed">
            Craft your culinary journey by selecting signature dishes and reserving your perfect table.
          </p>
        </motion.div>
      </section>
      
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#3F1800] mb-4">
              Reserve Your{" "}
              <span className="font-normal text-amber-700">Table</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Select your preferred dishes and secure your dining experience at Amritha Heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dishes Selection */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-light text-[#3F1800] mb-6">Select Dishes</h2>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-amber-700 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDishes.map((dish) => (
                    <motion.div
                      key={dish.id}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-2 ${
                        selectedDishes.includes(dish.id) 
                          ? "border-amber-700" 
                          : "border-gray-100"
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        {/* Selection Indicator */}
                        <div className="absolute top-4 right-4">
                          {selectedDishes.includes(dish.id) ? (
                            <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
                              <Check className="w-5 h-5 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-gray-800">
                            ${dish.price}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium text-[#3F1800]">
                            {dish.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            {[...Array(dish.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {dish.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{dish.prepTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>Serves {dish.serves}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDishToggle(dish.id)}
                          className={`w-full py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                            selectedDishes.includes(dish.id)
                              ? "bg-amber-700 text-white hover:bg-amber-800"
                              : "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                          }`}
                        >
                          {selectedDishes.includes(dish.id) ? "Selected" : "Select Dish"}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-3xl font-light text-[#3F1800] mb-6">Reservation Details</h2>

                {/* Selected Dishes Summary */}
                {selectedDishesData.length > 0 && (
                  <div className="mb-6 p-4 bg-amber-50 rounded-lg">
                    <h3 className="font-medium text-[#3F1800] mb-3">Selected Dishes:</h3>
                    <div className="space-y-2">
                      {selectedDishesData.map((dish) => (
                        <div key={dish.id} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{dish.name}</span>
                          <span className="text-sm font-medium text-amber-700">${dish.price}</span>
                        </div>
                      ))}
                      <div className="border-t border-amber-200 pt-2 mt-2">
                        <div className="flex items-center justify-between font-medium">
                          <span>Total:</span>
                          <span className="text-amber-700">${totalAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reservation Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3F1800] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reservationData.name}
                      onChange={(e) => setReservationData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3F1800] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={reservationData.email}
                      onChange={(e) => setReservationData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3F1800] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={reservationData.phone}
                      onChange={(e) => setReservationData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#3F1800] mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={reservationData.date}
                        onChange={(e) => setReservationData(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3F1800] mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        required
                        value={reservationData.time}
                        onChange={(e) => setReservationData(prev => ({ ...prev, time: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3F1800] mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={reservationData.guests}
                      onChange={(e) => setReservationData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3F1800] mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={reservationData.specialRequests}
                      onChange={(e) => setReservationData(prev => ({ ...prev, specialRequests: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition-colors resize-none"
                      placeholder="Any special dietary requirements or requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={selectedDishes.length === 0}
                    className={`w-full py-3 rounded-md font-medium transition-all duration-300 ${
                      selectedDishes.length === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-amber-700 text-white hover:bg-amber-800"
                    }`}
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 