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
import { Copy, Clock } from 'lucide-react';

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
    <div className="m-5 p-6 rounded-xl bg-black shadow-lg border border-gray-800 text-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-bold text-3xl bg-gradient-to-r from-[#E11060] to-[#FF6F28] bg-clip-text text-transparent flex items-center gap-2">
            <Clock size={28} className="text-[#E11060]" />
            History
          </h2>
          <p className="text-gray-400">Search your previously generated AI content</p>
        </div>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-7 font-bold bg-gray-900 rounded-lg mt-6 py-3 px-5 shadow-md border border-gray-800">
        <h2 className="col-span-2 text-sm uppercase tracking-wider text-gray-300">Template</h2>
        <h2 className="col-span-2 text-sm uppercase tracking-wider text-gray-300">AI Response</h2>
        <h2 className="text-sm uppercase tracking-wider text-gray-300">Date</h2>
        <h2 className="text-sm uppercase tracking-wider text-gray-300">Words</h2>
        <h2 className="text-sm uppercase tracking-wider text-gray-300">Actions</h2>
      </div>
      
      {/* Data Rows */}
      {historyList.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-gray-900/50 rounded-lg mt-4 border border-gray-800">
          No history found. Generate your first AI content!
        </div>
      ) : (
        <div className="rounded-lg overflow-hidden mt-2 border border-gray-800">
          {historyList.map((item, index) => {
            const templateColor = getTemplateColor(item.templateSlug);
            return (
              <div 
                className="grid grid-cols-7 py-4 px-5 border-b border-gray-800 hover:bg-gray-900/70 transition-colors duration-150 items-center" 
                key={item.ID}
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
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;
