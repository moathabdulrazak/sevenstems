"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&h=1080&fit=crop"
            alt="Floral artist at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="text-xl font-sans font-light max-w-2xl mx-auto">
            Where nature meets artistry, and every bloom tells a story
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">The Artist Behind the Blooms</h2>
            <div className="space-y-4 text-lg font-sans font-light leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus 
                fringilla eleifend. Praesent nec felis sit amet tortor vehicula tempor. Mauris 
                consectetur dolor vel mi consequat, et dignissim lorem maximus.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=800&h=1200&fit=crop"
              alt="Floral designer portrait"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-12 bg-stone-100">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-12">
            To create floral experiences that transcend the ordinary, bringing the avant-garde 
            beauty of nature into life's most precious moments. We believe in the power of flowers 
            to transform spaces, evoke emotions, and create lasting memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl text-rose-400 mb-4">✿</div>
              <h3 className="text-xl mb-2">Artistry</h3>
              <p className="font-sans font-light">
                Every arrangement is a unique work of art, crafted with passion and precision
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl text-rose-400 mb-4">❀</div>
              <h3 className="text-xl mb-2">Innovation</h3>
              <p className="font-sans font-light">
                Pushing boundaries with avant-garde designs that challenge traditional floristry
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl text-rose-400 mb-4">✾</div>
              <h3 className="text-xl mb-2">Excellence</h3>
              <p className="font-sans font-light">
                Uncompromising quality in every stem, every detail, every experience
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-center mb-16">Aesthetic Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl mb-3 text-rose-400">Natural Elegance</h3>
                <p className="font-sans font-light">
                  We embrace the inherent beauty of each bloom, allowing nature's forms to guide our 
                  artistic expression while adding our distinctive creative touch.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl mb-3 text-rose-400">Mindful Curation</h3>
                <p className="font-sans font-light">
                  Every element is thoughtfully selected and placed, creating harmonious compositions 
                  that speak to both the eye and the soul.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl mb-3 text-rose-400">Seasonal Storytelling</h3>
                <p className="font-sans font-light">
                  Our designs reflect the rhythm of nature, celebrating each season's unique palette 
                  and the stories that unfold with changing blooms.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl mb-3 text-rose-400">Sustainable Beauty</h3>
                <p className="font-sans font-light">
                  Committed to eco-conscious practices, we source locally when possible and design 
                  with sustainability at the forefront of our creative process.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}