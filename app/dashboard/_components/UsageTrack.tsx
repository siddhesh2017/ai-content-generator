"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { Zap } from 'lucide-react';

function UsageTrack() {
  const {user} = useUser()
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
  
  useEffect(() => {
    user && GetData();
  }, [user])

  const GetData = async() => {
    {/* @ts-ignore */}
    const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  }

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach(element => {
      total = total + Number(element.aiResponse?.length)
    });
    setTotalUsage(total);
  }
  
  // Calculate percentage with a max of 100%
  const usagePercentage = Math.min((totalUsage / 10000) * 100, 100);
  
  // Format the number with commas
  const formattedUsage = totalUsage.toLocaleString();
  
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">Usage</span>
        <Zap size={16} style={{ color: '#FF7028' }} />
      </div>
      <div className="w-full bg-gray-900 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ 
            background: 'linear-gradient(to right, #E30F64, #FF7028)', 
            width: `${usagePercentage}%` 
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-400">{formattedUsage} tokens</span>
        <span className="text-xs text-gray-400">10,000 tokens</span>
      </div>
      
      <Button 
        className="w-full mt-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
        style={{
          background: 'linear-gradient(to right, #E30F64, #FF7028)',
          boxShadow: '0 4px 14px 0 rgba(227, 16, 100, 0.3)'
        }}
      >
        <Zap size={14} />
        Upgrade Plan
      </Button>
    </>
  )
}

export default UsageTrack