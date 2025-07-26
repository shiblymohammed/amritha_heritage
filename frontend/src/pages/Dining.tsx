import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Star, Clock, Users, ChefHat, Award, Utensils, Calendar, Phone, MapPin, Clock as ClockIcon, Wine, Coffee, Dessert, Salad, Beef, Fish, Leaf } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RippleEffect from '@/components/RippleEffect';
import cloudyBg from '@/assets/cloudy-bg.jpg';

// Today's Specials
const todaysSpecials = [
  {
    name: "Chef's Seasonal Risotto",
    description: "Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan",
    price: "$42",
    originalPrice: "$58",
    image: "/dining/niagrachicken.jpg",
    rating: 5,
    prepTime: "25 min",
    serves: "1-2",
    category: "Main Course",
    isSpecial: true,
  },
  {
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster with cognac cream sauce and gruyère cheese",
    price: "$78",
    originalPrice: "$95",
    image: "/dining/beefwithonion.jpg",
    rating: 5,
    prepTime: "35 min",
    serves: "1",
    category: "Seafood",
    isSpecial: true,
  },
  {
    name: "Wagyu Beef Carpaccio",
    description: "Thinly sliced premium wagyu with truffle aioli and aged balsamic",
    price: "$38",
    originalPrice: "$52",
    image: "/dining/chickenmushroom.jpg",
    rating: 5,
    prepTime: "15 min",
    serves: "1",
    category: "Appetizer",
    isSpecial: true,
  },
];

