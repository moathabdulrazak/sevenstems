"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Garden Romance Wedding',
      description: 'An enchanting outdoor celebration with cascading florals',
      image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&h=900&fit=crop',
      height: 'tall'
    },
    {
      id: 2,
      category: 'events',
      title: 'Corporate Gala',
      description: 'Sophisticated arrangements for a luxury brand launch',
      image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?w=600&h=600&fit=crop',
      height: 'normal'
    },
    {
      id: 3,
      category: 'installs',
      title: 'Museum Installation',
      description: 'A dramatic floral sculpture in the contemporary wing',
      image: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=600&h=800&fit=crop',
      height: 'tall'
    },
    {
      id: 4,
      category: 'weddings',
      title: 'Intimate Elopement',
      description: 'Romantic blooms for a private ceremony',
      image: 'https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?w=600&h=600&fit=crop',
      height: 'normal'
    },
    {
      id: 5,
      category: 'events',
      title: 'Fashion Week Show',
      description: 'Avant-garde florals for runway presentation',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=900&fit=crop',
      height: 'tall'
    },
    {
      id: 6,
      category: 'weddings',
      title: 'Ballroom Elegance',
      description: 'Classic luxury with a modern twist',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop',
      height: 'normal'
    },
    {
      id: 7,
      category: 'installs',
      title: 'Hotel Lobby Feature',
      description: 'A living art piece that greets guests',
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop',
      height: 'normal'
    },
    {
      id: 8,
      category: 'events',
      title: 'Charity Benefit',
      description: 'Opulent designs for a cause',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=800&fit=crop',
      height: 'tall'
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'events', label: 'Events' },
    { id: 'installs', label: 'Installations' },
  ];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">Portfolio</h1>
          <p className="text-xl font-sans font-light text-gray-500 max-w-2xl mx-auto">
            A curated collection of our most memorable floral stories, each one crafted with passion and purpose
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 pb-8 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex justify-center space-x-8 border-b border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`pb-4 px-2 font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === cat.id
                    ? 'text-rose-400 border-b-2 border-rose-400'
                    : 'text-gray-600 hover:text-black'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pinterest-style Gallery */}
      <section className="px-6 md:px-12 py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer overflow-hidden bg-white ${
                  item.height === 'tall' ? 'md:row-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="font-sans font-light text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}