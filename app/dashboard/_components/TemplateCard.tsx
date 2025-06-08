import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

// Color mapping remains unchanged
const templateColors: { [key: string]: string } = {
  'generate-blog-title': '#E11060',      // Bright Pink
  'blog-content-generation': '#FF6F28',   // Bright Orange
  'blog-topic-idea': '#9747FF',           // Vibrant Purple
  'youtube-seo-title': '#00CCFF',         // Bright Blue
  'youtube-description': '#4CD964',       // Vibrant Green
  'youtube-tag': '#8A4FFF',               // Rich Purple
  'rewrite-article': '#00E5B0',           // Bright Teal
  'text-improver': '#4080FF',             // Royal Blue
  'add-emoji-to-text': '#FFCC00',         // Bright Yellow
  'instagram-post-generator': '#1DA1F2',  // Twitter Blue
  'instagram-hash-tag-generator': '#8AC249', // Bright Lime
  'instagram-post-idea-generator': '#FF5C85', // Bright Coral
  'english-grammer-checker': '#50E3C2',   // Aqua
  'write-code': '#5271FF',                // Bold Blue
  'explain-code': '#FF3B8B',              // Hot Pink
  'code-bug-detector': '#00D2C6',         // Turquoise
  'tagline-generator': '#FFDE2C',         // Bright Gold
  'product-description': '#8C52FF'        // Bold Violet
}

// Fallback color for any new templates
const defaultColor = '#CCE7FF';

