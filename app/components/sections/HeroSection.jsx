"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // High-quality floral images
  const heroImages = [
    'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=1920&h=1080&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Slower transition for better UX
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt="Luxury floral arrangement"
              fill
              className="object-cover brightness-50 contrast-110"
              priority={index === 0}
              quality={95}
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          </motion.div>
        ))}
      </div>

      {/* Content with better contrast */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto w-full space-y-8 md:space-y-12">
          
          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block text-rose-300 font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Luxury Floral Design
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={titleVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-[1.1] tracking-tight">
              <motion.span 
                className="block drop-shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1.2 }}
              >
                Designed for those
              </motion.span>
              <motion.span 
                className="block mt-2 md:mt-4 text-rose-300 drop-shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1.2 }}
              >
                who want to make a scene
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-sans font-light leading-relaxed drop-shadow-md">
              Avant-garde floral artistry that transforms moments into unforgettable experiences
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8"
            variants={itemVariants}
          >
            <motion.a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-rose-500 text-white font-sans text-sm font-medium tracking-wider uppercase hover:bg-rose-600 transition-all duration-300 min-w-[200px] shadow-2xl hover:shadow-rose-500/25 backdrop-blur-sm"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/80 text-white font-sans text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px] backdrop-blur-sm shadow-xl"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-white/50 text-xs font-sans uppercase tracking-wider mt-3">
          Scroll
        </p>
      </motion.div>

      {/* Image Navigation Dots */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'bg-white scale-110'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;