import ProfileSection from '@/components/profile-section'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='flex h-[100vh] bg-gray-100/40 px-10 py-10'>
        <div className='flex h-full w-[35%] items-center justify-center'>
          <ProfileSection />
        </div>
        <div className='flex h-full w-[65%] items-center justify-center '></div>
      </section>
    </>
  )
}

export default Page
