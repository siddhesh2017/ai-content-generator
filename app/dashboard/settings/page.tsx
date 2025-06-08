import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const Settings = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <UserProfile
        routing="hash"
        appearance={{
          baseTheme: dark,
          elements: {
            rootBox: {
              width: '100%',
              maxWidth: '1500px', // Even larger
              boxSizing: 'border-box',
              padding: '0px',
            },
            card: {
              width: '100%',
              minHeight: '90vh', // Increased from 80vh
            },
            navbar: {
              width: '100%'
            },
            pageScrollBox: {
              padding: '24px',
            }
          }
        }}
      />
    </div>
  )
}

export default Settings