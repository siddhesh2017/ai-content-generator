"use client";
import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const footerRef = React.useRef(null);
  
  useGSAP(() => {
    // Footer entrance animation
    gsap.from(".footer-animate", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: 0.5,
      }
    });
  }, []);

  // Improved scroll function with better timing and scroll calculation
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Calculate the position with proper offset
      const navbarHeight = 100;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      // Scroll with animation
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="w-full bg-black text-white py-16 md:py-20"
      id="features-section"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section with Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Logo Section */}
          <div className="md:col-span-6 footer-animate">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E11160] via-purple-500 to-orange-500 bg-clip-text text-transparent mb-4">
              ContentCraftAI
            </h2>
            <p className="text-gray-300 mb-5 max-w-md">
              Your AI-powered content generator that transforms ideas into engaging, high-quality content with just a few keywords.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/siddhesh-jagtap-629675251" target="_blank" rel="noopener noreferrer" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/1932Jagtap" target="_blank" rel="noopener noreferrer" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/siddhesh_2283/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links - Simplified */}
          <div className="md:col-span-3 footer-animate">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                  className="text-gray-300 hover:text-pink-500 transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#section2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('section2');
                  }}
                  className="text-gray-300 hover:text-pink-500 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3 footer-animate">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">siddheshjagtap2017@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-14 h-14 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">P.E.S. Modern College of Engineering, GRGW+F5J, J.M. Road, Shivaji nagar, Pune, Maharashtra, 411005</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 footer-animate">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ContentCraftAI. All rights reserved.
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Made with</span>
              <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-400 text-sm">by ContentCraftAI Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Section5;