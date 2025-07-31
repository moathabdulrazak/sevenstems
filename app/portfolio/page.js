"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { storage } from '../lib/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export default function Portfolio() {
  const [firebaseImages, setFirebaseImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [brokenImages, setBrokenImages] = useState(new Set());

  // Load images from Firebase Storage
  useEffect(() => {
    const loadFirebaseImages = async () => {
      try {
        const storageRef = ref(storage, 'wedding pics');
        const result = await listAll(storageRef);
        
        // Filter out video files first and randomize order
        const imageRefs = result.items
          .filter(item => !item.name.toLowerCase().includes('.mov'))
          .sort(() => Math.random() - 0.5); // Randomize array

        // Load first few images immediately, then load rest
        const priorityCount = 6; // Load first 6 images fast
        const priorityRefs = imageRefs.slice(0, priorityCount);
        const remainingRefs = imageRefs.slice(priorityCount);

        // Load priority images first
        const priorityPromises = priorityRefs.map(async (imageRef, index) => {
          try {
            const url = await getDownloadURL(imageRef);
            return {
              id: `firebase-${index}`,
              image: url,
              height: index % 3 === 0 ? 'tall' : 'normal'
            };
          } catch (error) {
            return null;
          }
        });

        const priorityImages = await Promise.all(priorityPromises);
        const validPriorityImages = priorityImages.filter(img => img !== null);
        setFirebaseImages(validPriorityImages);
        setLoading(false);

        // Load remaining images in background without blocking UI
        if (remainingRefs.length > 0) {
          setTimeout(async () => {
            const remainingPromises = remainingRefs.map(async (imageRef, index) => {
              try {
                const url = await getDownloadURL(imageRef);
                return {
                  id: `firebase-${priorityCount + index}`,
                  image: url,
                  height: (priorityCount + index) % 3 === 0 ? 'tall' : 'normal'
                };
              } catch (error) {
                return null;
              }
            });

            const remainingImages = await Promise.all(remainingPromises);
            const validRemainingImages = remainingImages.filter(img => img !== null);
            
            setFirebaseImages(prev => [...prev, ...validRemainingImages]);
          }, 100);
        }
      } catch (error) {
        console.error('Error loading images from Firebase:', error);
        setLoading(false);
      }
    };

    loadFirebaseImages();
  }, []);

  // Handle broken images
  const handleImageError = (imageId) => {
    setBrokenImages(prev => new Set([...prev, imageId]));
  };

  // Handle image click to expand
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close expanded image
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);



  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1080&fit=crop"
            alt="Stunning wedding bouquet and floral arrangements"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 font-light drop-shadow-lg">Portfolio</h1>
          <p className="text-xl font-sans font-light max-w-2xl mx-auto drop-shadow-md">
            A curated collection of our most memorable floral stories, each one crafted with passion and purpose
          </p>
        </motion.div>
      </section>


      {/* Pinterest-style Gallery */}
      <section className="px-6 md:px-12 py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          {loading && firebaseImages.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-400"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
              {firebaseImages
                .filter(item => !brokenImages.has(item.id))
                .map((item, index) => (
                <div
                  key={item.id}
                  className={`relative cursor-pointer overflow-hidden bg-white hover:shadow-xl transition-all duration-300 ${
                    item.height === 'tall' ? 'md:row-span-2' : ''
                  }`}
                  onClick={() => handleImageClick(item)}
                >
                  <Image
                    src={item.image}
                    alt="Portfolio image"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(item.id)}
                    unoptimized={true}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl font-sans font-light text-gray-500 mb-8">
            Let's collaborate to bring your floral vision to life
          </p>
          <Link href="/contact">
            <motion.div
              className="inline-block px-8 py-4 bg-rose-400 text-white font-sans text-sm font-medium tracking-wider uppercase rounded-none hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>

            {/* Expanded Image */}
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized={true}
              />
            </div>

          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}