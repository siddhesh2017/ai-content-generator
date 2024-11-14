import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gradient-to-br from-purple-200 via-orange-200 to-yellow-200'>
        <SignUp />
    </div>
  )
}