"use client";

import { motion } from 'framer-motion';

const Logo = ({ className = "", animate = true }) => {
  return (
    <motion.div
      className={`flex items-center space-x-4 ${className}`}
      initial={animate ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Seven elegant stems with roses */}
      <motion.svg
        width="80"
        height="50"
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g>
          {/* Stem 1 */}
          <motion.path
            d="M8 42 C8 32, 6 22, 10 12"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.circle
            cx="10"
            cy="10"
            r="3"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          />
          
          {/* Stem 2 */}
          <motion.path
            d="M18 42 C18 32, 16 22, 20 14"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
          />
          <motion.circle
            cx="20"
            cy="12"
            r="2.5"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          />
          
          {/* Stem 3 */}
          <motion.path
            d="M28 42 C28 32, 26 22, 30 8"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          />
          <motion.circle
            cx="30"
            cy="6"
            r="3.5"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          />
          
          {/* Stem 4 - Center */}
          <motion.path
            d="M38 42 C38 32, 36 22, 40 5"
            stroke="#D4A574"
            strokeWidth="2"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.circle
            cx="40"
            cy="3"
            r="4"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          />
          
          {/* Stem 5 */}
          <motion.path
            d="M48 42 C48 32, 50 22, 46 8"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.circle
            cx="46"
            cy="6"
            r="3.5"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          />
          
          {/* Stem 6 */}
          <motion.path
            d="M58 42 C58 32, 60 22, 56 14"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.circle
            cx="56"
            cy="12"
            r="2.5"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          />
          
          {/* Stem 7 */}
          <motion.path
            d="M68 42 C68 32, 70 22, 66 12"
            stroke="#D4A574"
            strokeWidth="1.5"
            fill="none"
            initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
          />
          <motion.circle
            cx="66"
            cy="10"
            r="3"
            fill="#f472b4"
            initial={animate ? { scale: 0 } : { scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          />
        </motion.g>
      </motion.svg>
      
      {/* STEMS Typography */}
      <motion.div
        className="flex flex-col"
        initial={animate ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3.6 }}
      >
        <span className="text-2xl font-light tracking-[0.3em] text-current leading-none">
          STEMS
        </span>
        <motion.div
          className="h-px bg-current mt-1 origin-left"
          initial={animate ? { scaleX: 0 } : { scaleX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;