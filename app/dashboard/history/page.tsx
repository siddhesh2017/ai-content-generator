"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../_components/TemplateListSection";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { Copy, Clock, Calendar } from 'lucide-react';

export interface HISTORY {
  ID: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

function History() {
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchHistory = async () => {
      if (user) {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (email) {
          const result: HISTORY[] = await db
            .select({
              ID: AIOutput.id,
              formData: AIOutput.formData,
              aiResponse: AIOutput.aiResponse ?? "N/A",
              templateSlug: AIOutput.templateSlug,
              createdBy: AIOutput.createdBy,
              createdAt: AIOutput.createdAt ?? "N/A",
            })
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, email))
            .orderBy(desc(AIOutput.id));

          setHistoryList(result);
        }
      }
    };

    fetchHistory();
  }, [user]);

  const getTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug === slug
    );
    return template?.name || "Unknown Template";
  };

  const getTemplateColor = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug === slug
    );
    // Return template color or default to our theme pink
    return template?.color || "#E11060";
  };

  const handleCopy = (text: string | null, index: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mx-2 my-2 sm:m-4 md:m-5 p-3 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-black shadow-lg border border-gray-800 text-white w-[92%] sm:w-auto max-w-[67%] sm:max-w-none ">
      <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#E11060] to-[#FF6F28] bg-clip-text text-transparent flex items-center gap-1 sm:gap-2">
            <Clock size={20} className="text-[#E11060] sm:w-6 sm:h-6 md:w-7 md:h-7" />
            History
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">Search your previously generated AI content</p>
        </div>
      </div>
      
      {/* Table Header - Desktop Only */}
      <div className="hidden sm:grid grid-cols-7 font-bold bg-gray-900 rounded-lg mt-4 sm:mt-5 md:mt-6 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 shadow-md border border-gray-800">
        <h2 className="col-span-2 text-xs sm:text-sm uppercase tracking-wider text-gray-300">Template</h2>
        <h2 className="col-span-2 text-xs sm:text-sm uppercase tracking-wider text-gray-300">AI Response</h2>
        <h2 className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Date</h2>
        <h2 className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Words</h2>
        <h2 className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Actions</h2>
      </div>
      
      {/* No history message */}
      {historyList.length === 0 ? (
        <div className="text-center py-8 sm:py-12 md:py-16 text-gray-400 bg-gray-900/50 rounded-lg mt-2 sm:mt-3 md:mt-4 border border-gray-800 text-sm sm:text-base">
          No history found. Generate your first AI content!
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden mt-2 border border-gray-800">
          {historyList.map((item, index) => {
            const templateColor = getTemplateColor(item.templateSlug);
            
            return (
              <div key={item.ID}>
                {/* Mobile Card View */}
                <div className="sm:hidden p-3 border-b border-gray-800 hover:bg-gray-900/70 transition-colors">
                  <div className="flex justify-between items-start">
                    {/* Template info */}
                    <div className="flex gap-2 items-center mb-2">
                      <div 
                        className="p-1.5 rounded-md"
                        style={{ backgroundColor: `${templateColor}30` }}
                      >
                        <Image 
                          src={Templates?.find((t) => t.slug === item.templateSlug)?.icon || "/fallback-image.png"} 
                          width={18} 
                          height={18} 
                          alt="Template Icon"
                          className="opacity-90" 
                        />
                      </div>
                      <span className="font-medium text-white text-sm">{getTemplateName(item.templateSlug)}</span>
                    </div>
                    
                    {/* Word count pill */}
                    <div>
                      <span 
                        className="px-1.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${templateColor}20`,
                          color: templateColor
                        }}
                      >
                        {item.aiResponse?.split(/\s+/).length || 0} words
                      </span>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <p className="line-clamp-2 text-xs text-gray-300 mb-2">{item.aiResponse}</p>
                  
                  {/* Bottom row with date and actions */}
                  <div className="flex justify-between items-center mt-2 pt-1 border-t border-gray-800/50">
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {item.createdAt}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-7 px-2 text-white text-xs hover:bg-[#E11060]/20 hover:text-[#E11060] transition-colors"
                      onClick={() => handleCopy(item.aiResponse, index)}
                    >
                      {copiedIndex === index ? (
                        <span className="flex items-center gap-1">
                          <span className="h-3 w-3 text-[#E11060]">✓</span> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy size={12} /> Copy
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Desktop Table Row - Preserved from original */}
                <div 
                  className="hidden sm:grid grid-cols-7 py-3 sm:py-3.5 md:py-4 px-4 sm:px-4.5 md:px-5 border-b border-gray-800 hover:bg-gray-900/70 transition-colors duration-150 items-center" 
                >
                  {/* Template Name & Icon */}
                  <div className="col-span-2 flex gap-2 items-center">
                    <div 
                      className="p-1.5 rounded-md"
                      style={{ backgroundColor: `${templateColor}30` }}
                    >
                      <Image 
                        src={Templates?.find((t) => t.slug === item.templateSlug)?.icon || "/fallback-image.png"} 
                        width={20} 
                        height={20} 
                        alt="Template Icon"
                        className="opacity-90" 
                      />
                    </div>
                    <span className="font-medium text-white">{getTemplateName(item.templateSlug)}</span>
                  </div>
                  
                  {/* AI Response */}
                  <p className="col-span-2 line-clamp-2 text-sm text-gray-300">{item.aiResponse}</p>
                  
                  {/* Date */}
                  <div className="text-sm text-gray-400">{item.createdAt}</div>
                  
                  {/* Word Count */}
                  <div className="text-sm">
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: `${templateColor}20`,
                        color: templateColor
                      }}
                    >
                      {item.aiResponse?.split(/\s+/).length || 0} words
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:bg-[#E11060]/20 hover:text-[#E11060] transition-colors"
                      onClick={() => handleCopy(item.aiResponse, index)}
                    >
                      {copiedIndex === index ? (
                        <span className="flex items-center gap-1">
                          <span className="h-4 w-4 text-[#E11060]">✓</span> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy size={14} /> Copy
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;