function TemplateCard(item: TEMPLATE) {
  // Get card background color
  const bgColor = templateColors[item.slug] || defaultColor;
  
  // Color utility functions remain unchanged
  const getDarkerColor = (color: string, amount: number = 30) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const darkerR = Math.max(0, r - amount);
    const darkerG = Math.max(0, g - amount);
    const darkerB = Math.max(0, b - amount);
    
    return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
  };
  
  const getLighterColor = (color: string, amount: number = 80) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const lighterR = Math.min(255, r + amount);
    const lighterG = Math.min(255, g + amount);
    const lighterB = Math.min(255, b + amount);
    
    return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
  };
  
  // Generate darker and lighter versions for decorative elements
  const darkerColor = getDarkerColor(bgColor);
  const lighterColor = getLighterColor(bgColor);
  
  // Text color logic
  const isDarkColor = (color: string) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) < 140;
  }
  
  const textColor = isDarkColor(bgColor) ? 'text-white' : 'text-gray-800';
  const descColor = isDarkColor(bgColor) ? 'text-white/80' : 'text-gray-600';
  
  // Pattern type logic
  const getShapePattern = () => {
    const hash = item.slug.split('').reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0);
    return Math.abs(hash) % 4;
  };
  
  const patternType = getShapePattern();
  
  return (
    <Link href={'dashboard/content/'+item?.slug}>
      <div 
        className="p-3 xs:p-4 sm:p-5 shadow-md rounded-lg xs:rounded-xl sm:rounded-2xl border-0 flex flex-col gap-1.5 xs:gap-2 sm:gap-3 cursor-pointer h-[180px] xs:h-[220px] sm:h-[250px] hover:scale-[1.03] sm:hover:scale-105 transition-all relative overflow-hidden group"
        style={{ 
          backgroundColor: bgColor,
          backgroundImage: `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`,
          boxShadow: `0 8px 15px -3px ${bgColor}40, 0 4px 6px -4px ${bgColor}30`
        }}
      >
        {/* Decorative elements with enhanced responsive sizing */}
        {patternType === 0 && (
          <>
            {/* Responsive trapezoid */}
            <div 
              className="absolute -bottom-8 -right-8 w-28 xs:w-36 sm:w-48 h-28 xs:h-36 sm:h-48 transform rotate-12 skew-x-12 transition-all duration-700 group-hover:rotate-[20deg] group-hover:skew-x-[20deg] group-hover:scale-110 sm:group-hover:rotate-[24deg] sm:group-hover:skew-x-[24deg] sm:group-hover:scale-125"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive circle */}
            <div 
              className="absolute right-4 xs:right-6 sm:right-10 top-10 xs:top-12 sm:top-14 w-12 xs:w-16 sm:w-20 h-12 xs:h-16 sm:h-20 rounded-full transition-all duration-700 group-hover:scale-125 sm:group-hover:scale-150 group-hover:translate-x-2 sm:group-hover:translate-x-4"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 1 && (
          <>
            {/* Responsive rectangle */}
            <div 
              className="absolute bottom-0 right-0 w-24 xs:w-32 sm:w-44 h-20 xs:h-24 sm:h-32 rounded-tl-2xl xs:rounded-tl-3xl transition-all duration-700 group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-5 sm:group-hover:translate-y-5"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive square */}
            <div 
              className="absolute right-12 xs:right-16 sm:right-20 top-8 xs:top-9 sm:top-10 w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rotate-45 transition-all duration-700 group-hover:rotate-[90deg] xs:group-hover:rotate-[120deg] sm:group-hover:rotate-[135deg] group-hover:scale-110 sm:group-hover:scale-125"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 2 && (
          <>
            {/* Responsive triangle */}
            <div 
              className="absolute bottom-0 right-0 w-0 h-0 border-t-[70px] xs:border-t-[90px] sm:border-t-[120px] border-l-[70px] xs:border-l-[90px] sm:border-l-[120px] border-transparent transition-all duration-700 group-hover:border-t-[80px] group-hover:border-l-[80px] xs:group-hover:border-t-[110px] xs:group-hover:border-l-[110px] sm:group-hover:border-t-[140px] sm:group-hover:border-l-[140px]"
              style={{ borderTopColor: lighterColor }}
            ></div>
            {/* Responsive bar */}
            <div 
              className="absolute left-3 xs:left-4 top-12 xs:top-16 sm:top-20 w-16 xs:w-20 sm:w-28 h-3 xs:h-4 sm:h-5 rounded-full transition-all duration-700 group-hover:translate-x-4 xs:group-hover:translate-x-6 sm:group-hover:translate-x-8 group-hover:scale-105 sm:group-hover:scale-110"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 3 && (
          <>
            {/* Responsive single rectangle */}
            <div 
              className="absolute bottom-0 right-0 w-24 xs:w-32 sm:w-44 h-20 xs:h-24 sm:h-32 rounded-tl-2xl xs:rounded-tl-3xl rotate-6 transition-all duration-700 group-hover:rotate-[12deg] xs:group-hover:rotate-[16deg] sm:group-hover:rotate-[20deg] group-hover:translate-x-2 group-hover:translate-y-2 xs:group-hover:translate-x-3 xs:group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive circle */}
            <div 
              className="absolute left-3 xs:left-4 sm:left-6 top-8 xs:top-10 sm:top-12 w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16 rounded-full transition-all duration-700 group-hover:scale-125 xs:group-hover:scale-140 sm:group-hover:scale-150 group-hover:translate-x-3 xs:group-hover:translate-x-4 sm:group-hover:translate-x-6"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}

        {/* Card content - enhanced responsive text sizes */}
        <div className="relative z-10">
          {/* Responsive icon */}
          <div 
            className="w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 p-1.5 xs:p-2 sm:p-3 rounded-full bg-white flex items-center justify-center">
            <Image 
              src={item.icon} 
              alt={item.name} 
              width={40} 
              height={40}
              className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" 
            />
          </div>
          
          <h2 className={`font-bold text-sm xs:text-base sm:text-lg mt-1.5 xs:mt-2 sm:mt-3 ${textColor}`}>{item.name}</h2>
          <p className={`${descColor} text-xs xs:text-sm sm:text-base line-clamp-3 mt-0.5 xs:mt-1 sm:mt-2`}>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard