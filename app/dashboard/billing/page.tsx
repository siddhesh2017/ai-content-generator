"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Check, Zap, CreditCard } from 'lucide-react';

function Billing() {
  return (
    <div className="m-5 p-6 rounded-xl bg-black shadow-lg border border-gray-800 text-white">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard size={28} className="text-[#E11060]" />
          <h2 className="font-bold text-3xl bg-gradient-to-r from-[#E11060] to-[#FF6F28] bg-clip-text text-transparent">
            Upgrade Your Plan
          </h2>
        </div>
        <p className="text-gray-400 max-w-md text-center">
          Choose the perfect plan to enhance your AI content generation experience
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch max-w-4xl mx-auto">
        {/* Free Plan Card */}
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white mb-2">
              Free Plan
            </h2>
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#4080FF] to-[#00CCFF] bg-clip-text text-transparent">$0</span>
              <span className="text-sm font-medium text-gray-400 ml-1">/month</span>
            </div>
            <span className="inline-block px-3 py-1 bg-[#4080FF]/20 text-[#4080FF] text-xs font-medium rounded-full">
              CURRENTLY ACTIVE
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#4080FF]/20 p-1">
                <Check size={16} className="text-[#4080FF]" />
              </div>
              <span className="text-gray-300">100,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#4080FF]/20 p-1">
                <Check size={16} className="text-[#4080FF]" />
              </div>
              <span className="text-gray-300">50+ Content Templates</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#4080FF]/20 p-1">
                <Check size={16} className="text-[#4080FF]" />
              </div>
              <span className="text-gray-300">Unlimited Downloads and Copy</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#4080FF]/20 p-1">
                <Check size={16} className="text-[#4080FF]" />
              </div>
              <span className="text-gray-300">1 Month of History</span>
            </li>
          </ul>

          <button
            className="w-full rounded-xl border border-[#4080FF] px-6 py-3 text-center text-sm font-medium bg-[#4080FF]/10 text-[#4080FF] hover:bg-[#4080FF]/20 transition-colors focus:outline-none"
          >
            Current Plan
          </button>
        </div>

        {/* Pro Plan Card */}
        <div className="rounded-2xl relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
          {/* Recommended badge */}
          <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-[#E11060] to-[#FF6F28] text-white text-xs font-bold rounded-full shadow-lg">
            RECOMMENDED
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-[#E11060] to-[#FF6F28] bg-clip-text text-transparent mb-2">
              Pro Plan
            </h2>
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#E11060] to-[#FF6F28] bg-clip-text text-transparent">$29</span>
              <span className="text-sm font-medium text-gray-400 ml-1">/month</span>
            </div>
            <span className="inline-block px-3 py-1 bg-[#E11060]/20 text-[#E11060] text-xs font-medium rounded-full">
              SAVE 30% ANNUALLY
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#E11060]/20 p-1">
                <Check size={16} className="text-[#E11060]" />
              </div>
              <span className="text-gray-300">100,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#E11060]/20 p-1">
                <Check size={16} className="text-[#E11060]" />
              </div>
              <span className="text-gray-300">50+ Template Access</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#E11060]/20 p-1">
                <Check size={16} className="text-[#E11060]" />
              </div>
              <span className="text-gray-300">Unlimited Downloads and Copy</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#E11060]/20 p-1">
                <Check size={16} className="text-[#E11060]" />
              </div>
              <span className="text-gray-300">1 Year of History</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-[#E11060]/20 p-1">
                <Check size={16} className="text-[#E11060]" />
              </div>
              <span className="text-gray-300">Priority Support</span>
            </li>
          </ul>

          <button
            className="w-full rounded-xl bg-gradient-to-r from-[#E11060] to-[#FF6F28] px-6 py-3 text-center text-sm font-medium text-white hover:opacity-90 transition-opacity focus:outline-none shadow-lg shadow-[#E11060]/20"
          >
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 max-w-lg mx-auto">
          All plans include automatic updates and basic support. Need help choosing?
          <a href="#" className="text-[#E11060] hover:underline ml-1">Contact our sales team</a>
        </p>
      </div>
    </div>
  );
}

export default Billing;