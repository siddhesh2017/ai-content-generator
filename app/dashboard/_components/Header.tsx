import React from 'react'
import {Search} from 'lucide-react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
            <Search/>
            <input type='text' placeholder='Search...' className='outline-none'/>
        </div>
        <div className='bg-primary p-1 rounded-full text-xs text-white px-7'>
            <h2>🔥Join Membership just for $9.99/Month </h2>
        </div>
    </div>
  )
}

export default Header