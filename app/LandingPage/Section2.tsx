import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from 'gsap/SplitText';

const Section2 = () => {
  const section2Ref = useRef(null);
  const underlineRef = useRef(null);
  const gridSectionRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Skip animations on mobile
    if (window.innerWidth < 768) return;
    
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 78%",
        end: "top -10%", // Extended end point for more scrolling distance
        scrub: 3,        // Increased from 2 to 3 for smoother scrubbing
        //markers: true,
      },
    });

    t1.from(section2Ref.current, {
      width: 200,
      height: 200,
      opacity: 0,
      duration: 2.5,     // Increased from 1.5 to 2.5
      pin: true,
    }, "Animate1");
    
    t1.from(".who-we-are span", {
      y: 100,
      opacity: 0.3,
      duration: 0.4,     // Increased from 0.2 to 0.4
      stagger: 0.15,     // Increased from 0.1 to 0.15
    }, "Animate1");
    
    // Add underline animation
    t1.fromTo(underlineRef.current, 
      { width: "0%" },
      { width: "105%", duration: 1.0 }, // Increased from 0.5 to 1.0
      "Animate1"
    );
    
    // Grid section animation
    t1.from(gridSectionRef.current, {
      y: 500,
      opacity: 0,
      duration: 1.0,  
      delay: -0.7,
    });

    // Paragraph text word animation
    t1.from(".word-animation", {
      y: 30,
      opacity: 0,
      filter: "blur(5px)",
      duration: 0.8,     // Increased from 0.5 to 0.8
      stagger: 0.01,     // Decreased from 0.02 to 0.01 (more words, so slower overall)
      ease: "power2.out",
      delay: -0.6,        // Increased from 0.4 to 0.6
    });
  });

  // Function to wrap each word in a span with proper TypeScript types
  const wrapWordsInSpans = (text: string): JSX.Element[] => {
    return text.split(' ').map((word: string, index: number) => (
      <span key={index} className="word-animation inline-block mr-[0.25rem]">
        {word}
      </span>
    ));
  };

  const paragraph1Text = "We're a team of four final-year IT students from P.E.S. Modern College of Engineering, working together on this AI Content Generator as our final year project. We all share a common interest in web development, AI, and building cool things that actually help people.";
  
  const paragraph2Text = "This project is our way of combining what we've learned over the years into something creative and useful. From writing scripts to designing user-friendly features, we've put our heart into making content creation easier and smarter with the help of AI.";

  return (
    <div id='section2' className='w-full bg-[#ffffff] rounded-t-lg pt-3 pb-14 sticky top-0 z-20'>
      {/* DESKTOP VERSION - Kept exactly as it was */}
      <div className='hidden md:block w-full h-[150%]'>
        <div className='w-full h-full flex flex-col items-start justify-start'>
          
          {/* WHO WE ARE Text */}
          <div id='section2-sub' className='text-3xl text-start font-extrabold ml-10 mt-7 text-black relative'>
            <div className='who-we-are flex justify-center items-center overflow-hidden'>
              <span className='inline-block '>.</span>
              <span className='inline-block ml-2'>W</span>
              <span className='inline-block '>H</span>
              <span className='inline-block '>O</span>
              <span className='inline-block ml-2'>W</span>
              <span className='inline-block '>E</span>
              <span className='inline-block ml-2'>A</span>
              <span className='inline-block '>R</span>
              <span className='inline-block '>E</span>
            </div>
            {/* Underline element */}
            <div 
              ref={underlineRef} 
              className='h-[5px] bg-black absolute -bottom-3 left-0'
            ></div>
          </div>
          
          {/* Black Div */}
          <div ref={section2Ref} className='bg-black mt-14 mb-12 w-[1410px] h-[800px] rounded-r-3xl p-16'> 
            {/* Grid layout with two columns */}
            <div ref={gridSectionRef} className="grid grid-cols-2 gap-12 h-full overflow-hidden">

              {/* Left section - Text content with word animation */}
              <div className="flex flex-col mx-24 justify-center text-white">
                <p ref={paragraph1Ref} className="text-2xl flex justify-between items-center flex-wrap mb-6 text-gray-300">
                  {wrapWordsInSpans(paragraph1Text)}
                </p>
                <p ref={paragraph2Ref} className="text-2xl flex justify-between items-center flex-wrap mb-8 text-gray-300">
                  {wrapWordsInSpans(paragraph2Text)}
                </p>
              </div>
              
              {/* Right section - Image */}
              <div className="flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-xl bg-transperant overflow-hidden">
                  <img 
                    src="/Section2/office-workspace-with-city-view.png" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* MOBILE VERSION - Simple layout without animations */}
      <div className='md:hidden w-full'>
        <div className='w-full flex flex-col items-start justify-start'>
          
          {/* Simple WHO WE ARE heading for mobile */}
          <div className='w-full px-5 mt-5'>
            <h2 className='text-2xl font-extrabold text-black relative mb-6'>
              WHO WE ARE
              <div className='h-[3px] bg-black w-full absolute -bottom-2 left-0'></div>
            </h2>
          </div>
          
          {/* Mobile black div - single column layout */}
          <div className='bg-black mx-4 mt-6 mb-8 rounded-xl p-6'>
            {/* Image first on mobile */}
            <div className="mb-6">
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/Section2/office-workspace-with-city-view.png" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Text content - no animations */}
            <div className="text-white">
              <p className="text-base mb-4 text-gray-300">
                {paragraph1Text}
              </p>
              <p className="text-base text-gray-300">
                {paragraph2Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2