import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-purple-200 via-orange-200 to-yellow-200'>
        <SignIn />
    </div>
  )
}