// Full Menu Categories
const menuCategories = [
  {
    name: "Appetizers",
    icon: Salad,
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with mozzarella and truffle aioli", price: "$18" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$22" },
      { name: "Duck Confit Spring Rolls", description: "Crispy rolls with hoisin sauce and pickled vegetables", price: "$24" },
      { name: "Seared Scallops", description: "With cauliflower purée and pancetta", price: "$28" },
    ]
  },
  {
    name: "Soups & Salads",
    icon: Salad,
    items: [
      { name: "Lobster Bisque", description: "Creamy soup with cognac and crème fraîche", price: "$26" },
      { name: "Caesar Salad", description: "Romaine, parmesan, croutons, anchovy dressing", price: "$18" },
      { name: "Beetroot & Goat Cheese", description: "Roasted beets, goat cheese, walnuts, balsamic", price: "$20" },
      { name: "French Onion Soup", description: "With gruyère cheese and croutons", price: "$16" },
    ]
  },
  {
    name: "Main Courses",
    icon: Beef,
    items: [
      { name: "Filet Mignon", description: "8oz prime beef with red wine reduction and truffle mashed potatoes", price: "$68" },
      { name: "Rack of Lamb", description: "Herb-crusted with mint jus and roasted vegetables", price: "$72" },
      { name: "Duck Breast", description: "With cherry sauce and wild rice pilaf", price: "$58" },
      { name: "Veal Milanese", description: "Breaded cutlet with arugula and parmesan", price: "$54" },
    ]
  },
  {
    name: "Seafood",
    icon: Fish,
    items: [
      { name: "Atlantic Salmon", description: "With dill sauce and asparagus", price: "$48" },
      { name: "Sea Bass", description: "With lemon butter and seasonal vegetables", price: "$52" },
      { name: "Lobster Tail", description: "With drawn butter and rice pilaf", price: "$85" },
      { name: "Scallops", description: "Seared with cauliflower purée and pancetta", price: "$56" },
    ]
  },
  {
    name: "Vegetarian",
    icon: Leaf,
    items: [
      { name: "Wild Mushroom Risotto", description: "Arborio rice with mixed mushrooms and parmesan", price: "$32" },
      { name: "Eggplant Parmesan", description: "Breaded eggplant with marinara and mozzarella", price: "$28" },
      { name: "Vegetable Wellington", description: "Puff pastry with roasted vegetables and herb sauce", price: "$34" },
      { name: "Quinoa Bowl", description: "With roasted vegetables and tahini dressing", price: "$26" },
    ]
  },
  {
    name: "Desserts",
    icon: Dessert,
    items: [
      { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "$14" },
      { name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla ice cream", price: "$16" },
      { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$15" },
      { name: "Apple Tarte Tatin", description: "Caramelized apple tart with vanilla ice cream", price: "$14" },
    ]
  },
  {
    name: "Beverages",
    icon: Wine,
    items: [
      { name: "House Red Wine", description: "Glass of selected red wine", price: "$12" },
      { name: "House White Wine", description: "Glass of selected white wine", price: "$12" },
      { name: "Craft Cocktails", description: "Signature cocktails made to order", price: "$16" },
      { name: "Artisan Coffee", description: "Freshly brewed coffee or espresso", price: "$6" },
    ]
  },
];

const Dining = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  const handleReserveTable = () => {
    setIsReservationModalOpen(true);
  };

  return (
    <div 
      ref={pageRef}
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${cloudyBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Global Ripple Effects */}
      <RippleEffect containerRef={pageRef} />
      
      {/* Background overlay */}
      <div className="fixed inset-0 bg-background/80 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation alwaysScrolled />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 md:pt-32 pb-12 md:pb-20 relative">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">
                  Fine Dining Experience
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mt-4 mb-4 md:mb-6">
                  Gourmet{" "}
                  <span className="bg-gradient-luxury bg-clip-text text-transparent">
                    Restaurant
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
                  Experience culinary excellence with our award-winning chefs and carefully curated menu featuring the finest ingredients and innovative techniques.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReserveTable}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-luxury text-yellow-100 rounded-full font-medium hover:shadow-luxury transition-all duration-500 text-base md:text-lg"
                >
                  Reserve Your Table
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Today's Specials */}
          <section className="py-12 md:py-20 bg-card/50">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 mb-4 md:mb-6">
                  Today's{" "}
                  <span className="bg-gradient-emerald bg-clip-text text-transparent">
                    Specials
                  </span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Discover our chef's daily creations featuring seasonal ingredients and innovative flavors.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {todaysSpecials.map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 relative"
                  >
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      SPECIAL
                    </div>
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <motion.img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-luxury text-luxury-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        <span className="line-through text-muted-foreground mr-1 md:mr-2">{dish.originalPrice}</span>
                        {dish.price}
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {dish.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {[...Array(dish.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 fill-luxury text-luxury"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                        {dish.description}
                      </p>

                      <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{dish.prepTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Serves {dish.serves}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 md:py-3 bg-gradient-primary text-white rounded-full font-medium hover:shadow-luxury transition-all duration-300 text-sm md:text-base"
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Full Menu */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">
                  Our Menu
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 mb-4 md:mb-6">
                  Complete{" "}
                  <span className="bg-gradient-luxury bg-clip-text text-transparent">
                    Menu
                  </span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Explore our extensive menu featuring classic favorites and contemporary creations.
                </p>
              </motion.div>

              {/* Menu Categories Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
              >
                                  {menuCategories.map((category, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-1 md:space-x-2 text-xs md:text-sm ${
                        selectedCategory === category.name
                          ? 'bg-gradient-luxury text-yellow-100 shadow-luxury'
                          : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      <category.icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{category.name}</span>
                    </motion.button>
                  ))}
              </motion.div>

              {/* Menu Items */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4"
              >
                {menuCategories
                  .find(cat => cat.name === selectedCategory)
                  ?.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-card rounded-xl p-4 md:p-6 shadow-soft hover:shadow-luxury transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2 md:mb-3">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-base md:text-lg font-semibold text-luxury">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </section>

          {/* Restaurant Info & Reservation */}
          <section className="py-12 md:py-20 bg-card/50">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4 md:mb-6">
                      Visit Our{" "}
                      <span className="bg-gradient-emerald bg-clip-text text-transparent">
                        Restaurant
                      </span>
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                      Experience the perfect blend of elegant ambiance and exceptional cuisine. Our restaurant offers an intimate setting with panoramic views and world-class service.
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <ClockIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-foreground">Opening Hours</h4>
                        <p className="text-sm md:text-base text-muted-foreground">Tuesday - Sunday: 6:00 PM - 11:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-foreground">Reservations</h4>
                        <p className="text-sm md:text-base text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-foreground">Location</h4>
                        <p className="text-sm md:text-base text-muted-foreground">123 Luxury Avenue, Downtown District</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReserveTable}
                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-luxury text-yellow-100 rounded-full font-medium hover:shadow-luxury transition-all duration-500 text-base md:text-lg"
                  >
                    Reserve Your Table
                  </motion.button>
                </div>

                <div className="relative mt-8 lg:mt-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl shadow-hero"
                  >
                    <img
                      src="/dining/diningSection1.jpg"
                      alt="Restaurant Interior"
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Reservation Modal */}
      {isReservationModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-luxury mx-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">Reserve Your Table</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Please call us at +1 (555) 123-4567 to make your reservation, or visit us during our opening hours.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base text-foreground">Tuesday - Sunday: 6:00 PM - 11:00 PM</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsReservationModalOpen(false)}
              className="w-full mt-4 md:mt-6 py-2 md:py-3 bg-gradient-primary text-white rounded-full font-medium hover:shadow-luxury transition-all duration-300 text-sm md:text-base"
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dining; 