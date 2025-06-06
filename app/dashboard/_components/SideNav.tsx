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
  
  // Persist collapsed state in localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState) {
      setIsCollapsed(savedState === 'true');
    }
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
      className={`h-[95vh] rounded-xl bg-black text-white relative transition-all duration-500 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Fixed Toggle Button - Now with header and proper positioning */}
      <div className="sticky top-0 z-50 py-4 rounded-t-xl bg-black backdrop-blur-sm">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-4'}`}>
          {/* Logo text - only visible when expanded */}
          {!isCollapsed && (
            <Link href='/'>
              <span className="text-3xl ml-3 font-bold bg-gradient-to-r from-[#E11160] via-purple-500 to-orange-500 bg-clip-text text-transparent">
                InspireAI
              </span>
            </Link>
          )}
          
          {/* Toggle button */}
          <button 
            onClick={toggleSidebar}
            className="bg-black hover:bg-gray-900 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center border border-gray-800"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu size={22} className="text-white" />
          </button>
        </div>
        <div className="border-t border-gray-800 mt-4"></div>
      </div>
      
      {/* Navigation Items */}
      <div className="px-3 py-4 mt-2">
        {MenuList.map((item, index) => {
          const isActive = path === item.path;
          
          return (
            <div
              key={index}
              onClick={() => router.push(item.path)}
              className={`relative group flex items-center cursor-pointer rounded-xl transition-all duration-300 ease-in-out mb-4 ${
                isCollapsed ? 'justify-center py-4' : 'py-3 px-4'
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
                <item.icon size={isCollapsed ? 22 : 20} className="relative z-10" />
              </div>
              
              {/* Menu Text */}
              <span className={`ml-3 font-medium transition-all duration-300 ${
                isCollapsed ? 'opacity-0 absolute' : 'opacity-100'
              }`}
              style={{ color: isActive ? 'white' : '#AAA' }}>
                {!isCollapsed && item.name}
              </span>
              
              {/* Tooltip when collapsed */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-black text-white text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 border border-gray-800">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Usage Section */}
      <div className={`absolute bottom-8 left-0 right-0 transition-all duration-300 ${
        isCollapsed ? 'px-3' : 'px-5'
      }`}>
        {!isCollapsed ? (
          <div className="bg-black backdrop-blur-sm rounded-xl p-4 border border-gray-800">
            <UsageTrack />
          </div>
        ) : (
          <div className="group relative flex justify-center">
            <div className="bg-black backdrop-blur-sm p-3 rounded-xl cursor-pointer hover:bg-gray-900 transition-all border border-gray-800">
              <Zap size={20} style={{ color: '#FF7028' }} />
            </div>
            <div className="absolute left-full ml-4 px-3 py-2 bg-black text-white text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50 border border-gray-800">
              Usage Statistics
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;
