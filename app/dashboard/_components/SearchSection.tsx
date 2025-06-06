import React from "react"
import { Search } from "lucide-react"

function SearchSection({onSearchInput}:any) {
  return (
    <div className="p-10 bg-black relative overflow-hidden flex flex-col justify-center items-center text-white pt-20">
      {/* Pattern overlay div */}
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none"></div>
      
      {/* Content (now above the pattern) */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold">Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className="w-full flex justify-center">
          {/* Search bar with properly colored elements */}
          <div className="flex gap-2 items-center p-2.5 border border-[#e11060] rounded-xl bg-[#ffebf1] my-5 w-[180%]">
            <Search className="text-[#e11060]" />
            <input 
              type="text" 
              placeholder="Search"
              onChange={(event)=>onSearchInput(event.target.value)}
              className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
