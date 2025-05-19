"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimatedNavbar() {
  const navbarRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  
  // Add the animation implementation using useGSAP
  useGSAP(() => {
    // Make sure navbar is visible initially
    gsap.set(navbarRef.current, { 
      opacity: 1,
      y: 0
    });
    
    // Add entrance animation
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Animate nav items
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5
    });
  }, []);

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateDirection);
    return () => window.removeEventListener('scroll', updateDirection);
  }, [scrollDirection]);

  return (
    <nav 
      ref={navbarRef}
      className={`w-[97%] h-20 my-7 p-5 bg-black backdrop-blur-sm rounded-2xl fixed top-0 z-30 flex justify-start items-center gap-10 text-white transition-transform duration-500 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center gap-10 w-full overflow-hidden">
        <h1 className="text-4xl">InspireAI</h1>
        <h4 className="nav-item">Features</h4>
        <h4 className="nav-item">Try Now</h4>
        <h4 className="nav-item"></h4>
        <h4 className="nav-item"></h4>
      </div>
    </nav>
  );
}