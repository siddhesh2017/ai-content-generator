"use client"
import { FileClock, Home, Settings, WalletCards, Menu, Zap } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import UsageTrack from './UsageTrack';
import Link from 'next/link';

function SideNav() {
  const router = useRouter();
  const path = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Always start collapsed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        // On desktop, respect saved preference
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState) {
          setIsCollapsed(savedState === 'true');
        }
      }
    };
    
    // Set initial state
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', String(newState));
    
    // Dispatch custom event for layout to adjust
    document.dispatchEvent(new CustomEvent('sidebarToggle', { detail: { isCollapsed: newState } }));
  };

  const MenuList = [
    { name: 'Dashboard', icon: Home, path: '/dashboard', color: '#E30F64' },
    { name: 'History', icon: FileClock, path: '/dashboard/history', color: '#FF7028' },
    { name: 'Billing', icon: WalletCards, path: '/dashboard/billing', color: '#00CCFF' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings', color: '#9747FF' },
  ];

  return (
    <div 
      className={`rounded-xl bg-black text-white relative transition-all duration-500 ease-in-out
        h-[95vh] sm:h-[95vh] 
        ${isCollapsed 
          ? 'w-14 sm:w-16 md:w-20' 
          : 'w-56 sm:w-64 md:w-72'}`}
    >
      {/* Fixed Toggle Button - Now with header and proper positioning */}
      <div className="sticky top-0 z-50 py-2 sm:py-3 md:py-4 rounded-t-xl bg-black backdrop-blur-sm">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-2 sm:px-3 md:px-4'}`}>
          {/* Logo text - with transition effect */}
          <Link href='/' className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isCollapsed ? 'w-0 opacity-0' : 'w-full opacity-100'
          }`}>
            <span className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#E11160] via-purple-500 to-orange-500 bg-clip-text text-transparent ml-1 sm:ml-2 md:ml-3 whitespace-nowrap">
              ContentCraftAI
            </span>
          </Link>
          
          {/* Toggle button - Restored original size for desktop */}
          <button 
            onClick={toggleSidebar}
            className="bg-black hover:bg-gray-900 text-white p-1.5 sm:p-2 md:p-3 rounded-lg transition-colors flex items-center justify-center border border-gray-800"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu size={18} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="border-t border-gray-800 mt-2 sm:mt-3 md:mt-4"></div>
      </div>
      
      {/* Navigation Items */}
      <div className="px-1.5 sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 mt-1 sm:mt-1.5 md:mt-2">
        {MenuList.map((item, index) => {
          const isActive = path === item.path;
          
          return (
            <div
              key={index}
              onClick={() => router.push(item.path)}
              className={`relative group flex items-center cursor-pointer rounded-xl transition-all duration-300 ease-in-out mb-2 sm:mb-3 md:mb-4 ${
                isCollapsed ? 'justify-center py-2 sm:py-3 md:py-4' : 'py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4'
              }`}
              style={{
                background: isActive ? `linear-gradient(to right, ${item.color}CC, ${item.color}99)` : 'transparent',
                color: isActive ? 'white' : '#AAA'
              }}
            >
              
              {/* Icon with glow effect on active */}
              <div className={`relative ${isActive ? 'text-white' : ''}`}>
                {isActive && (
                  <div className="absolute inset-0 rounded-full opacity-20 blur-md" 
                    style={{ backgroundColor: item.color }}></div>
                )}
                <item.icon size={isCollapsed ? 18 : 16} className="relative z-10 sm:size-[20px] md:size-[22px]" />
              </div>
              
              {/* Menu Text */}
              <span className={`ml-2 sm:ml-2.5 md:ml-3 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                isCollapsed ? 'opacity-0 absolute' : 'opacity-100'
              }`}
              style={{ color: isActive ? 'white' : '#AAA' }}>
                {!isCollapsed && item.name}
              </span>
              
              {/* Tooltip when collapsed */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 sm:ml-3 md:ml-4 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-black text-white text-xs sm:text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 border border-gray-800">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Usage Section - Commented out as requested
      <div className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 transition-all duration-300 ${
        isCollapsed ? 'px-1.5 sm:px-2 md:px-3' : 'px-2 sm:px-4 md:px-5'
      }`}>
        {!isCollapsed ? (
          <div className="bg-black backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 border border-gray-800">
            <UsageTrack />
          </div>
        ) : (
          <div className="group relative flex justify-center">
            <div className="bg-black backdrop-blur-sm p-1.5 sm:p-2 md:p-3 rounded-xl cursor-pointer hover:bg-gray-900 transition-all border border-gray-800">
              <Zap size={16} className="sm:size-18 md:size-20" style={{ color: '#FF7028' }} />
            </div>
            <div className="absolute left-full ml-2 sm:ml-3 md:ml-4 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-black text-white text-xs sm:text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 border border-gray-800">
              Usage Statistics
            </div>
          </div>
        )}
      </div>
      */}
    </div>
  );
}

export default SideNav;
