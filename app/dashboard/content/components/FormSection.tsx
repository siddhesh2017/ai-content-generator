'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

// Template colors dictionary
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

// Fallback color
const defaultColor = '#E11060';

interface PROPS {
  selectedTemplate?: TEMPLATE,
  userFormInput: any,
  loading: boolean,
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  }
  
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  
  // Get template color based on slug
  const templateColor = selectedTemplate?.slug 
    ? templateColors[selectedTemplate.slug] || defaultColor
    : defaultColor;
  
  // Function to create an ultra-dark version of the color (almost black but with a hint of the color)
  const getUltraDarkColor = (color: string) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Reduce to just 8% of original brightness - very dark but still has a hint of color
    const darkerR = Math.max(0, Math.floor(r * 0.08));
    const darkerG = Math.max(0, Math.floor(g * 0.08));
    const darkerB = Math.max(0, Math.floor(b * 0.08));
    
    return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
  };
  
  const ultraDarkColor = getUltraDarkColor(templateColor);
  
  return (
    <div 
      className='p-6 shadow-lg border-[1.5px] rounded-xl text-white'
      style={{ 
        backgroundColor: ultraDarkColor,
        borderColor: templateColor,
        boxShadow: `0 4px 14px 0 ${templateColor}40`
      }}
    >
      {/* Template Header */}
      <div className="flex items-start gap-4 mb-6">
        <div 
          className="p-3 rounded-xl border border-gray-700" 
          style={{ backgroundColor: `${templateColor}20` }}
        >
          <Image 
            src={selectedTemplate?.icon || "/placeholder.png"} 
            alt='icon' 
            width={60} 
            height={60}
          />
        </div>
        
        <div>
          <h2 
            className='font-bold text-2xl mb-1'
            style={{ color: templateColor }}
          >
            {selectedTemplate?.name}
          </h2>
          <p className='text-gray-400 text-sm'>
            {selectedTemplate?.desc}
          </p>
        </div>
      </div>

      {/* Thicker divider with template color */}
      <div 
        className="h-0.5 mb-6" 
        style={{ background: `linear-gradient(to right, transparent, ${templateColor}70, transparent)` }}
      ></div>

      {/* Form */}
      <form className='mt-2' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-6'>
            <label className='text-gray-300 font-medium text-sm'>
              {item?.label}
              {item?.required && 
                <span style={{ color: templateColor }} className="ml-1">*</span>
              }
            </label>
            
            {item?.field === 'input' ? (
              <Input 
                name={item.name} 
                required={item?.required} 
                onChange={handleInputChange}
                className="bg-black/50 border-2 text-white focus-visible:ring-offset-0 focus-visible:ring-2"
                style={{ 
                  borderColor: `${templateColor}50`,
                  outlineColor: templateColor
                }}
                placeholder={`Enter ${item.label ? item.label.toLowerCase() : 'details'}`}
              />
            ) : item.field === 'textarea' ? (
              <Textarea 
                name={item.name} 
                required={item?.required} 
                onChange={handleInputChange}
                className="bg-black/50 border-2 text-white min-h-[120px] focus-visible:ring-offset-0 focus-visible:ring-2"
                style={{ 
                  borderColor: `${templateColor}50`,
                  outlineColor: templateColor
                }}
                placeholder={`Enter ${item.label ? item.label.toLowerCase() : 'details'}`}
              />
            ) : null}
          </div>
        ))}
        
        <div className='flex justify-end mt-8 w-full'>
          <Button 
            type='submit'
            disabled={loading}
            className="rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center gap-1 sm:gap-2 text-white font-medium transition-all duration-200 shadow-lg border border-transparent text-xs sm:text-sm md:text-base w-full sm:w-auto"
            style={{
              background: `linear-gradient(to right, ${templateColor}, ${templateColor}CC)`,
              boxShadow: `0 4px 14px 0 ${templateColor}40`
            }}
          >
            {loading ? (
              <div className='flex items-center justify-center gap-2 w-full'>
                <span className="h-3 w-3 sm:h-4 sm:w-4 block rounded-full border-2 border-white border-r-transparent animate-spin"></span>
                <span>Generating...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 sm:gap-2 w-full">
                <Sparkles size={16} className="hidden sm:inline" />
                <span>Generate Content</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormSection