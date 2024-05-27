'use client'
import ProfileSection from '@/components/profile-section'
import ProjectSection from '@/components/project-section'
import React from 'react'

const Page = () => {
  return (
    <>
      <section>
        <div className='my-7 px-4 py-4'>
          <div className='flex h-full w-full flex-col items-center justify-center gap-5 p-3 xl:h-[90vh] xl:flex-row'>
            <div className='flex h-full w-full items-center justify-center rounded-2xl  bg-gray-100/75 xl:w-[35%] '>
              <div className='flex w-full items-center justify-center'>
                <ProfileSection />
              </div>
            </div>
            <div className='flex h-full w-full items-center justify-center rounded-2xl bg-yellow-400 xl:w-[65%] '>
              <div className='flex h-full w-full items-center justify-center'>
                <ProjectSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
