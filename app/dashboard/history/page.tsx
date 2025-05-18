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
import { Copy } from 'lucide-react';

export interface HISTORY {
  ID: number;
  formData: string;
  aiResponse: string | null; // Allow null for aiResponse
  templateSlug: string;
  createdBy: string;
  createdAt: string | null; // Handle null for createdAt
}

function History() {
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // Track copied item
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
              aiResponse: AIOutput.aiResponse ?? "N/A", // Default to 'N/A' if null
              templateSlug: AIOutput.templateSlug,
              createdBy: AIOutput.createdBy,
              createdAt: AIOutput.createdAt ?? "N/A", // Default to 'N/A' if null
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

  const handleCopy = (text: string | null, index: number) => {
    if (!text) return; // Prevent copying empty text
    navigator.clipboard.writeText(text);
    setCopiedIndex(index); // Set copied index to change button text

    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="m-5 p-6 rounded-xl bg-white shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">History</h2>
          <p className="text-gray-500">Search your previously generated AI content</p>
        </div>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-7 font-bold bg-secondary rounded-lg mt-6 py-3 px-5 shadow-sm">
        <h2 className="col-span-2 text-sm uppercase tracking-wider">Template</h2>
        <h2 className="col-span-2 text-sm uppercase tracking-wider">AI Response</h2>
        <h2 className="text-sm uppercase tracking-wider">Date</h2>
        <h2 className="text-sm uppercase tracking-wider">Words</h2>
        <h2 className="text-sm uppercase tracking-wider">Actions</h2>
      </div>
      
      {/* Data Rows */}
      {historyList.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No history found. Generate your first AI content!
        </div>
      ) : (
        historyList.map((item, index) => (
          <div 
            className="grid grid-cols-7 py-4 px-5 border-b hover:bg-gray-50 transition-colors duration-150 items-center" 
            key={item.ID}
          >
            {/* Template Name & Icon */}
            <div className="col-span-2 flex gap-2 items-center">
              <div className="bg-secondary p-1.5 rounded-md">
                <Image 
                  src={Templates?.find((t) => t.slug === item.templateSlug)?.icon || "/fallback-image.png"} 
                  width={20} 
                  height={20} 
                  alt="Template Icon" 
                  className="opacity-80" 
                />
              </div>
              <span className="font-medium text-gray-800">{getTemplateName(item.templateSlug)}</span>
            </div>
            
            {/* AI Response */}
            <p className="col-span-2 line-clamp-2 text-sm text-gray-600">{item.aiResponse}</p>
            
            {/* Date */}
            <div className="text-sm text-gray-600">{item.createdAt}</div>
            
            {/* Word Count */}
            <div className="text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {item.aiResponse?.split(/\s+/).length || 0} words
              </span>
            </div>
            
            {/* Actions */}
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary hover:bg-primary/10"
                onClick={() => handleCopy(item.aiResponse, index)}
              >
                {copiedIndex === index ? (
                  <span className="flex items-center gap-1">
                    <span className="h-4 w-4">✓</span> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy size={14} /> Copy
                  </span>
                )}
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
