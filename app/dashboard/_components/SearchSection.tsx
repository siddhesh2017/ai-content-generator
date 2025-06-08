import React from "react"
import { Search } from "lucide-react"

function SearchSection({onSearchInput}:any) {
  return (
    <div className="p-5 sm:p-7 md:p-10 bg-black relative overflow-hidden flex flex-col justify-center items-center text-white pt-10 sm:pt-14 md:pt-20">
      {/* Pattern overlay div */}
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none"></div>
      
      {/* Content (now above the pattern) */}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">Browse All Templates</h2>
        <p className="text-sm sm:text-base text-gray-300">What would you like to create today?</p>
        <div className="w-full flex justify-center mt-3 sm:mt-4 md:mt-5">
          {/* Search bar with properly colored elements */}
          <div className="flex gap-1 sm:gap-2 items-center p-2 sm:p-2.5 border border-[#e11060] rounded-lg sm:rounded-xl bg-[#ffebf1] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-3xl">
            <Search className="text-[#e11060] h-4 w-4 sm:h-5 sm:w-5" />
            <input 
              type="text" 
              placeholder="Search"
              onChange={(event)=>onSearchInput(event.target.value)}
              className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base py-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
