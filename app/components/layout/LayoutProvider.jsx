"use client";

import Navigation from './Navigation';
import CustomCursor from '../ui/CustomCursor';
import SmoothScroll from './SmoothScroll';
import PageTransition from './PageTransition';
import LoadingScreen from '../ui/LoadingScreen';
import TransitionOverlay from './TransitionOverlay';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const LayoutProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Add hydrated class to prevent flash
    document.documentElement.classList.add('hydrated');
    
    // Hide default cursor on desktop
    if (window.matchMedia('(min-width: 768px)').matches) {
      document.body.style.cursor = 'none';
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <TransitionOverlay />
      
      {isMounted && window.matchMedia('(min-width: 768px)').matches && <CustomCursor />}
      <Navigation />
      <SmoothScroll>
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
      </SmoothScroll>
    </>
  );
};

export default LayoutProvider;