"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-stone-50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-5"
        style={{ y }}
      >
        <span className="text-[15vw] md:text-[20vw] font-light text-rose-400">7</span>
      </motion.div>
      
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10 space-y-8 md:space-y-12"
        style={{ opacity }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Philosophy
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We believe flowers are more than decoration—they're an art form that speaks to the soul. 
          Each stem is carefully selected, each arrangement thoughtfully composed to create moments 
          of extraordinary beauty.
        </motion.p>
        
        <motion.p
          className="text-base md:text-lg font-sans font-light text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our approach combines classical techniques with avant-garde vision, 
          resulting in designs that are both timeless and thoroughly modern.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl text-rose-400 font-light"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, delay: 0.8 }}
              viewport={{ once: true }}
            >
              7+
            </motion.h3>
            <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center space-y-2">
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl text-rose-400 font-light"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
            >
              500+
            </motion.h3>
            <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-gray-600">Events Designed</p>
          </div>
          <div className="text-center space-y-2">
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl text-rose-400 font-light"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, delay: 1.2 }}
              viewport={{ once: true }}
            >
              100%
            </motion.h3>
            <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-gray-600">Bespoke Design</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;