"use client";
import Link from "next/link";
import Section1 from "./LandingPage/Section1";
import Section2 from "./LandingPage/Section2";
import Section3 from "./LandingPage/Section3";
import Section4 from "./LandingPage/Section4";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedNavbar from "./LandingPage/AnimatedNavbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Section5 from "./LandingPage/Section5";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollYRef = useRef(window.scrollY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }

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
  }, [scrollDirection, mobileMenuOpen]);

  // Handle mobile menu animations
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    
    if (mobileMenuOpen) {
      // Animate menu opening
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      // Animate menu closing
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToFeatures = () => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Use different IDs based on screen size
    const targetId = window.innerWidth >= 768 ? 'features-section' : 'features';
    
    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    // Calculate position with different offsets for desktop vs mobile
    const offset = window.innerWidth >= 768 ? 250 : 120; // Much larger offset for desktop
    
    // Use scrollTo with offset
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: targetElement,
        offsetY: offset,
        autoKill: false
      },
      ease: "power3.inOut"
    });
  };

  const scrollToAboutUs = () => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Find the target element
    const targetElement = document.getElementById('section2-sub');
    if (!targetElement) return;
    
    // Calculate position with increased offset for better visibility
    const offset = 200; // Increased from 120 to 200 for better visibility
    
    // Use scrollTo with offset
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: targetElement,
        offsetY: offset,
        autoKill: false
      },
      ease: "power3.inOut"
    });
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-[#F5F5F5] font-gilroy no-scrollbar"> 
      <nav 
        ref={navbarRef}
        className="w-[97%] h-20 my-7 p-5 bg-black backdrop-blur-sm rounded-2xl fixed top-0 z-30 flex justify-start items-center gap-10 text-white"
      >
        {/* Keeping original structure intact */}
        <div className="flex items-center justify-between w-full overflow-hidden px-3">
          {/* Left side with logo and nav items - same as original */}
          <div className="flex items-center justify-start gap-10 w-auto">
            <span className="text-2xl md:text-3xl bg-gradient-to-r from-[#E11160] via-purple-500 to-orange-500 bg-clip-text text-transparent">ContentCraftAI</span>
            {/* Only show nav items on desktop */}
            <a 
              className="nav-item hidden md:block cursor-pointer hover:text-pink-500 transition-colors"
              onClick={scrollToFeatures}
            >
              Features
            </a>
            <a className="nav-item hidden md:block cursor-pointer hover:text-pink-500 transition-colors" onClick={scrollToAboutUs}>
              About Us
            </a>
          </div>
          
          {/* Right side with button - same as original */}
          <div className="flex items-center gap-5">
            <UserButton appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: '45px',
                  height: '45px',
                },
                userButtonBox: {
                  height: '45px',
                  width: '45px'
                }
              }
            }} />
            {/* Desktop button */}
            <div className="hidden md:block">
              <Link href={"/dashboard"}>
                <button
                  className="relative inline-flex h-12 w-44 active:scale-95 transition overflow-hidden rounded-3xl p-[1px] focus:outline-none"
                >
                  <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                  >
                  </span>
                  <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2"
                  >
                    Get Started
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
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
              </Link>
            </div>
            
            {/* Mobile Menu Toggle Button - only visible on mobile */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white rounded-full my-1.5 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay - only visible when toggled */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-[5.5rem] left-[1.5%] right-[1.5%] z-20 bg-black bg-opacity-95 rounded-xl overflow-hidden md:hidden h-0 opacity-0"
        style={{ height: 0 }}
      >
        <div className="flex flex-col items-center py-8 px-5">
          <a 
            className="text-white text-xl py-4 hover:text-pink-500 transition-colors"
            onClick={scrollToFeatures}
          >
            Features
          </a>
          <a 
            className="text-white text-xl py-4 hover:text-pink-500 transition-colors"
            onClick={scrollToAboutUs}
          >
            About Us
          </a>
          <Link href={"/dashboard"} className="w-full mt-4">
            <button className="relative inline-flex h-12 w-full active:scale-95 transition overflow-hidden rounded-3xl p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
              </span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-7 text-base font-medium text-white backdrop-blur-3xl gap-2">
                Get Started
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Page Content */}
      <div id='reveal-on-scroll-and-overlap' className="w-full h-auto relative" data-scroll-section>
        <Section1/>
        <Section2/>
      </div>

      <div className="w-full h-auto relative" data-scroll-section>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>
    </div>
  );
}