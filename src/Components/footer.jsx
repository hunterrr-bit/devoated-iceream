// import { motion } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Brand Column */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <img 
//                 src={`${process.env.PUBLIC_URL}/logo.jpg`} 
//                 alt='DEVOATED' 
//                 className="h-12 w-12 rounded-lg object-cover"
//               />
//               {/* <span className="text-2xl font-bold">DEVOTED</span> */}
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Crafting exceptional dairy-free ice cream that redefines what plant-based desserts can be.
//             </p>
//             <div className="flex space-x-4">
//               {['Instagram', 'Facebook', 'Twitter'].map((social) => (
//                 <a 
//                   key={social}
//                   href="#" 
//                   className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
//                 >
//                   {social}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Explore</h4>
//             <ul className="space-y-2">
//               {['About', 'Flavors', 'Locator', 'Contact'].map((link) => (
//                 <li key={link}>
//                   <a 
//                     href="#" 
//                     className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Business */}
//           {/* <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Business</h4>
//             <ul className="space-y-2">
//               {['Wholesale Inquiry', 'Careers', 'Press Kit', 'Food Service'].map((link) => (
//                 <li key={link}>
//                   <a 
//                     href="#" 
//                     className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Contact & Support */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Get in Touch</h4>
//             <div className="space-y-2 text-gray-400">
//               <p>Have questions about our products?</p>
//               <a 
//                 href="mailto:hello@devoted.com" 
//                 className="text-[#c8d34a] hover:text-white transition-colors duration-300 block"
//               >
//                 hello@devoted.com
//               </a>
//               <p className="text-sm mt-4">
//                 For wholesale inquiries:
//                 <a 
//                   href="mailto:dan@getdevoated.com" 
//                   className="text-[#c8d34a] hover:text-white transition-colors duration-300 block"
//                 >
//                   dan@getdevoated.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Allergen Notice */}
//         <div className="mt-12 pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-400 text-sm">
//             *All our products are free from the 10 priority food allergens: milk, egg, peanut, 
//             soy, wheat, tree nut, shellfish, fish, sesame, mustard
//           </p>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © {currentYear} DEVOTED. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
//                 <a 
//                   key={link}
//                   href="#" 
//                   className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mission Statement Banner */}
//       <div className="bg-[#c8d34a] py-8">
//         <div className="container mx-auto px-6 text-center">
//           <motion.p 
//             className="text-[#d64972] font-bold text-xl md:text-2xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             We make dairy-free ice cream that ends dessert FOMO for good.
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      {/* <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={`${process.env.PUBLIC_URL}/logo.png`} 
                alt='DEVOATED' 
                className="h-20 w-20 rounded-lg object-cover"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting exceptional dairy-free ice cream that redefines what plant-based desserts can be.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-2">
              {['About', 'Flavors', 'Locations', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Have questions about our products?</p>
              <a 
                href="mailto:hello@devoted.com" 
                className="text-[#c8d34a] hover:text-white transition-colors duration-300 block"
              >
                hello@devoted.com
              </a>
              <p className="text-sm mt-4">
                For wholesale inquiries:
                <a 
                  href="mailto:dan@getdevoated.com" 
                  className="text-[#c8d34a] hover:text-white transition-colors duration-300 block"
                >
                  dan@getdevoated.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DEVOTED. All rights reserved.
          </p>
        </div>
      </div> */}

      {/* Bottom Bar */}
      {/* <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DEVOTED. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-400 hover:text-[#c8d34a] transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Mission Statement Banner */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            className="text-white text-3xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ending dessert FOMO for Good
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;