"use client";

import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);
  const blackDivRef = useRef(null);
  const underlineRef = useRef(null);
  const underline2Ref = useRef(null);
  const gridSection3Ref = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);

  
  useGSAP(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marqueeContentRef.current;
    const section = sectionRef.current;
    
    if (!marquee || !marqueeContent || !section) return;
    
    const contentWidth = marqueeContent.offsetWidth;
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);
    
    gsap.set(marqueeRef.current, {
      x: -200 // Start 200px to the left
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom 30%",
        scrub: 0.5, 
        //markers: true,
      }
    });
    
    tl.to(marqueeRef.current, {
      x: -(contentWidth + 200), // Adjust end position to account for new start
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => (parseFloat(x) % contentWidth) - 200) // Maintain the offset
      }
    });


    const t2 = gsap.timeline({
      scrollTrigger:{
        trigger: blackDivRef.current,
        start: "top center",
        end: "bottom 70%",
        scrub: 1,
        //markers: true,
      }
    });

    t2.from(blackDivRef.current, {
      width: "50%",
      y: 100,
      duration: 1.5,
      ease: "power2.inOut",
      delay: 0.3,
    }, "Animate1");

    t2.from(".what-we-built-3 span", {
      y: 100,
      opacity: 0.3,
      duration: 0.4,   
      stagger: 0.15,
    }, "Animate1");
    
    // Add underline animation
    t2.fromTo(underlineRef.current, 
      { width: "0%" },
      { width: "105%", duration: 1.0 }, // Increased from 0.5 to 1.0
      "Animate1"
    );
    
    // Set initial state for heading words (invisible, offset, and blurred)
    gsap.set(".word-animation-3", {
      y: 30,
      opacity: 0,
      filter: "blur(5px)",
      transformOrigin: "left center"
    });
    
    // Create scroll-linked timeline for heading animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: blackDivRef.current,
        start: "top -5%", // Start animation when top of black div is 80% from top of viewport
        end: "top -70%",   // Complete animation when top of black div is 30% from top of viewport
        scrub: 0.6,       // Smooth scrubbing effect with slight delay (0.6 seconds)
        //markers: true,  // Uncomment to see the trigger points for debugging
      }
    });
    
    // Animation stays the same, but will now be tied to scroll position
    headingTl.to(".word-animation-3", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.04,
      duration: 0.8, 
      delay: 0.6, // Adjusted to sync with the scroll trigger
      ease: "power2.out"
    }, "AnimateText");

    headingTl.fromTo(underline2Ref.current, 
      {
        width: "0%",
        opacity: 0
      }, 
      {
        width: "100%",
        opacity: 1,
        duration: 1.0,
        ease: "power2.out"
      }, "AnimateText"
    );

    const contentT1 = gsap.timeline({
      scrollTrigger: {
        trigger: gridSection3Ref.current,
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
        //markers: true,
      }
    });

    contentT1.from(gridSection3Ref.current, {
      y: 100,
      opacity: 0,
      duration: 1.0,  
      delay: 0.7,
    }, "AnimatePara");

    contentT1.from(para1Ref.current, {
      y: 30,
      opacity: 0,
      filter: "blur(5px)",
      duration: 0.8,     
      stagger: 0.01,     
      ease: "power2.out",
      delay: 1,        
    }, "AnimatePara");

    contentT1.from(para2Ref.current, {
      y: 30,
      opacity: 0,
      filter: "blur(5px)",
      duration: 0.8,     
      stagger: 0.01,     
      ease: "power2.out",
      delay: 1,        
    }, "AnimatePara");

    return () => {
      // Clean up
      tl.kill();
      t2.kill();
      headingTl.kill(); 
      contentT1.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const wrapWordsInSpans = (text: string): JSX.Element[] => {
    return text.split(' ').map((word: string, index: number) => (
      <span key={index} className="word-animation-3 inline-block mr-[0.25rem]">
        {word}
      </span>
    ));
  };

  const paragraph1Text = "That’s exactly why we created this AI Content Generator. It’s a smart writing assistant made to help anyone—from students to content creators—generate high-quality content quickly and easily. Whether you're writing a blog post, crafting a product description, or drafting scripts, our tool's got your back.";
  
  const paragraph2Text = "One of the best things about it? You just give a few keywords instead of typing long prompts, and the AI does the rest. This saves you tons of time and effort, making your writing process way more productive and efficient. We’ve blended AI with an intuitive UI so you can just focus on creating, not formatting. Plus, it’s fast, responsive, and adapts to your needs. Basically, we built something we’d genuinely use ourselves (and we do 👀).";
  
  return (
    <div ref={sectionRef} className='w-full h-[160vh] flex flex-col justify-between gap-0 items-center' style={{ background: 'radial-gradient(circle, #ffa528 0%, #ff6928 100%)' }}>

      {/* Marquee wrapper */}
      <div className='overflow-hidden w-full'>
        {/* Actual marquee container */}
        <div 
          ref={marqueeRef}
          className='marquee flex whitespace-nowrap'
        >
          {/* Marquee content to be duplicated */}
          <div 
            ref={marqueeContentRef}
            className='marquee-content flex items-center justify-center bg-black text-white text-6xl h-24'
          >
            <h2>AI</h2>
            
            {/* AI Image Div */}
            <div className='marquee-ai-img flex justify-center items-center overflow-hidden'>
              <span className='inline-block w-44 h-24 p-2 rounded-2xl border-black border-[2px] border-dashed -ml-2 overflow-hidden'>
                <img id='creativity-icon' src="/Section3/amethyst-chatbot.png" alt='creativity_icon' className="w-full h-full object-contain rounded-xl"/>
              </span>
            </div>
            <h2>IS JUST A TOOL, UNTIL IT FALLS IN RIGHT HANDS</h2>

            {/* smiley Image Div */}
            <div className='marquee-ai-img flex justify-center items-center overflow-hidden'>
              <span className='inline-block w-44 h-24 p-2 rounded-2xl border-black border-[2px] border-dashed -ml-5 overflow-hidden'>
                <img id='creativity-icon' src="/Section3/flamenco-678.png" alt='creativity_icon' className="w-full h-full object-contain rounded-xl"/>
              </span>
            </div>

            <span className="mx-20">.</span>
          </div>
        </div>
      </div>

      {/* What we built */}
        <div className='w-full h-auto flex flex-col items-start justify-start -mt-40'>
          <div className='text-3xl text-start font-extrabold ml-10 mt-7 text-black relative'>
            <div className='what-we-built-3 flex justify-center items-center overflow-hidden'>
              <span className='inline-block '>.</span>
              <span className='inline-block ml-2'>W</span>
              <span className='inline-block '>H</span>
              <span className='inline-block '>A</span>
              <span className='inline-block '>T</span>
              <span className='inline-block ml-2'>W</span>
              <span className='inline-block '>E</span>
              <span className='inline-block ml-2'>B</span>
              <span className='inline-block '>U</span>
              <span className='inline-block '>I</span>
              <span className='inline-block '>L</span>
              <span className='inline-block '>T</span>
            </div>
            {/* Underline element */}
            <div ref={underlineRef} className='h-[5px] bg-black absolute -bottom-3 left-0'>
            </div>
          </div>
        </div>

      {/* Black Div */}
      <div id='black-div' ref={blackDivRef} className='w-[95vw] h-[120vh] bg-black rounded-3xl -mt-40 mb-10 flex flex-col items-center justify-between'>

        {/* Imagine Having... HEADING */}
        <div className='w-full h-auto text-white text-5xl px-10 mt-8'>
          <h1 className="flex flex-col justify-start overflow-hidden">
            <div className='flex justify-start'>
              <span className="word-animation-3 inline-block mr-[0.25rem] mb-2">IMAGINE</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">HAVING</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">AN</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2 text-outline-light">IDEA</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">IN</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">YOUR</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">HEAD</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">BUT</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2 text-outline-light">STRUGGLING</span>
            </div>
            
            <div className='flex items-center '>              
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">TO</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">PUT</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">IT</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">INTO</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">WORDS—</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">BEEN</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">THERE,</span>
              <span className="word-animation-3 inline-block ml-[0.5rem] mr-[0.25rem] mb-2">RIGHT?</span>
            </div>
          </h1>

          {/* Underline for the heading */}
          <div ref={underline2Ref} className='h-[2px] mt-5 rounded-full bg-white -bottom-3 left-0'></div>
        </div>

        {/* Content of What We Built Section */}
          <div ref={gridSection3Ref} className=" grid grid-cols-2 gap-10 mt-10 h-full overflow-hidden">

            {/* Left section */}
            <div className="flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-xl bg-transperant">
                <img 
                  src="/Section3/comic-woman-with-a-laptop-feeling-confused.png" 
                  alt="Our Team" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Right section  */}
            <div className="flex flex-col mx-20 justify-center bg-blue text-white">
              <p ref={para1Ref} className="text-2xl flex justify-between items-center flex-wrap mb-6 text-gray-300">
                {wrapWordsInSpans(paragraph1Text)}
              </p>
              <p ref={para2Ref} className="text-2xl flex justify-between items-center flex-wrap mb-8 text-gray-300">
                {wrapWordsInSpans(paragraph2Text)}
              </p>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Section3