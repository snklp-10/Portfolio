'use client'
import ProfileSection from '@/components/profile-section'
import ProjectSection from '@/components/project-section'
import { motion } from 'framer-motion'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='flex h-[100vh] bg-gray-100/60 px-10 py-10'>
        <div className='flex h-full w-[35%] items-center justify-center'>
          <ProfileSection />
        </div>

        <div className=' relative flex h-full w-[65%] items-center justify-center rounded-3xl bg-white/70 '>
          <div className='relative w-1/2 opacity-90'>
            <div className='absolute -top-[200px] left-40 h-[400px] w-[400px] rotate-3 animate-blob rounded-full bg-indigo-300 mix-blend-multiply blur-3xl filter'></div>
            <div className='absolute -top-[200px] left-20 h-[200px] w-[200px] animate-blob rounded-full bg-rose-400 mix-blend-multiply blur-3xl filter'></div>
            <div className='absolute -top-[200px] left-[400px] h-[300px] w-[300px] animate-blob rounded-full bg-sky-300 mix-blend-multiply blur-3xl filter'></div>
            <div className='absolute left-[500px] h-[200px] w-[200px] animate-blob rounded-full bg-pink-400 mix-blend-multiply blur-3xl filter'></div>
          </div>
          <div className='absolute top-4 w-full p-4'>
            <ProjectSection />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
