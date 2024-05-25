'use client'
import ProfileSection from '@/components/profile-section'
import ProjectSection from '@/components/project-section'
import React from 'react'

const Page = () => {
  return (
    <>
      <section>
        <div className='bg-gray-100/60 px-8 py-10'>
          <div className='flex flex-col items-center justify-center gap-5 xl:flex-row '>
            <div className='h-[90vh] w-full rounded-2xl bg-gray-100/75 xl:w-[35%]'>
              <div className='flex h-full w-full items-center justify-center'>
                <div className='flex items-center justify-center'>
                  <ProfileSection />
                </div>
              </div>
            </div>
            <div className='h-[90vh] w-full rounded-2xl bg-yellow-400 xl:w-[65%]'>
              <div className='flex h-full w-full items-center justify-center'>
                <div className='flex h-full w-full items-center justify-center px-4 py-4'>
                  <div className='flex items-center justify-center '>
                    <ProjectSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
