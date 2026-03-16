import React from "react";
import { motion, AnimatePresence  } from "framer-motion";
// import Header from "./Components/header";
// import Footer from "./Components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaFileDownload, FaLongArrowAltDown, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
    // Keyboard event for closing modal with Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsContactModalOpen(false);
    };
    
    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isContactModalOpen]);
  const getCategoryColor = (category) => {
    const colors = {
      Signature: "bg-[#FF29A3] text-white",
      Classic: "bg-black text-white",
      Coffee: "bg-amber-900 text-white",
      Fruity: "bg-pink-600 text-white",
      Chocolate: "bg-yellow-800 text-white",
      Seasonal: "bg-green-800 text-white",
      Mint: "bg-emerald-600 text-white",
      Sorbet: "bg-purple-600 text-white",
    };
    return colors[category] || "bg-gray-800 text-white";
  };

  const heroImages = [
        `${process.env.PUBLIC_URL}/Images/Hero_Images/image3.png`,

    `${process.env.PUBLIC_URL}/Images/Hero_Images/image1.png`,
    `${process.env.PUBLIC_URL}/Images/Hero_Images/image2.png`,

  ];

  const gelatoFlavors = [
    {
      name: "Vanilla Bourbon Brownie",
      description:
        "Kentucky bourbon-fueled vanilla —with notes of butterscotch and honey—laden with chewy brownie bits",
      category: "Signature",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_03.jpg`,
    },
    {
      name: "Mint Fudge Cookie Crunch",
      description: "Fudge swirled green mint with chunks of chocolatey cookies",
      category: "Mint",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_05.jpg`,
    },
    {
      name: "Salted Malted Caramel",
      description:
        "Gooey caramel balanced with a touch of sea salt. Sweet and savory in perfect harmony",
      category: "Signature",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_07.jpg`,
    },
    {
      name: "Chocolate Overload",
      description:
        "A chocolate triple threat loaded with heaps of brownie pieces and crunchy chocolate chunks",
      category: "Chocolate",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_10.jpg`,
    },
    {
      name: "Coffee Affogato Caramel Swirl",
      description:
        "Velvety coffee cream intertwined with soft caramel ribbons— a café classic reimagined",
      category: "Coffee",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_17.jpg`,
    },
    {
      name: "Mango Coconut",
      description:
        "Creamy coconut meets tangy sweet mango in this tango of flavors",
      category: "Fruity",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_19.jpg`,
    },
    {
      name: "Black Raspberry Chocolate Chunk",
      description: "Vine ripe, purple berries and chocolate.<br /> A classic.",
      category: "Fruity",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_25.jpeg`,
    },
    // {
    //   name: "Vanilla Raspberry Fudge Crunch",
    //   description:
    //     "Bright raspberry-kissed vanilla with chocolate cookies and luscious fudge ribbons",
    //   category: "Fruity",
    //   image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_22.jpg`,
    // },
    {
      name: "Cherry Vanilla",
      description:
        "Classic creamy vanilla swirled with juicy cherry ribbons and delightful cherry chunks in every bite",
      category: "Fruity",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_41.png`,
    },
    {
      name: "Black Forest Black Cherry",
      description:
        "Decadent chocolate with ripe black cherries and chewy brownie pieces",
      category: "Chocolate",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_32.jpg`,
    },
    {
      name: "Cinnamon Cookie Crunch",
      description:
        "Velvety vanilla with cinnamon spice and crisp vanilla cookie chunks",
      category: "Seasonal",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_34.jpg`,
    },
    {
      name: "Banana Pudding",
      description:
        "Creamy banana swirled with chunks of buttery cookies for a nostalgic, sweet comfort",
      category: "Classic",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_36.jpg`,
    },
    // {
    //   name: "Chocolate Peanut Butter",
    //   description:
    //     "Dark chocolate laced with fat ribbons of creamy peanut butter",
    //   category: "Chocolate",
    //   image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_39.jpg`,
    // },
    {
      name: "Cookie Butter",
      description:
        "Silky spiced cookie butter folded into sweet cream with swirls of caramelized biscuit goodness",
      category: "Classic",
      image: `${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop_40.jpg`,
    },
  ];

  const sorbetFlavors = [
    {
      name: "Punchy Lemon",
      description: "Bright lemon with a zesty kick that awakens the palate",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_03.jpg`,
    },
    {
      name: "Golden Mango",
      description: "Juicy mango with a smooth, tropical sweetness",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_05.jpg`,
    },
    {
      name: "Creamy Coconut",
      description: "Ultra rich coconut with a creamy texture",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_07.jpg`,
    },
    {
      name: "Juicy Peach",
      description: "Ripe peach with soft, velvety sweetness",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_09.jpg`,
    },
    {
      name: "Berry Fusion",
      description:
        "A far-out mix of strawberries, blueberries, and raspberries - tart and sweet",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_16.jpg`,
    },
    {
      name: "Raspberry",
      description: "Bold raspberry with a tangy, vibrant flavor",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_17.jpg`,
    },
    {
      name: "Strawberry",
      description: "Juicy strawberry with fresh, naturally sweet notes",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_18.jpg`,
    },
    {
      name: "Pineapple",
      description: "Pineapple with tangy, tropical brightness",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_19.jpg`,
    },
    {
      name: "Orange",
      description: "Vibrant orange with a zesty, refreshing taste",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_27.jpg`,
    },
    {
      name: "Acai",
      description: "Rich, berry-forward açaí with subtle earthy undertones",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_28.jpg`,
    },
    {
      name: "Blood Orange",
      description: "Blood orange with bold tang and lightly floral hints",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_25.jpg`,
    },
    {
      name: "Honeydew",
      description: "Mellow honeydew with gentle sweetness and a clean finish",
      category: "Sorbet",
      image: `${process.env.PUBLIC_URL}/Images/Sorbets/sorbets_26.jpg`,
    },
  ];

  const SafeHTML = ({ html, className = "" }) => (
  <p 
    className={className}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {heroImages.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                {/* <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                /> */}
                <img
                  src={imageUrl}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative text-center flex flex-col items-center justify-center text-white px-6 z-20">
          <motion.h1
            className="text-5xl md:text-7xl max-w-2xl text-[#FF29A3] font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            THE CREAM OF THE DAIRY-FREE CROP
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your one-stop shop for non-dairy indulgence: ice cream, sorbet,
            soft-serve mixes, and açaí bowls
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* <a href="mailto:devoatedicecreams@gmail.com"> */}
  <button onClick={() => setIsContactModalOpen(true)} className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF29A3] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
    Get In Touch
  </button>
{/* </a> */}
{/* <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=devoatedicecreams@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF29A3] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
    Get In Touch
  </button>
</a> */}

          </motion.div>
        </div>
      </section>

      {/* Premium Statement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <img
                className="h-64 w-64 object-contain"
                src={`${process.env.PUBLIC_URL}/penguin-mascot.png`}
                alt="Devoted Penguin Mascot"
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF29A3] mb-4">
                We didn't just copy ice cream we reinvented it
              </h2>
              <p className="text-lg md:text-xl tracking-wide font-medium text-gray-700 mb-4">
                The only dairy-free ice cream that rivals real cream — silky,
                rich, and indulgent.
              </p>
              <p className="text-xl md:text-2xl font-bold text-black">
                Nothing else comes close.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors Section with Background Image */}
      <section id="scooping-ice-cream" className="py-20 relative min-h-screen scroll-mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Flavors/scoop-shop-background_02.jpg)`,
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Gelato Flavors */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#FF29A3] mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              SCOOP SHOP FLAVORS
            </motion.h2>
            {/* <motion.p
              className="text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our complete collection of handcrafted dairy-free creations
            </motion.p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {gelatoFlavors.map((flavor, index) => (
              <Link
      to={`/flavor/${flavor.name.toLowerCase().replace(/\s+/g, '-')}`}
      key={`gelato-${index}`}
    >
              <motion.div
                key={`gelato-${index}`}
                className="bg-transparent  overflow-hidden transition-all duration-300  hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative bg-gray-100">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col items-center justify-center">
                  {/* <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(flavor.category)}`}>
                      {flavor.category}
                    </span>
                  </div> */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight text-center">
                    {flavor.name}
                  </h3>
                  <SafeHTML 
        html={flavor.description}
        className="text-sm leading-relaxed text-center text-white"
      />
                </div>
              </motion.div>
               </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-[#FF29A3] w-full">
            <div className="flex gap-3 items-center justify-start">
              <h3 className="text-lg font-bold py-1.5 px-2 rounded-full border border-[#FF29A3]">
                GF
              </h3>
              <p className="text-lg">Gluten Free</p>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <h3 className="text-lg font-bold py-1.5 px-2 rounded-full border border-[#FF29A3]">
                AF
              </h3>
              <p className="text-lg">
                Allergen Free. Contains no added Top 10 major Allergens.
                Produced in a facility that also produces milk, soy, wheat and
                tree nuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sorbets Section */}
      <section id="sorbet" className="py-20 relative min-h-screen mt-24 scroll-mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Sorbets/sorbet-background_04.jpg)`,
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Sorbets Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#FF29A3] mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              REFRESHING SORBETS
            </motion.h2>
          </div>

          {/* Sorbets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {sorbetFlavors.map((sorbet, index) => (
              <motion.div
                key={`sorbet-${index}`}
                className="bg-transparent overflow-hidden transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative bg-purple-100">
                  <img
                    src={sorbet.image}
                    alt={sorbet.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight text-center">
                    {sorbet.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white">
                    {sorbet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Allergen Info */}
          {/* <div className="flex flex-col gap-4 text-[#FF29A3] w-full">
      <div className="flex gap-3 items-center justify-start">
        <h3 className="text-lg font-bold py-1.5 px-2 rounded-full border border-[#FF29A3]">GF</h3>
        <p className="text-lg">Gluten Free</p>
      </div>
      <div className="flex gap-3 items-center justify-start">
        <h3 className="text-lg font-bold py-1.5 px-2 rounded-full border border-[#FF29A3]">AF</h3>
        <p className="text-lg">Allergen Free. Contains no added Top 10 major Allergens. Produced in a facility that also produces milk, soy, wheat and tree nuts</p>
      </div>
    </div> */}
        </div>
      </section>

      <section id="soft-serve" className="py-20 relative min-h-[550px] mt-24 scroll-mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Soft-Serve/soft-serve-background_06.jpg)`,
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Sorbets Header */}
          <div className="text-center mb-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#FF29A3] mb-4 uppercase"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Wholesale Soft-Serve Mix
            </motion.h2>
          </div>

          {/* Sorbets Grid */}
          <div className="flex flex-col mb-10 items-center justify-center">
            <motion.p
              className="text-xl mb-4 text-center leading-relaxed  text-gray-200 max-w-[44rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Most dairy free soft-serve doesn't hit it, Ours Does.<br /> It’s creamy,
              rich, and straight-up fire.
            </motion.p>
            <motion.p
              className="text-xl mb-8 text-center leading-relaxed  text-gray-200 max-w-[45rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Works perfectly for soft serve, hard-pack and milkshakes
            </motion.p>
            <button className=" text-white bg-[#FF29A3] w-fit py-2 px-8 rounded-full my-4">
              <div className="flex items-center justify-center gap-3">
                <FaFileDownload className="text-3xl" />
                <div className="flex flex-col text-center">
                  <p className=" text-base">Download Chocolate & Vanila</p>
                  <p className=" text-base">Soft Serve Spec Sheet</p>
                </div>
              </div>
            </button>
            <motion.p
              className="text-xl mt-6 text-center leading-relaxed text-gray-200 max-w-[40rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Runs on Taylor, ElectroFreeze, and other machines –
              Performance not hindered by added pasteurization cycles within
              machine – Shelf Life: 365days frozen; use within 14 days after
              thawing. 2/2.5 gallon bags
            </motion.p>
          </div>
        </div>
      </section>

      <section id="açaí" className="py-20 relative min-h-[450px] mt-24 scroll-mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover w-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Acai-Bowl/acai-background_02.jpg)`,
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Sorbets Header */}
          <div className="w-full flex items-center justify-center text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#FF29A3] mb-4 bg-white/40 w-fit px-4 pb-1.5 rounded-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Açaí Bowl & Smoothie Bases
            </motion.h2>
          </div>

          {/* Sorbets Grid */}
          <div className="flex flex-col mb-10 items-center justify-center">
            <motion.p
              className="text-xl mb-6 text-center leading-relaxed  text-gray-200 max-w-[44rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Made from pure, peak-harvest açaí for bold color, deep berry
              flavor, and natural antioxidants — never diluted or overly
              sweetened.
            </motion.p>
            <motion.p
              className="text-xl mb-6 text-center leading-relaxed text-gray-200 max-w-[45rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              The perfect start to blend with your creation.
            </motion.p>
            <button className=" text-white bg-[#FF29A3] w-fit py-2 px-8 rounded-full mt-4">
              <div className="flex items-center justify-center gap-3">
                <FaFileDownload className="text-3xl" />
                <div className="flex flex-col text-center">
                  <p className="font-bold text-lg">Download Açaí Spec Sheet</p>
                  {/* <p className="font-bold text-lg">Soft Serve Spec Sheet</p> */}
                </div>
              </div>
            </button>
            {/* <motion.p
              className="text-xl md:text-2xl !font-bold mt-6 text-center leading-relaxed text-gray-200 max-w-[45rem] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Packed 2/2.5 GAL
            </motion.p> */}
          </div>
        </div>
      </section>

      {/* Business Math Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The New Math of Dessert
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#c8d34a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The dairy-free crowd isn't niche anymore—it's your roommate, your
              best friend, your next customer. They want real scoops, not sad
              substitutions.
            </p>

            <div className="text-3xl md:text-4xl font-bold text-[#FF29A3] mb-6">
              Devoted = (More Fans + More Sales) – Dairy
            </div>

            <p className="text-2xl text-[#c8d34a] font-bold italic">
              Now that's the kind of math we like.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6">
              We don't have some sappy story about starting this business 100
              years ago on our great-grandparents' farm — but collectively,
              we've got 100+ years of ice cream experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From owning factories to running some of the most well-known
              brands in the business, we've got stories worth scooping.
            </p>
            <div className="bg-[#FF29A3] text-white p-6 rounded-2xl inline-block">
              <p className="text-xl font-bold">ENDING DESSERT FOMO FOR GOOD.</p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Serve DEVOTED?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why say no to more fans—and more sales? Our dairy-free lineup keeps
            flavor first, fun intact, and profits sweet.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:dan@getdevoated.com"
              className="bg-[#c8d34a] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF29A3] hover:text-white transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
            >
              dan@getdevoated.com
            </a>
          </motion.div>
        </div>
      </section> */}

      {/* Final Mission Statement */}
      {/* <section className="py-16 bg-black text-white border-t-4 border-[#c8d34a]">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-[#c8d34a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Never with dairy, gluten, artificial flavors or seed oils.
          </motion.p>
        </div>
      </section> */}

      {/* From Pros to Pros Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.div
              id="ingredients"
              className="text-center mb-12 scroll-mt-36"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#FF29A3] mb-8">
                FROM PROS TO PROS
              </h2>

              {/* Math Equation */}
              <div className="text-3xl md:text-4xl font-medium text-black mb-2">
                Devoted<sup class="align-super text-xs">3</sup> = (More Fans +
                More Sales) - Dairy
              </div>

              <p className="text-3xl md:text-4xl font-medium text-black mb-10">
                Now that's the kind of math we like.
              </p>

              {/* Description */}
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                From scoop shops to college dining halls and restaurants, our
                versatile product formats fit seamlessly into any operation.
                With marketing and merchandising support to boost sell-through,
                we make it easy to serve something everyone loves.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-10 items-center justify-center mb-12">
                {/* <a
                  href="mailto:dan@getdevoated.com"
                  // className="bg-[#FF29A3] text-white w-fit px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
                > */}
                <button onClick={() => setIsContactModalOpen(true)} className="bg-[#FF29A3] text-white w-fit px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent">
                  Get in Touch
                </button>
                {/* </a> */}
                <p className=" text-[#FF29A3] px-8 py-4 rounded-full tracking-wide font-bold text-4xl ">
                  DOWNLOAD NUTRITIONAL INGREDIENTS
                </p>
              </div>

              {/* Icons Section */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 mb-16">
                <button className="flex items-center text-white !min-w-32 bg-black rounded-full py-3 px-4 justify-center gap-2 text-center">
                  <FaLongArrowAltDown className="text-lg" />
                  <p className="font-bold text-lg">Scoop Shop</p>
                </button>
                <button className="flex items-center text-white !min-w-32 bg-black rounded-full py-3 px-4 gap-2 justify-center text-center">
                  <FaLongArrowAltDown className="text-lg" />
                  <p className="font-bold text-lg">Soft Serve</p>
                </button>
                <button className="flex items-center text-white !min-w-32 bg-black rounded-full py-3 px-4 gap-2 justify-center text-center">
                  <FaLongArrowAltDown className="text-lg" />
                  <p className="font-bold text-lg">Açaí</p>
                </button>
              </div>
            </motion.div>

            {/* About Us Section */}
            <motion.div
              id="about-us"
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
                ABOUT US
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We don't have some sappy story about starting this business 100
                years ago on our great-grandparents' farm — but collectively,
                we've got 100+ years of ice cream experience. From owning
                factories to running some of the most well-known brands in the
                business, we've got stories worth scooping.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactModal />
    </div>
  );
};


export default Home;