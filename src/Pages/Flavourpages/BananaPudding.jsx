import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";

const BananaPudding = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsContactModalOpen(false);
    };
    
    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isContactModalOpen]);

  // const ContactModal = () => (
  //   <AnimatePresence>
  //     {isContactModalOpen && (
  //       <>
  //         <motion.div
  //           className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           onClick={() => setIsContactModalOpen(false)}
  //         >
  //           <motion.div
  //             className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
  //             initial={{ scale: 0.9, opacity: 0, y: 20 }}
  //             animate={{ scale: 1, opacity: 1, y: 0 }}
  //             exit={{ scale: 0.9, opacity: 0, y: 20 }}
  //             transition={{ type: "spring", damping: 25 }}
  //             onClick={(e) => e.stopPropagation()}
  //           >
  //             <div className="bg-gradient-to-r from-[#FF29A3] to-pink-500 p-6 text-white">
  //               <div className="flex justify-between items-center">
  //                 <h3 className="text-2xl font-bold">Get In Touch</h3>
  //                 <button
  //                   onClick={() => setIsContactModalOpen(false)}
  //                   className="p-2 hover:bg-white/20 rounded-full transition-colors"
  //                 >
  //                   <FaTimes className="text-xl" />
  //                 </button>
  //               </div>
  //               <p className="mt-2 text-white/90">Contact Dan Stevens, VP of Sales</p>
  //             </div>

  //             <div className="p-6">
  //               <div className="space-y-4">
  //                 <a
  //                   href="tel:7189875819"
  //                   className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-300 group"
  //                 >
  //                   <div className="flex items-center space-x-4">
  //                     <div className="bg-[#FF29A3] text-white p-3 rounded-full">
  //                       <FaPhone className="text-lg" />
  //                     </div>
  //                     <div className="text-left">
  //                       <p className="font-semibold text-gray-800">Call Us</p>
  //                       <p className="text-[#FF29A3] font-bold text-lg">(718) 987-5819</p>
  //                     </div>
  //                   </div>
  //                   <div className="text-gray-400 group-hover:text-[#FF29A3] transition-colors">
  //                     <FaPhone className="text-sm" />
  //                   </div>
  //                 </a>

  //                 <a
  //                   href="mailto:dan@getdevoated.com"
  //                   className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-300 group"
  //                 >
  //                   <div className="flex items-center space-x-4">
  //                     <div className="bg-black text-white p-3 rounded-full">
  //                       <FaEnvelope className="text-lg" />
  //                     </div>
  //                     <div className="text-left">
  //                       <p className="font-semibold text-gray-800">Email Us</p>
  //                       <p className="text-black font-bold text-lg">dan@getdevoated.com</p>
  //                     </div>
  //                   </div>
  //                   <div className="text-gray-400 group-hover:text-black transition-colors">
  //                     <FaEnvelope className="text-sm" />
  //                   </div>
  //                 </a>
  //               </div>

  //               <div className="mt-6 pt-6 border-t border-gray-200">
  //                 <p className="text-gray-600 text-center text-sm">
  //                   We'll get back to you within 24 hours
  //                 </p>
  //               </div>
  //             </div>
  //           </motion.div>
  //         </motion.div>
  //       </>
  //     )}
  //   </AnimatePresence>
  // );
  const ContactModal = () => (
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-[#FF29A3] to-pink-500 p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <button
                      onClick={() => setIsContactModalOpen(false)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                  {/* <p className="mt-2 text-white/90">Contact Dan Stevens, VP of Sales</p> */}
                </div>
  
                {/* Modal Body */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Call Button */}
                    <a
                      href="tel:7183546990"
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#FF29A3] text-white p-3 rounded-full">
                          <FaPhone className="text-lg" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">Call Us</p>
                          <p className="text-[#FF29A3] font-bold text-lg"> (718) 354-6990</p>
                        </div>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#FF29A3] transition-colors">
                        <FaPhone className="text-sm" />
                      </div>
                    </a>
  
                    {/* Email Button */}
                    {/* <a
                      href="mailto:dan@getdevoated.com"
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-black text-white p-3 rounded-full">
                          <FaEnvelope className="text-lg" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">Email Us</p>
                          <p className="text-black font-bold text-lg">dan@getdevoated.com</p>
                        </div>
                      </div>
                      <div className="text-gray-400 group-hover:text-black transition-colors">
                        <FaEnvelope className="text-sm" />
                      </div>
                    </a> */}
                  </div>
  
                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 text-center text-sm">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
  
                {/* Modal Footer */}
                {/* <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <button
                    onClick={() => setIsContactModalOpen(false)}
                    className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div> */}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );

  const flavorImages = [
    `${process.env.PUBLIC_URL}/Images/Flavors/banana-pudding/banana1.jpg`,
    `${process.env.PUBLIC_URL}/Images/Flavors/banana-pudding/banana2.jpg`,
    `${process.env.PUBLIC_URL}/Images/Flavors/banana-pudding/banana3.jpg`,
    `${process.env.PUBLIC_URL}/Images/Flavors/banana-pudding/banana4.jpg`,
    `${process.env.PUBLIC_URL}/Images/Flavors/banana-pudding/banana5.jpg`,
  ];

  const flavorContent = {
    name: "Banana Pudding",
    category: "Classic",
    description: "Creamy banana swirled with chunks of buttery cookies for a nostalgic, sweet comfort",
    story: "Our Banana Pudding flavor captures the essence of Southern hospitality and nostalgia. We start with real banana puree made from perfectly ripe Cavendish bananas, then create a creamy pudding base that mimics the texture of traditional banana pudding. We swirl in chunks of buttery, vanilla wafer-style cookies that soften just enough to create the authentic pudding experience, while still maintaining a delightful texture contrast. This flavor is like a trip down memory lane in every scoop.",
    ingredients: [
      "Cavendish banana puree",
      "Buttery cookie pieces",
      "Non-dairy coconut cream base",
      "Organic cane sugar",
      "Vanilla extract",
      "Natural banana flavor",
      "Sea salt"
    ],
    servingSuggestions: [
      "Top with banana slices",
      "Add crushed vanilla wafers",
      "Drizzle with caramel sauce",
      "Create a banana split"
    ],
    tastingNotes: [
      "Initial: Sweet banana aroma",
      "Mid-palate: Creamy pudding texture",
      "Finish: Buttery cookies with vanilla notes"
    ],
    nutritionalInfo: [
      { label: "Serving Size", value: "1/2 cup (100g)" },
      { label: "Calories", value: "210" },
      { label: "Total Fat", value: "11g", sublabel: "Saturated Fat: 7g" },
      { label: "Carbohydrates", value: "26g", sublabel: "Fiber: 2g" },
      { label: "Protein", value: "2g" },
      { label: "Total Sugars", value: "18g", sublabel: "Includes 1g Added Sugars" }
    ],
    feature1: {
      title: "Real Banana Puree",
      description: "Made from Cavendish bananas at peak ripeness for authentic flavor"
    },
    feature2: {
      title: "Buttery Cookie Pieces",
      description: "Vanilla wafer-style cookies that soften perfectly in the ice cream"
    },
    feature3: {
      title: "Nostalgic Comfort",
      description: "Captures the classic taste of Southern banana pudding"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${flavorImages[2]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <span className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 tracking-wider">
                {flavorContent.category} COLLECTION
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {flavorContent.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                {flavorContent.description}
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                  Dairy-Free
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                  Gluten-Free
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                  Vegan
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                  Nostalgic
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-xs font-medium tracking-widest uppercase mb-6 opacity-70">
              Explore
            </span>
            <div className="flex flex-col items-center space-y-1">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6], y: [0, 2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
              What Makes It Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                flavorContent.feature1,
                flavorContent.feature2,
                flavorContent.feature3,
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-black/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={flavorImages[3]}
                alt={`${flavorContent.name} premium ingredients`}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  Southern Comfort
                </h3>
                <p className="text-base md:text-lg text-gray-200">
                  All the nostalgia of banana pudding in dairy-free form
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-white/30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                The Story Behind The Scoop
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 md:space-y-6">
                <p className="text-base md:text-lg">{flavorContent.story}</p>
                <p className="text-base md:text-lg">
                  This flavor was developed after countless trips to Southern diners and family gatherings where banana pudding was always the star dessert. We wanted to capture that same warm, comforting feeling in a scoopable format that everyone could enjoy, regardless of dietary restrictions.
                </p>
                <p className="text-base md:text-lg">
                  We source our bananas at the perfect stage of ripeness—not too green, not too brown—to ensure natural sweetness without artificial banana flavor. The cookies are baked in small batches to achieve that perfect balance between crispness and soft pudding texture.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-black/5 to-yellow-100/50 p-6 md:p-8 rounded-2xl border border-black/20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Pure Ingredients Only
                </h3>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {flavorContent.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm md:text-lg">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={flavorImages[1]}
                    alt="Premium ingredients"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: `url(${flavorImages[2]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
              Tasting Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {flavorContent.tastingNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-black to-yellow-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-lg">
                    {index === 0 ? "🍌" : index === 1 ? "🥄" : "🍪"}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {note.split(":")[0]}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {note.split(":")[1]}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                Perfect Pairings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {flavorContent.servingSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 bg-white/5 p-4 rounded-lg md:rounded-xl border border-white/10"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-black to-yellow-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-white text-base md:text-lg">
                      {suggestion}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                DETAILS
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Gallery & Nutrition
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    {[flavorImages[4], flavorImages[0]].map((img, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-xl shadow-lg"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-full md:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Storage & Serving
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-black">•</span>
                          Keep frozen at -18°C (0°F) or below
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-black">•</span>
                          Thaw for 10-15 minutes before serving
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-black">•</span>
                          Best consumed within 3 months of opening
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-full md:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-900 mb-4">Dietary Info</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {['Dairy-Free', 'Gluten-Free', 'Vegan'].map((item, index) => (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-full flex items-center justify-center border border-green-100">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="text-xs font-medium text-gray-700">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Nutrition Facts
                      </h3>
                      <p className="text-sm text-gray-500">
                        Per 1/2 cup serving
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {flavorContent.nutritionalInfo.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-gray-700">
                            {item.label}
                          </div>
                          {item.sublabel && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {item.sublabel}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Serve This Flavor?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Add Banana Pudding to your menu and bring nostalgic comfort to your customers in dairy-free form.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-yellow-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Wholesale Pricing
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View All Flavors
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal />
    </div>
  );
};

export default BananaPudding;