'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Separator } from './ui/separator'
import ProjectList from './Project-list'

const ProjectSection = () => {
  const getRandomNumber = Math.random()
  return (
    <>
      <div>
        <article>
          <div className='flex items-center justify-start px-8 py-8 text-5xl font-semibold text-gray-900/90 xl:w-full'>
            <div className='flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1
                }}
              >
                <div className='mb-8 flex items-center justify-start sm:mb-4 xl:justify-start'>
                  <h1 className='font-extrabold text-gray-900/90'>
                    <span className='relative'>
                      I love creating
                      <span className='whiespace-nowrap relative left-4 top-4 md:top-0'>
                        <span className='whitespace-nowrap'>
                          <span className='absolute -bottom-1 -left-3 -right-2 -top-1 -rotate-1 bg-indigo-600 '></span>
                          <span className='relative text-white'>
                            applications
                          </span>
                        </span>
                      </span>
                    </span>
                  </h1>
                </div>
                <div className='sm::mt-3 flex items-center justify-center'>
                  <span className='text-xl font-light'>
                    <h2>
                      Hello! I am computer science student, who is interested in
                      solving problems with possible app solutions.
                    </h2>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </article>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5
          }}
        >
          <div className='mt-9 flex items-center justify-start px-8 py-4 sm:mt-0'>
            <ProjectList />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default ProjectSection
