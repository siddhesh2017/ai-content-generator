"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {

  const {user} = useUser()
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
  useEffect(()=>{
    user&&GetData();
  },[user])

  const GetData = async() =>{
    {/* @ts-ignore */}
    const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  }

  const GetTotalUsage=(result:HISTORY[])=>{
    let total:number=0;
    result.forEach(element => {
      total = total + Number(element.aiResponse?.length)
    });
    setTotalUsage(total);
    console.log(total);
  }
  return (
    <div className='m-5'>
        <div className="bg-primary text-white rounded-lg p-3">
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full mt-3 rounded-full'>
                <div className='h-2 rounded-full bg-white' style={{
                    width: (totalUsage / 10000) * 100 + "%"
                }}></div>
            </div>   
            <h2 className='text-sm my-2'>{totalUsage}/10,000 credits used</h2>
        </div>
        <Button variant={'secondary'} className='my-3 w-full text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack