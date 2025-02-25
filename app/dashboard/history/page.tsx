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
    <div className="m-5 p-5 rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content</p>

      {/* Table Header */}
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {/* Data Rows */}
      {historyList.map((item, index) => (
        <div className="grid grid-cols-7 my-5 py-3 px-3" key={item.ID}>
          {/* Template Name & Icon */}
          <h2 className="col-span-2 flex gap-2 items-center">
            <Image
              src={Templates?.find((t) => t.slug === item.templateSlug)?.icon || "/fallback-image.png"}
              width={25}
              height={25}
              alt="Template Icon"
            />
            {getTemplateName(item.templateSlug)}
          </h2>

          {/* AI Response */}
          <h2 className="col-span-2 line-clamp-3">{item.aiResponse}</h2>

          {/* Date */}
          <h2>{item.createdAt}</h2>

          {/* Word Count */}
          <h2>{item.aiResponse?.length || 0}</h2>

          {/* Copy Button */}
          <h2>
            <Button
              variant="ghost"
              className="text-primary"
              onClick={() => handleCopy(item.aiResponse, index)}
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </Button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default History;
