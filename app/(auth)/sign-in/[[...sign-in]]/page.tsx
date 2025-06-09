import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black relative overflow-hidden'>
      {/* Pattern overlay with reduced opacity */}
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none"></div>
      
      {/* Sign-in component above the pattern */}
      <div className="relative z-10">
        <SignIn />
      </div>
    </div>
  )
}