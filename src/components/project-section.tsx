'use client'
import React from 'react'
import { Lora } from 'next/font/google'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Grandstander } from 'next/font/google'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Separator } from './ui/separator'
import ProjectList from './Project-list'

const font = Lora({
  subsets: ['latin']
})

const ProjectSection = () => {
  const getRandomNumber = Math.random()
  return (
    <>
      <article>
        <div className='flex w-full items-center justify-start px-10 py-10 text-5xl font-semibold text-gray-900/90'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1
            }}
          >
            <div className='flex items-center justify-start'>
              <h1 className='text-5xl font-extrabold text-gray-900/90'>
                <span className='relative'>
                  I love creating
                  <span className='whiespace-nowrap relative left-3'>
                    <span className='whitespace-nowrap '>
                      <span className='absolute -bottom-1 -left-2 -right-2 -top-1 -rotate-2 bg-indigo-600'></span>
                      <span className='relative text-white'>applications</span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>
            <div className='mt-3 flex items-center justify-center space-y-1'>
              <span className='text-xl font-light'>
                <h2>
                  Hello! I am computer science student, who is interested in
                  solving problems with possible app solutions.
                </h2>
              </span>
            </div>
          </motion.div>
        </div>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5
        }}
        className='w-full'
      >
        <div className='flex w-full items-center !justify-between rounded-xl bg-white/60 px-8 py-6'>
          <ProjectList />
        </div>
      </motion.div>
    </>
  )
}

export default ProjectSection
