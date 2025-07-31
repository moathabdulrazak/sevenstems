"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { storage } from '../../lib/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [featuredImages, setFeaturedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load featured images from Firebase
  useEffect(() => {
    const loadFeaturedImages = async () => {
      try {
        const storageRef = ref(storage, 'wedding pics');
        const result = await listAll(storageRef);
        
        // Filter and randomize images
        const imageRefs = result.items
          .filter(item => !item.name.toLowerCase().includes('.mov'))
          .sort(() => Math.random() - 0.5)
          .slice(0, 3); // Get first 3 randomized images

        const imagePromises = imageRefs.map(async (imageRef, index) => {
          try {
            const url = await getDownloadURL(imageRef);
            const titles = ["Weddings", "Events", "Installations"];
            const descriptions = [
              "Bespoke floral stories that capture your unique love",
              "Transformative installations that leave lasting impressions", 
              "Architectural florals that redefine spaces"
            ];
            
            return {
              title: titles[index] || "Featured Work",
              description: descriptions[index] || "Beautiful floral arrangements from our portfolio",
              image: url,
            };
          } catch (error) {
            return null;
          }
        });

        const images = await Promise.all(imagePromises);
        const validImages = images.filter(img => img !== null);
        setFeaturedImages(validImages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading featured images:', error);
        setLoading(false);
      }
    };

    loadFeaturedImages();
  }, []);

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

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-400"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {featuredImages.map((item, index) => (
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={true}
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
        )}

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