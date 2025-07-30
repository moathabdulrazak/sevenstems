"use client";

import HeroSection from './components/sections/HeroSection';
import FeaturedSection from './components/sections/FeaturedSection';
import PhilosophySection from './components/sections/PhilosophySection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <PhilosophySection />
    </>
  );
}
