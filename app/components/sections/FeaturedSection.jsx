"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = [
    {
      title: "Weddings",
      description: "Bespoke floral stories that capture your unique love",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
    },
    {
      title: "Events",
      description: "Transformative installations that leave lasting impressions",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=1200&fit=crop",
    },
    {
      title: "Installations",
      description: "Architectural florals that redefine spaces",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">Featured Work</h2>
          <p className="text-gray-600 font-sans font-light text-base md:text-lg max-w-2xl mx-auto">
            Each arrangement tells a story, crafted with intention and artistic vision
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featured.map((item, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer space-y-6"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-light group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sans font-light text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-black text-white font-sans text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;