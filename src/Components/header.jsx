// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120
//       }
//     }
//   };

//   const mobileMenuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3
//       }
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   return (
//     <motion.header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-[#FF29A3] pt-4 lg:py-4 shadow-lg border-b-2 border-white' 
//           : 'bg-transparent py-6'
//       }`}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//             <Link to="/">
//             <motion.div 
//             className="flex items-center justify-start lg:w-full"
//             variants={itemVariants}
//             // whileHover={{ scale: 1.05 }}
//           >
//             <img 
//               src={`${process.env.PUBLIC_URL}/logo.png`} 
//               alt='DEVOTED' 
//               className={`transition-all duration-500 ${
//                 isScrolled ? 'h-20 w-20' : 'h-24 lg:h-36 w-24 lg:w-36'
//               }`}
//             />
//           </motion.div>
//           </Link>
//           {/* Left Navigation */}
//           <motion.nav 
//             className={`hidden lg:flex items-center w-full justify-end ${isScrolled ? 'space-x-8' : 'space-x-4'}`}
//             variants={containerVariants}
//           >
//             {[ 'Scooping Ice Cream', 'Sorbet', 'Soft Serve', 'Açaí', 'Ingredients', 'About Us' ].map((item) => (
//               <motion.a
//                 key={item}
//                 href={`/#${item.toLowerCase().replace(' ', '-')}`}
//                 className={`font-medium transition-all duration-300 text-nowrap relative group ${
//                   isScrolled ? 'text-white' : 'text-white bg-[#FF29A3] hover:bg-black px-3 py-1.5 rounded-full'
//                 }`}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item}
//                 {isScrolled && (
//                 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
//                   isScrolled ? 'bg-[#c8d34a]' : 'bg-[#FF29A3]'
//                 }`} />
//                 )}
//               </motion.a>
//             ))}
//           </motion.nav>

//           {/* Centered Logo */}
        

//           {/* Right Navigation */}
//           {/* <motion.div 
//             className="hidden lg:flex items-center space-x-8 w-full justify-center"
//             variants={containerVariants}
//           >
//             {['About', 'Contact'].map((item) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className={`font-medium transition-all duration-300 relative group ${
//                   isScrolled ? 'text-black' : 'text-white'
//                 }`}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item}
//                 <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
//                   isScrolled ? 'bg-[#FF29A3]' : 'bg-[#c8d34a]'
//                 }`} />
//               </motion.a>
//             ))}
//           </motion.div> */}

//           {/* Mobile Menu Button */}
//           <motion.button
//             className={`lg:hidden text-2xl p-2 transition-colors duration-300 ${
//               isScrolled ? 'text-black' : 'text-white'
//             }`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             whileTap={{ scale: 0.9 }}
//           >
//             ☰
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-xl border-2 border-black"
//           initial="closed"
//           animate={isMobileMenuOpen ? "open" : "closed"}
//           variants={mobileMenuVariants}
//         >
//           <div className="py-6 space-y-4">
//             {[ 'Scooping Ice Cream', 'Sorbet', 'Soft Serve', 'Açaí', 'Ingredients', 'About Us' ].map((item) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="block text-black font-medium py-3 px-6 hover:bg-black hover:text-white transition-all duration-300 text-center"
//                 whileHover={{ x: 5 }}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavigation = (sectionId) => {
//     setIsMobileMenuOpen(false);
    
//     if (location.pathname !== '/') {
//       // If not on home page, navigate to home and then scroll
//       navigate('/');
//       // Use a timeout to ensure page loads before scrolling
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       // If already on home page, just scroll
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120
//       }
//     }
//   };

//   const mobileMenuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3
//       }
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const menuItems = [
//     { label: 'Scooping Ice Cream', id: 'scooping-ice-cream' },
//     { label: 'Sorbet', id: 'sorbet' },
//     { label: 'Soft Serve', id: 'soft-serve' },
//     { label: 'Açaí', id: 'açaí' },
//     { label: 'Ingredients', id: 'ingredients' },
//     { label: 'About Us', id: 'about-us' }
//   ];

//   return (
//     <motion.header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-[#FF29A3] pt-4 lg:py-4 shadow-lg border-b-2 border-white' 
//           : 'bg-transparent py-6'
//       }`}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <Link to="/">
//             <motion.div 
//               className="flex items-center justify-start lg:w-full"
//               variants={itemVariants}
//             >
//               <img 
//                 src={`${process.env.PUBLIC_URL}/logo.png`} 
//                 alt='DEVOTED' 
//                 className={`transition-all duration-500 ${
//                   isScrolled ? 'h-20 w-20' : 'h-24 lg:h-36 w-24 lg:w-36'
//                 }`}
//               />
//             </motion.div>
//           </Link>
          
//           {/* Desktop Navigation */}
//           <motion.nav 
//             className={`hidden lg:flex items-center w-full justify-end ${isScrolled ? 'space-x-8' : 'space-x-4'}`}
//             variants={containerVariants}
//           >
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavigation(item.id)}
//                 className={`font-medium transition-all duration-300 text-nowrap relative group ${
//                   isScrolled ? 'text-white' : 'text-white bg-[#FF29A3] hover:bg-black px-3 py-1.5 rounded-full'
//                 }`}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item.label}
//                 {isScrolled && (
//                   <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
//                     isScrolled ? 'bg-[#c8d34a]' : 'bg-[#FF29A3]'
//                   }`} />
//                 )}
//               </button>
//             ))}
//           </motion.nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className={`lg:hidden text-2xl p-2 transition-colors duration-300 ${
//               isScrolled ? 'text-white' : 'text-white'
//             }`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             whileTap={{ scale: 0.9 }}
//           >
//             ☰
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-xl border-2 border-black"
//           initial="closed"
//           animate={isMobileMenuOpen ? "open" : "closed"}
//           variants={mobileMenuVariants}
//         >
//           <div className="py-6 space-y-4">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavigation(item.id)}
//                 className="block text-black font-medium py-3 px-6 hover:bg-black hover:text-white transition-all duration-300 text-center w-full"
//                 whileHover={{ x: 5 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Direct scroll function for home page
  const scrollToSectionOnHome = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate header height
      const headerHeight = isScrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation
  const handleNavigation = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        scrollToSectionOnHome(sectionId);
      }, 500); // Slightly longer for page load
    } else {
      // If already on home page, scroll directly
      setTimeout(() => {
        scrollToSectionOnHome(sectionId);
      }, 50); // Small delay for menu close animation
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItems = [
    { label: 'Scooping Ice Cream', id: 'scooping-ice-cream' },
    { label: 'Sorbet', id: 'sorbet' },
    { label: 'Soft Serve', id: 'soft-serve' },
    { label: 'Açaí', id: 'açaí' },
    { label: 'Ingredients', id: 'ingredients' },
    { label: 'About Us', id: 'about-us' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#FF29A3] pt-4 lg:py-4 shadow-lg border-b-2 border-white' 
          : 'bg-transparent py-6'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (location.pathname === '/') {
                // Scroll to top on logo click when on home
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center"
          >
            <motion.div 
              className="flex items-center justify-start lg:w-full"
              variants={itemVariants}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/logo.png`} 
                alt='DEVOTED' 
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-20 w-20' : 'h-24 lg:h-36 w-24 lg:w-36'
                }`}
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className={`hidden lg:flex items-center w-full justify-end ${isScrolled ? 'space-x-8' : 'space-x-4'}`}
            variants={containerVariants}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`font-medium transition-all duration-300 text-nowrap relative group ${
                  isScrolled ? 'text-white' : 'text-white bg-[#FF29A3] hover:bg-black px-3 py-1.5 rounded-full'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {isScrolled && (
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#c8d34a]' : 'bg-[#FF29A3]'
                  }`} />
                )}
              </button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden text-2xl p-2 transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden bg-white rounded-lg mt-4 shadow-xl border-2 border-black"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="block text-black font-medium py-3 px-6 hover:bg-black hover:text-white transition-all duration-300 text-center w-full"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;