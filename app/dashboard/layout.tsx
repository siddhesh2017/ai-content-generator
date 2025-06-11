"use client"
import React, { useState, useEffect } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";

function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Load initial state from localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState) {
      setIsSidebarCollapsed(savedState === 'true');
    }

    // Listen for sidebar toggle events
    const handleSidebarToggle = (e: CustomEvent) => {
      setIsSidebarCollapsed(e.detail.isCollapsed);
    };

    document.addEventListener('sidebarToggle', handleSidebarToggle as EventListener);

    return () => {
      document.removeEventListener('sidebarToggle', handleSidebarToggle as EventListener);
    };
  }, []);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="flex bg-[#E11060] min-h-screen">
        <div className={`sticky top-0 ml-4 mt-4 rounded-xl h-screen z-40 transition-all duration-500 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
          <SideNav />
        </div>

        {/* Main Content - will resize automatically with flex-1 */}
        <div className="flex-1 transition-all duration-500 ease-in-out">
          {/* Content Area */}
          <div className="py-4 pr-4 sm:pl-4">
            {children}
          </div>
        </div>
      </div>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
