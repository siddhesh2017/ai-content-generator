"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Section1 from "./LandingPage/Section1";
import Section2 from "./LandingPage/Section2";
import Section3 from "./LandingPage/Section3";
import Section4 from "./LandingPage/Section4";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedNavbar from "./LandingPage/AnimatedNavbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const navbarRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollYRef = useRef(window.scrollY);
  
  // Initial animations only
  useGSAP(() => {
    // Initial setup
    gsap.set(navbarRef.current, { 
      opacity: 1,
      y: 0
    });
    
    // Entrance animation
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Nav items animation
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5
    });
  }, []);

  // Scroll direction effect with GSAP animations
  useEffect(() => {
    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
        
        // Use GSAP for the scroll-based show/hide animation
        gsap.to(navbarRef.current, {
          y: direction === 'down' ? -150 : 0, // Same as your -translate-y-[150%]
          duration: 0.5,
          ease: "power3.out"
        });
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', updateDirection);
    return () => window.removeEventListener('scroll', updateDirection);
  }, [scrollDirection]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-[#F5F5F5] font-gilroy minimal-scrollbar">
      <nav 
        ref={navbarRef}
        className="w-[97%] h-20 my-7 p-5 bg-black backdrop-blur-sm rounded-2xl fixed top-0 z-30 flex justify-start items-center gap-10 text-white"
      >
        {/* REMOVE transition-transform and conditional classes */}
        <div className="flex items-center justify-between w-full overflow-hidden px-3">
          <div className="flex items-center justify-start gap-10 w-auto">
            <span className="text-4xl bg-gradient-to-r from-[#E11160] via-purple-500 to-orange-500 bg-clip-text text-transparent">InspireAI</span>
            <a className="nav-item">Features</a>
            <a className="nav-item">Try Now</a>
          </div>
          <div>
            <button
              className="relative inline-flex h-12 w-44 active:scale-95 transistion overflow-hidden rounded-3xl p-[1px] focus:outline-none"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              >
              </span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
              >
                Get Started
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
      
      <div id='reveal-on-scroll-and-overlap' className="w-full h-auto relative" data-scroll-section>
        <Section1/>
        <Section2/>
      </div>

      <div className="w-full h-auto relative" data-scroll-section>
        <Section3/>
        <Section4/>
      </div>
    </div>
  );
}