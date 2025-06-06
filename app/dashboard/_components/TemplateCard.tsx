import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

// Updated color mapping with index signature for TypeScript
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
  
  // Function to create a darker version of the card color for contrast
  const getDarkerColor = (color: string, amount: number = 30) => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Darken each component
    const darkerR = Math.max(0, r - amount);
    const darkerG = Math.max(0, g - amount);
    const darkerB = Math.max(0, b - amount);
    
    // Convert back to hex
    return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
  };
  
  // Function to create a lighter version of the card color for contrast
  const getLighterColor = (color: string, amount: number = 80) => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Lighten each component
    const lighterR = Math.min(255, r + amount);
    const lighterG = Math.min(255, g + amount);
    const lighterB = Math.min(255, b + amount);
    
    // Convert back to hex
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
  
  // Pattern type logic (unchanged)
  const getShapePattern = () => {
    const hash = item.slug.split('').reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0), 0);
    return Math.abs(hash) % 4;
  };
  
  const patternType = getShapePattern();
  
  return (
    <Link href={'dashboard/content/'+item?.slug}>
      <div 
        className="p-4 sm:p-5 shadow-md rounded-xl sm:rounded-2xl border-0 flex flex-col gap-2 sm:gap-3 cursor-pointer h-[220px] sm:h-[250px] hover:scale-105 transition-all relative overflow-hidden group"
        style={{ 
          backgroundColor: bgColor,
          backgroundImage: `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`,
          boxShadow: `0 8px 15px -3px ${bgColor}40, 0 4px 6px -4px ${bgColor}30`
        }}
      >
        {/* Decorative elements with responsive sizing */}
        {patternType === 0 && (
          <>
            {/* Responsive trapezoid */}
            <div 
              className="absolute -bottom-8 -right-8 w-36 h-36 sm:w-48 sm:h-48 transform rotate-12 skew-x-12 transition-all duration-700 group-hover:rotate-[24deg] group-hover:skew-x-[24deg] group-hover:scale-125"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive circle */}
            <div 
              className="absolute right-6 sm:right-10 top-14 w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-700 group-hover:scale-150 group-hover:translate-x-4"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 1 && (
          <>
            {/* Responsive rectangle */}
            <div 
              className="absolute bottom-0 right-0 w-32 h-24 sm:w-44 sm:h-32 rounded-tl-3xl transition-all duration-700 group-hover:translate-x-5 group-hover:translate-y-5"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive square */}
            <div 
              className="absolute right-16 sm:right-20 top-10 w-10 h-10 sm:w-12 sm:h-12 rotate-45 transition-all duration-700 group-hover:rotate-[135deg] group-hover:scale-125"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 2 && (
          <>
            {/* Responsive triangle */}
            <div 
              className="absolute bottom-0 right-0 w-0 h-0 border-t-[90px] border-l-[90px] sm:border-t-[120px] sm:border-l-[120px] border-transparent transition-all duration-700 group-hover:border-t-[110px] group-hover:border-l-[110px] sm:group-hover:border-t-[140px] sm:group-hover:border-l-[140px]"
              style={{ borderTopColor: lighterColor }}
            ></div>
            {/* Responsive bar */}
            <div 
              className="absolute left-4 top-16 sm:top-20 w-20 sm:w-28 h-4 sm:h-5 rounded-full transition-all duration-700 group-hover:translate-x-8 group-hover:scale-110"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}
        
        {patternType === 3 && (
          <>
            {/* Responsive single rectangle */}
            <div 
              className="absolute bottom-0 right-0 w-32 h-24 sm:w-44 sm:h-32 rounded-tl-3xl rotate-6 transition-all duration-700 group-hover:rotate-[20deg] group-hover:translate-x-4 group-hover:translate-y-4"
              style={{ backgroundColor: lighterColor }}
            ></div>
            {/* Responsive circle */}
            <div 
              className="absolute left-4 sm:left-6 top-10 sm:top-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-700 group-hover:scale-150 group-hover:translate-x-6"
              style={{ backgroundColor: lighterColor }}
            ></div>
          </>
        )}

        {/* Card content - responsive text sizes */}
        <div className="relative z-10">
          {/* Responsive icon */}
          <div 
            className="w-12 h-12 sm:w-14 sm:h-14 p-2 sm:p-3 rounded-full bg-black flex items-center justify-center">
            <Image src={item.icon} alt='icon' width={40} height={40} />
          </div>
          
          <h2 className={`font-bold text-base sm:text-lg mt-2 sm:mt-3 ${textColor}`}>{item.name}</h2>
          <p className={`${descColor} text-sm sm:text-base line-clamp-3 mt-1 sm:mt-2`}>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard