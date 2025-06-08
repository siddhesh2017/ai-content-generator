"use client"
import React from 'react'
import plugin from 'tailwindcss/plugin';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from 'next/link';

const Section1 = () => {

    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);

      //document.body.style.overflow = 'hidden';

      const t1 = gsap.timeline({
        onComplete: () => {
          // Enable scrolling when all animations in t1 are complete
          document.body.style.overflow = 'auto';
        }
      });
      t1.from(".we-fuel-the span", {
        y: 100,
        opacity: 0.3,
        duration: 0.2,
        stagger: 0.1,
      });

      t1.from(".future-of-creativity span",{
        y: 100,
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.1,
      });

      t1.from(".creativity-icon-div span", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.2,
      }).to(".creativity-icon-div span", {
        scale: 0.7,  // Scale down slightly 
        duration: 0.2,
        ease: "power1.out"
      }).to(".creativity-icon-div span", {
        scale: 1,    // Return to normal size
        duration: 0.2,
        ease: "easeInOut"
      });

      t1.from(".where-ai span",{
        y: 100,
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.1,
      });

      t1.from(".where-ai-img-div span", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.2,
      }).to(".where-ai-img-div span", {
        scale: 0.7,  // Scale down slightly
        duration: 0.2,
        ease: "power1.out"
      }).to(".where-ai-img-div span", {
        scale: 1,    // Return to normal size
        duration: 0.2,
        ease: "easeInOut"
      });

      t1.from(".meets-human span",{
        y: 100,
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.1,
      });

      t1.from(".imagination span",{
        y: 100,
        opacity: 0.3,
        duration: 0.1,
        stagger: 0.1,
      });

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top -10%",
          end: "top -90%",
          scrub: 5,
          //markers: true,
        },
      });

      t2.to(".we-fuel-the span", {
        y: 100,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
      });

      t2.to(".future-of-creativity span",{
        y: 100,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
      });
      t2.to(".creativity-icon-div span", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.5,
      }).to(".creativity-icon-div span", {
        scale: 0.7,  // Scale down slightly 
        duration: 0.3,
        ease: "power1.out"
      }).to(".creativity-icon-div span", {
        scale: 1,    // Return to normal size
        duration: 0.2,
        ease: "easeInOut"
      });
      t2.to(".where-ai span",{
        y: 100,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
      });
      t2.to(".where-ai-img-div span", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.5,
      });
      t2.to(".meets-human span",{
        y: 100,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
      });
      t2.to(".imagination span",{
        y: 100,
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
      });
      return () => {
        t1.kill();
        t2.kill();
      };
    });

  return (
    <div
      id='section1'
      className='w-full h-screen sticky top-0 z-10 font-urbanist flex flex-col items-center justify-center'
      style={{ background: 'radial-gradient(circle, #FF0090 0%, #E0115F 100%)' }}
    >
      {/* DESKTOP VERSION - UNCHANGED */}
      <div className="hidden md:block w-full">
        <div id='section1-title' className='text-black font-extrabold text-8xl flex flex-col items-center mt-16 gap-3'>
          {/* We Fuel The Div */}
          <div className='we-fuel-the flex justify-center items-center overflow-hidden'>
            <span className='inline-block'>W</span>
            <span className='inline-block'>E</span>
            <span className='ml-6 inline-block'>F</span>
            <span className='inline-block'>U</span>
            <span className='inline-block'>E</span>
            <span className='inline-block'>L</span>
            <span className='ml-6 inline-block'>T</span>
            <span className='inline-block'>H</span>
            <span className='inline-block'>E</span>
          </div>
          
          {/* Future Of Creativity Div */}
          <div className='flex justify-center items-center'>
            <div className='future-of-creativity flex justify-center items-center overflow-hidden'>
              <span className='text-outline-2 inline-block'>F</span>
              <span className='text-outline-2 inline-block'>U</span>
              <span className='text-outline-2 inline-block'>T</span>
              <span className='text-outline-2 inline-block'>U</span>
              <span className='text-outline-2 inline-block'>R</span>
              <span className='text-outline-2 inline-block'>E</span>
              <span className='text-outline-2 inline-block ml-6'>O</span>
              <span className='text-outline-2 inline-block'>F</span>
              <span className='text-outline-2 inline-block ml-6'>C</span>
              <span className='text-outline-2 inline-block'>R</span>
              <span className='text-outline-2 inline-block'>E</span>
              <span className='text-outline-2 inline-block'>A</span>
              <span className='text-outline-2 inline-block'>T</span>
              <span className='text-outline-2 inline-block'>I</span>
              <span className='text-outline-2 inline-block'>V</span>
              <span className='text-outline-2 inline-block'>I</span>
              <span className='text-outline-2 inline-block'>T</span>
              <span className='text-outline-2 inline-block'>Y</span>
            </div>
            {/* Creativity Icon Image Div */}
            <div className='creativity-icon-div flex justify-center items-center overflow-hidden'>
              <span className='inline-block w-44 h-24 p-2 rounded-2xl border-black border-[2px] border-dashed ml-4 overflow-hidden'>
                <img id='creativity-icon' src="/Section1/creativity-icon.png" alt='creativity_icon' className="w-full h-full object-cover rounded-xl"/>
              </span>
            </div>
          </div>
          
          <div className='flex justify-center items-center'>
            {/* Where AI Div */}
            <div className='where-ai flex justify-center items-center overflow-hidden'>
              <span className='text-outline-2 inline-block'>W</span>
              <span className='text-outline-2 inline-block'>H</span>
              <span className='text-outline-2 inline-block'>E</span>
              <span className='text-outline-2 inline-block'>R</span>
              <span className='text-outline-2 inline-block'>E</span>
              <span className='text-outline-2 inline-block ml-6'>A</span>
              <span className='text-outline-2 inline-block'>I</span>
            </div>
            
            {/* AI Icon Image Div */}
            <div className='where-ai-img-div flex justify-center items-center overflow-hidden'>
              <span className='inline-block w-32 h-18 p-2 rounded-2xl border-black border-[2px] border-dashed mx-4 overflow-hidden'>
                <img src="/Section1/flexy-lettering-ai-with-prompt-sign-and-chatbot.png" alt='creativity_icon' className="w-full h-full bg-black p-1 rounded-xl object-cover"/>
              </span>
            </div>
            {/* Meets Human Div */}
            <div className='meets-human flex justify-center items-center overflow-hidden'>
              <span className='inline-block'>M</span>
              <span className='inline-block'>E</span>
              <span className='inline-block'>E</span>
              <span className='inline-block'>T'</span>
              <span className='inline-block'>S</span>
              <span className='inline-block ml-6'>H</span>
              <span className='inline-block'>U</span>
              <span className='inline-block'>M</span>
              <span className='inline-block'>A</span>
              <span className='inline-block'>N</span>
            </div>
          </div>
          
          {/* Imagination Div */}
          <div className='imagination flex justify-center items-center overflow-hidden'>
            <span className='inline-block'>I</span>
            <span className='inline-block'>M</span>
            <span className='inline-block'>A</span>
            <span className='inline-block'>G</span>
            <span className='inline-block'>I</span>
            <span className='inline-block'>N</span>
            <span className='inline-block'>A</span>
            <span className='inline-block'>T</span>
            <span className='inline-block'>I</span>
            <span className='inline-block'>O</span>
            <span className='inline-block'>N</span>
          </div>
        </div>
      </div>
      
      {/* MOBILE VERSION - NEW SIMPLIFIED VERSION WITHOUT IMAGES */}
      <div className="md:hidden w-full px-5 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* First line */}
          <h1 className="text-5xl font-extrabold text-black mb-5">
            WE FUEL THE
          </h1>
          
          {/* Second line */}
          <h2 className="text-5xl font-bold mb-5" style={{ color: 'transparent', WebkitTextStroke: '1.5px black' }}>
            FUTURE OF CREATIVITY
          </h2>
          
          {/* Third line */}
          <div className="mb-5">
            <h2 className="text-5xl font-bold mb-2" style={{ color: 'transparent', WebkitTextStroke: '1.5px black' }}>
              WHERE AI
            </h2>
            <h2 className="text-5xl font-bold text-black">
              MEETS HUMAN
            </h2>
          </div>
          
          {/* Fourth line */}
          <h2 className="text-5xl font-bold text-black mb-8">
            IMAGINATION
          </h2>
          
          {/* Call-to-action button */}
          <Link href='/dashboard'>
            <button className="mt-2 bg-black text-white py-3 px-8 rounded-full font-bold text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section1
