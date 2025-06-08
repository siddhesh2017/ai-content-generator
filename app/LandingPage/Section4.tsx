import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section4 = () => {
  const sectionRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Make sure text is visible by default before animation
    gsap.set(".awesome-tool-heading span", {
      opacity: 1, // Start fully visible
      y: 0 // Start in correct position
    });
    
    const t2 = gsap.timeline({
      scrollTrigger:{
        trigger: sectionRef.current,
        start: "top 0%", // Start animation earlier
        end: "top -50%",   // End animation earlier
        scrub: 1,
        //markers: true,   // For debugging
      }
    });

    // Animate FROM offscreen TO visible position
    t2.from(".awesome-tool-heading span", {
      y: 100,
      opacity: 0, // Start completely invisible
      duration: 0.4,   
      stagger: 0.15,
    }, "Animate11");
    
    // Keep the underline animation as is
    t2.fromTo(underlineRef.current, 
      { width: "0%" },
      { width: "105%", duration: 1.0 },
      "Animate11"
    );

    return () => {
      if (t2.scrollTrigger) {
        t2.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div id='features' className='w-full h-[130vh] py-16 flex items-center bg-[#d8ffc3]' ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Responsive heading - animated desktop, simple mobile */}
        <div className='w-full flex flex-col items-start justify-start mb-28'>
          {/* Mobile heading - simple, no animation */}
          <h2 className='md:hidden text-2xl font-extrabold mx-4 text-black relative mb-2'>
            What Makes This Tool Awesome
            <div className='h-[3px] bg-black w-full absolute -bottom-2 left-0'></div>
          </h2>
          
          {/* Desktop heading - with animation (hidden on mobile) */}
          <div className='hidden md:block text-3xl text-start font-extrabold ml-10 text-black relative'>
            <div className='awesome-tool-heading flex flex-wrap justify-start items-center overflow-hidden'>
              <span className='inline-block'>.</span>
              <span className='inline-block'>W</span>
              <span className='inline-block'>H</span>
              <span className='inline-block'>A</span>
              <span className='inline-block'>T</span>
              <span className='inline-block ml-2'>M</span>
              <span className='inline-block'>A</span>
              <span className='inline-block'>K</span>
              <span className='inline-block'>E</span>
              <span className='inline-block'>S</span>
              <span className='inline-block ml-2'>T</span>
              <span className='inline-block'>H</span>
              <span className='inline-block'>I</span>
              <span className='inline-block'>S</span>
              <span className='inline-block ml-2'>T</span>
              <span className='inline-block'>O</span>
              <span className='inline-block'>O</span>
              <span className='inline-block'>L</span>
              <span className='inline-block ml-2'>A</span>
              <span className='inline-block'>W</span>
              <span className='inline-block'>E</span>
              <span className='inline-block'>S</span>
              <span className='inline-block'>O</span>
              <span className='inline-block'>M</span>
              <span className='inline-block'>E</span>
            </div>
            {/* Underline element for desktop */}
            <div ref={underlineRef} className='h-[5px] bg-black absolute -bottom-3 left-0'></div>
          </div>
        </div>
        
        {/* Main 1x3 grid - DESKTOP LAYOUT (hidden on small screens) - SCALED UP */}
        <div className="hidden md:grid md:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto h-[650px]">
          {/* First column - two boxes */}
          <div className="flex flex-col justify-between h-full gap-6 group">
            {/* Templates Feature Card - FIRST CARD - SCALED UP */}
            <div className="bg-[#013330] rounded-3xl w-full transition-all duration-500 h-[300px] group-hover:h-[180px] hover:!h-[420px] overflow-hidden relative group/card">
              {/* SVG in background with hover animation - PRESERVED */}
              <div className="absolute bottom-0 right-5 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4 transition-transform duration-500 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 211" fill="none">
                  <path d="M125 0V211H0.767578V54.1816L76.1523 0H125Z" fill="#BAF24A"></path>
                </svg>
              </div>
              
              {/* Content container */}
              <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Logo and title section */}
                <div className="flex flex-col items-center transform transition-all duration-500 group-hover/card:-translate-y-[6rem]">
                  {/* Colorful icon - completely disappears on hover - LARGER */}
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-5 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:w-0 group-hover/card:h-0 group-hover/card:mb-0 group-hover/card:mt-0">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  {/* Title with centered styling - LARGER text */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center transition-all duration-500 group-hover/card:text-3xl md:group-hover/card:text-4xl">
                    Templates That Work Like Magic
                  </h3>
                </div>
                
                {/* Visual cue for interaction - LARGER */}
                <div className="mt-6 text-sm text-white/70 opacity-70 flex items-center group-hover/card:opacity-0 transition-opacity">
                  <span>Hover to learn more</span>
                  <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Description - updated white glassomorphic effect - FOR ALL CARDS */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-7 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 border-t border-white/10 rounded-b-3xl">
                <p className="text-white text-lg leading-relaxed">
                  From blog posts to product descriptions, our ready-made templates are built to get you started fast. Just pick one, drop your keywords, and boom—done.
                </p>
              </div>
            </div>
            
            {/* Editor Feature Card - SECOND CARD - SCALED UP */}
            <div className="bg-[#FFA680] rounded-3xl w-full transition-all duration-500 h-[300px] group-hover:h-[180px] hover:!h-[420px] overflow-hidden relative group/card">
              {/* SVG in background with hover animation */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4 transition-transform duration-500 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 231" fill="none">
                  <path d="M61 231V0.554688L0 60V231H61Z" fill="#FF5C16"></path>
                </svg>
              </div>
              
              {/* Content container */}
              <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Logo and title section */}
                <div className="flex flex-col items-center transform transition-all duration-500 group-hover/card:-translate-y-[6rem]">
                  {/* Colorful icon - completely disappears on hover - LARGER */}
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-5 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:w-0 group-hover/card:h-0 group-hover/card:mb-0 group-hover/card:mt-0">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  
                  {/* Title with centered styling - LARGER text */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#661800] text-center transition-all duration-500 group-hover/card:text-3xl md:group-hover/card:text-4xl">
                    Editor That Feels Right
                  </h3>
                </div>
                
                {/* Visual cue for interaction - LARGER */}
                <div className="mt-6 text-sm text-black/70 opacity-70 flex items-center group-hover/card:opacity-0 transition-opacity">
                  <span>Hover to learn more</span>
                  <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Description - updated white glassomorphic effect - FOR ALL CARDS */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-7 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 border-t border-white/10 rounded-b-3xl">
                <p className="text-white text-lg leading-relaxed">
                  Thanks to the Toast UI Editor, editing feels natural. You get both Markdown and WYSIWYG support, so it works the way you do.
                </p>
              </div>
            </div>
          </div>
          
          {/* Middle column - one centered box - SCALED UP */}
          <div className="flex items-center justify-center py-8">
            <div className="relative group bg-black rounded-3xl w-full h-[520px] max-h-[520px] overflow-hidden border border-white/10">
              {/* Enhanced background elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#111] opacity-90"></div>
              
              {/* Enhanced glow effects - larger and more prominent */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
              
              {/* Additional background interest - floating tech elements */}
              <div className="absolute inset-0">
                {/* Animated tech grid */}
                <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse-slow"></div>
                <div className="absolute inset-x-0 bottom-10 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-pulse-slow delay-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                <div className="absolute top-[45%] right-[15%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-float delay-300"></div>
                <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-pink-400 rounded-full animate-float delay-700"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-[30%] right-[10%] w-4 h-4 border border-blue-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-[20%] left-[15%] w-6 h-6 border border-purple-500/30 rotate-45 animate-spin-slow delay-500"></div>
              </div>
              
              {/* Animated circuit patterns - enhanced */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/3 left-0 w-full h-px bg-blue-500/50 animate-pulse"></div>
                  <div className="absolute top-2/3 left-0 w-full h-px bg-purple-500/50 animate-pulse delay-300"></div>
                  <div className="absolute left-1/3 top-0 w-px h-full bg-pink-500/50 animate-pulse delay-700"></div>
                  <div className="absolute left-2/3 top-0 w-px h-full bg-blue-500/50 animate-pulse delay-500"></div>
                </div>
              </div>
              
              {/* Subtle pulsing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/5 opacity-50"></div>
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 animate-pulse-slow"></div>
              
              {/* Content container */}
              <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Logo and title section */}
                <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-16">
                  {/* Gemini logo with white background and enhanced glowing border - LARGER */}
                  <div className="relative w-32 h-32 mb-8">
                    {/* Enhanced glow - more prominent and animated */}
                    <div className="absolute animate-pulse -inset-3 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-lg animate-pulse-slow"></div>
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40 blur-md animate-pulse-slow delay-500"></div>
                    
                    {/* Logo container */}
                    <div className="relative w-full h-full rounded-2xl bg-white flex items-center justify-center p-5 border border-white/70 shadow-lg z-10">
                      <img 
                        src="/Section4/google-gemini-icon.png"
                        alt="Google Gemini AI" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Two-part title with different styling - LARGER */}
                  <div className="text-center relative">
                    <h3 className="text-4xl font-bold mb-4 relative z-10">
                      <span className="text-white font-gilroy">Powered by </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Gemini Flash 1.5
                      </span>
                    </h3>
                  </div>
                  
                  {/* Interactive dots - pulse on hover - LARGER */}
                  <div className="flex space-x-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:animate-ping-slow"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-ping-slow delay-200"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-400 group-hover:animate-ping-slow delay-400"></div>
                  </div>
                  
                  {/* Visual cue for interaction - LARGER */}
                  <div className="mt-7 text-sm text-gray-400 opacity-70 flex items-center group-hover:opacity-0 transition-opacity">
                    <span>Hover to learn more</span>
                    <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Description - hidden until hover - with rounded corners - LARGER TEXT */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-7 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-white/10 rounded-b-3xl">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We've integrated Google's Gemini Flash 1.5 to make content generation super intelligent and lightning fast. It understands your intent and delivers crisp, relevant output, instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Third column - two boxes - SCALED UP */}
          <div className="flex flex-col justify-between h-full gap-6 group">
            {/* Content History Feature Card - SCALED UP */}
            <div className="bg-[#CCE7FF] rounded-3xl w-full transition-all duration-500 h-[300px] group-hover:h-[180px] hover:!h-[420px] overflow-hidden relative group/card">
              {/* SVG in background */}
              <div className="absolute top-0 right-0 w-2/3 h-2/3 translate-x-1/4 -translate-y-1/4 transition-transform duration-500 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229 431" fill="none">
                  <path d="M229 0.486328V431H0L5.87243e-08 377.555L79.4159 299.656L79.4159 145.581L229 0.486328Z" fill="#89B0FF"></path>
                </svg>
              </div>
              
              {/* Content container */}
              <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Logo and title section */}
                <div className="flex flex-col items-center transform transition-all duration-500 group-hover/card:-translate-y-[6rem]">
                  {/* Colorful icon - completely disappears on hover - LARGER */}
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center mb-5 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:w-0 group-hover/card:h-0 group-hover/card:mb-0 group-hover/card:mt-0">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Title with centered styling - LARGER text */}
                  <h3 className="text-2xl md:text-3xl font-bold text-black text-center transition-all duration-500 group-hover/card:text-3xl md:group-hover/card:text-4xl">
                    Content History, Always There
                  </h3>
                </div>
                
                {/* Visual cue for interaction - LARGER */}
                <div className="mt-6 text-sm text-black/70 opacity-70 flex items-center group-hover/card:opacity-0 transition-opacity">
                  <span>Hover to learn more</span>
                  <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Description - updated white glassomorphic effect - FOR ALL CARDS */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-3xl transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500">
                {/* Top border - subtle light border */}
                <div className="h-px w-full bg-white/40"></div>
                
                {/* Content container with gradient blur effect */}
                <div className="relative">
                  {/* Gradient backdrop overlay - white with transparency */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 backdrop-blur-[6px]"></div>
                  
                  {/* Optional subtle pattern for added depth */}
                  <div className="absolute inset-0 opacity-5" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` 
                  }}></div>
                  
                  {/* Actual text content - sits above the gradient layers */}
                  <div className="relative p-7 z-10">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Every piece of content you generate is safely stored. Whether it's yesterday's idea or last month's masterpiece, your content history is just a click away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Keywords Feature Card - SCALED UP */}
            <div className="bg-[#EAC2FF] rounded-3xl w-full transition-all duration-500 h-[300px] group-hover:h-[180px] hover:!h-[420px] overflow-hidden relative group/card">
              {/* SVG in background */}
              <div className="absolute bottom-0 left-1/2 w-2/3 h-2/3 -translate-x-1/2 translate-y-1/3 transition-transform duration-500 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
                <svg width="100%" height="100%" viewBox="0 0 239 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.086 287.935V137.87L158.509 0H239v230.08l-66.478 57.853v.002h-.002zM239 345.79l-66.48-57.855V438H239z" fill="#d075ff"></path>
                </svg>
              </div>
              
              {/* Content container */}
              <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Logo and title section */}
                <div className="flex flex-col items-center transform transition-all duration-500 group-hover/card:-translate-y-[6rem]">
                  {/* Colorful icon - completely disappears on hover - LARGER */}
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-5 transition-all duration-500 group-hover/card:opacity-0 group-hover/card:w-0 group-hover/card:h-0 group-hover/card:mb-0 group-hover/card:mt-0">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  
                  {/* Title with centered styling - LARGER text */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3D065F] text-center transition-all duration-500 group-hover/card:text-3xl md:group-hover/card:text-4xl">
                    Just Give Keywords
                  </h3>
                </div>
                
                {/* Visual cue for interaction - LARGER */}
                <div className="mt-6 text-sm text-black/70 opacity-70 flex items-center group-hover/card:opacity-0 transition-opacity">
                  <span>Hover to learn more</span>
                  <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Description - updated white glassomorphic effect - FOR ALL CARDS */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-3xl transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500">
                {/* Top border - subtle light border */}
                <div className="h-px w-full bg-white/40"></div>
                
                {/* Content container with gradient blur effect */}
                <div className="relative">
                  {/* Gradient backdrop overlay - white with transparency */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 backdrop-blur-[6px]"></div>
                  
                  {/* Optional subtle pattern for added depth */}
                  <div className="absolute inset-0 opacity-5" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` 
                  }}></div>
                  
                  {/* Actual text content - sits above the gradient layers */}
                  <div className="relative p-7 z-10">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Our biggest flex? You don't need long prompts or complex instructions. Just toss in a few keywords, and our AI handles the rest. Prompt engineering? Already done for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout - visible only on small screens */}
        <div className="md:hidden mt-10">
          <div className="grid grid-cols-1 gap-6 max-w-xs mx-auto">
            {/* First column boxes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Templates Feature Card - MOBILE */}
              <div className="col-span-1">
                <div className="bg-[#013330] rounded-xl w-full aspect-square max-h-[140px] overflow-hidden relative group">
                  {/* SVG in background */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 211" fill="none">
                      <path d="M125 0V211H0.767578V54.1816L76.1523 0H125Z" fill="#BAF24A"></path>
                    </svg>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    {/* Colorful icon - smaller for mobile */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    
                    {/* Title - smaller for mobile */}
                    <h3 className="text-sm font-bold text-white text-center leading-tight">
                      Templates That Work
                    </h3>
                  </div>
                  
                  {/* Description overlay - visible on tap (uses active for mobile) */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-white">
                      From blog posts to product descriptions, our ready-made templates are built to get you started fast.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Editor Feature Card - MOBILE */}
              <div className="col-span-1">
                <div className="bg-[#FFA680] rounded-xl w-full aspect-square max-h-[140px] overflow-hidden relative group">
                  {/* SVG in background */}
                  <div className="absolute bottom-0 right-0 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 231" fill="none">
                      <path d="M61 231V0.554688L0 60V231H61Z" fill="#FF5C16"></path>
                    </svg>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    {/* Colorful icon - smaller for mobile */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    
                    {/* Title - smaller for mobile */}
                    <h3 className="text-sm font-bold text-[#661800] text-center leading-tight">
                      Editor That Feels Right
                    </h3>
                  </div>
                  
                  {/* Description overlay - visible on tap (uses active for mobile) */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-black">
                      Thanks to the Toast UI Editor, editing feels natural with both Markdown and WYSIWYG support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Center box - already styled properly */}
            <div className="mx-auto w-full">
              <div className="relative group bg-black rounded-2xl w-full aspect-square max-h-[240px] overflow-hidden border border-white/10">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#111] opacity-90"></div>
                
                {/* Simplified glow effects for mobile */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
                
                {/* Content container */}
                <div className="overflow-hidden absolute inset-0 flex flex-col items-center justify-center p-4">
                  {/* Logo and title section */}
                  <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-6">
                    {/* Gemini logo - smaller for mobile */}
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-md animate-pulse-slow"></div>
                      <div className="relative w-full h-full rounded-xl bg-white flex items-center justify-center p-3 border border-white/70 shadow-lg z-10">
                        <img 
                          src="/Section4/google-gemini-icon.png"
                          alt="Google Gemini AI" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Two-part title - smaller for mobile */}
                    <h3 className="text-lg font-bold mb-2 relative z-10">
                      <span className="text-white">Powered by </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Gemini Flash 1.5
                      </span>
                    </h3>
                    
                    {/* Interactive dots */}
                    <div className="flex space-x-1 mt-1">
                      <div className="w-1 h-1 rounded-full bg-blue-400 group-hover:animate-ping-slow"></div>
                      <div className="w-1 h-1 rounded-full bg-purple-400 group-hover:animate-ping-slow delay-200"></div>
                      <div className="w-1 h-1 rounded-full bg-pink-400 group-hover:animate-ping-slow delay-400"></div>
                    </div>
                  </div>
                  
                  {/* Description - hidden until hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-white/10 rounded-b-2xl">
                    <p className="text-xs text-gray-300">
                      We've integrated Google's Gemini Flash 1.5 to make content generation super intelligent and lightning fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third column boxes */}
            <div className="grid grid-cols-2 gap-4">
              {/* Content History Feature Card - MOBILE */}
              <div className="col-span-1">
                <div className="bg-[#CCE7FF] rounded-xl w-full aspect-square max-h-[140px] overflow-hidden relative group">
                  {/* SVG in background */}
                  <div className="absolute top-0 right-0 w-2/3 h-2/3 translate-x-1/4 -translate-y-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229 431" fill="none">
                      <path d="M229 0.486328V431H0L5.87243e-08 377.555L79.4159 299.656L79.4159 145.581L229 0.486328Z" fill="#89B0FF"></path>
                    </svg>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    {/* Colorful icon - smaller for mobile */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    {/* Title - smaller for mobile */}
                    <h3 className="text-sm font-bold text-black text-center leading-tight">
                      Content History
                    </h3>
                  </div>
                  
                  {/* Description overlay - visible on tap (uses active for mobile) */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-3 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-black">
                      Every piece of content you generate is safely stored. Your content history is just a click away.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Keywords Feature Card - MOBILE */}
              <div className="col-span-1">
                <div className="bg-[#EAC2FF] rounded-xl w-full aspect-square max-h-[140px] overflow-hidden relative group">
                  {/* SVG in background */}
                  <div className="absolute bottom-0 left-1/2 w-2/3 h-2/3 -translate-x-1/2 translate-y-1/3">
                    <svg width="100%" height="100%" viewBox="0 0 239 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.086 287.935V137.87L158.509 0H239v230.08l-66.478 57.853v.002h-.002zM239 345.79l-66.48-57.855V438H239z" fill="#d075ff"></path>
                    </svg>
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    {/* Colorful icon - smaller for mobile */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    
                    {/* Title - smaller for mobile */}
                    <h3 className="text-sm font-bold text-[#3D065F] text-center leading-tight">
                      Just Give Keywords
                    </h3>
                  </div>
                  
                  {/* Description overlay - visible on tap (uses active for mobile) */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-3 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-black">
                      Just toss in a few keywords, and our AI handles the rest. Prompt engineering? Already done for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4



