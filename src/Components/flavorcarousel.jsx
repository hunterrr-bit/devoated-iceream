// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const FlavorCarousel = ({ flavors, direction = 'ltr', title }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const carouselRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Number of cards to show based on screen size
//   const getCardsPerView = () => {
//     if (typeof window === 'undefined') return 4;
//     const width = window.innerWidth;
//     if (width < 640) return 1;
//     if (width < 1024) return 2;
//     if (width < 1280) return 3;
//     return 4;
//   };

//   const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

//   useEffect(() => {
//     const handleResize = () => {
//       setCardsPerView(getCardsPerView());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying) {
//       intervalRef.current = setInterval(() => {
//         handleNext();
//       }, 3000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isAutoPlaying, currentIndex, flavors.length, cardsPerView]);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? Math.ceil(flavors.length / cardsPerView) - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === Math.ceil(flavors.length / cardsPerView) - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => setIsAutoPlaying(true);

//   const getCategoryColor = (category) => {
//     const colors = {
//       'Signature': 'bg-purple-100 text-purple-800',
//       'Classic': 'bg-blue-100 text-blue-800',
//       'Coffee': 'bg-amber-100 text-amber-800',
//       'Fruity': 'bg-pink-100 text-pink-800',
//       'Chocolate': 'bg-yellow-100 text-yellow-800',
//       'Seasonal': 'bg-green-100 text-green-800',
//       'Mint': 'bg-emerald-100 text-emerald-800'
//     };
//     return colors[category] || 'bg-gray-100 text-gray-800';
//   };

//   // Calculate visible flavors for current view
//   const getVisibleFlavors = () => {
//     const startIndex = currentIndex * cardsPerView;
//     const endIndex = startIndex + cardsPerView;
    
//     // If we need to wrap around (continuous loop)
//     if (endIndex > flavors.length) {
//       const remaining = endIndex - flavors.length;
//       return [...flavors.slice(startIndex), ...flavors.slice(0, remaining)];
//     }
    
//     return flavors.slice(startIndex, endIndex);
//   };

//   const visibleFlavors = getVisibleFlavors();

//   return (
//     <div className="relative">
//       {title && (
//         <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//           {title}
//         </h3>
//       )}
      
//       <div 
//         className="relative px-4 sm:px-8 md:px-12"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         ref={carouselRef}
//       >
//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrevious}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#d64972] hover:text-white transition-all duration-300 border border-gray-200"
//         >
//           <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#d64972] hover:text-white transition-all duration-300 border border-gray-200"
//         >
//           <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Carousel Container */}
//         <div className="overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
//               transition={{ duration: 0.5 }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-4"
//             >
//               {visibleFlavors.map((flavor, index) => (
//                 <motion.div
//                   key={`${currentIndex}-${index}`}
//                   className="flavor-card bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 h-72 md:h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {/* Category Badge */}
//                   <div className="flex justify-between items-start mb-2 md:mb-3">
//                     <span className={`text-xs font-semibold px-2 md:px-3 py-1 rounded-full ${getCategoryColor(flavor.category)}`}>
//                       {flavor.category}
//                     </span>
//                   </div>

//                   {/* Flavor Name */}
//                   <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight">
//                     {flavor.name}
//                   </h4>

//                   {/* Description */}
//                   <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-3 md:mb-4 line-clamp-3">
//                     {flavor.description}
//                   </p>

//                   {/* Price and Action */}
//                   <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
//                     <span className="text-base md:text-lg font-bold text-[#d64972]">
//                       {flavor.price}
//                     </span>
//                     {/* <button className="bg-[#c8d34a] text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-[#d64972] transition-all duration-300 transform hover:scale-105">
//                       Add to Cart
//                     </button> */}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: Math.ceil(flavors.length / cardsPerView) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-[#d64972] w-6' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Custom CSS for line clamp */}
//       <style jsx>{`
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FlavorCarousel;


import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlavorCarousel = ({ flavors, direction = 'ltr', title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Number of cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, flavors.length, cardsPerView]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(flavors.length / cardsPerView) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(flavors.length / cardsPerView) - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getCategoryColor = (category) => {
    const colors = {
      'Signature': 'bg-[#d64972] text-white',
      'Classic': 'bg-black text-white',
      'Coffee': 'bg-amber-900 text-white',
      'Fruity': 'bg-pink-600 text-white',
      'Chocolate': 'bg-yellow-800 text-white',
      'Seasonal': 'bg-green-800 text-white',
      'Mint': 'bg-emerald-600 text-white'
    };
    return colors[category] || 'bg-gray-800 text-white';
  };

  // Calculate visible flavors for current view
  const getVisibleFlavors = () => {
    const startIndex = currentIndex * cardsPerView;
    const endIndex = startIndex + cardsPerView;
    
    // If we need to wrap around (continuous loop)
    if (endIndex > flavors.length) {
      const remaining = endIndex - flavors.length;
      return [...flavors.slice(startIndex), ...flavors.slice(0, remaining)];
    }
    
    return flavors.slice(startIndex, endIndex);
  };

  const visibleFlavors = getVisibleFlavors();

  return (
    <div className="relative">
      {title && (
        <h3 className="text-2xl font-bold text-black mb-8 text-center">
          {title}
        </h3>
      )}
      
      <div 
        className="relative px-4 sm:px-8 md:px-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300 border-2 border-black"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300 border-2 border-black"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 p-4"
            >
              {visibleFlavors.map((flavor, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="flavor-card bg-white rounded-xl shadow-lg border-2 border-black p-4 md:p-6 h-96 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Section */}
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {/* Placeholder for actual image - replace with <img> tag when you have images */}
                    <div className="text-4xl text-gray-500">
                      {flavor.category === 'Chocolate' ? '🍫' : 
                       flavor.category === 'Coffee' ? '☕' :
                       flavor.category === 'Fruity' ? '🍓' :
                       flavor.category === 'Mint' ? '🌿' :
                       flavor.category === 'Seasonal' ? '🎄' : '🍦'}
                    </div>
                    {/* Uncomment below when you have actual images */}
                    {/* <img 
                      src={flavor.image} 
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>

                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(flavor.category)}`}>
                      {flavor.category}
                    </span>
                  </div>

                  {/* Flavor Name */}
                  <h4 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-tight">
                    {flavor.name}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-3 md:mb-4 line-clamp-2">
                    {flavor.description}
                  </p>

                  {/* Price */}
                  {/* <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-300">
                    <span className="text-base md:text-lg font-bold text-[#d64972]">
                      {flavor.price}
                    </span>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(flavors.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#d64972] w-6' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for line clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FlavorCarousel;