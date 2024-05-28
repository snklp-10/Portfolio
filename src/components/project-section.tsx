'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Separator } from './ui/separator'
import ProjectList from './Project-list'
import { useMediaQuery } from 'react-responsive'

const ProjectSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })
  const getRandomNumber = Math.random()
  return (
    <>
      <div className='p-6'>
        <div className='w-full py-4'>
          <article>
            <div>
              <div className='flex items-center justify-start'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.8
                  }}
                >
                  <div className='m:mb-4 flex items-center justify-start sm:w-full '>
                    <h1 className='text-[28px] font-bold text-gray-800 lg:text-[54px]'>
                      <span className='relative'>
                        I love creating
                        <span className='whiespace-nowrap relative left-2 sm:left-3 md:top-0'>
                          <span className='whitespace-nowrap'>
                            <span className='absolute -bottom-1 -left-2 -right-2 -top-1 -rotate-1 bg-indigo-600 '></span>
                            <span className='relative text-white'>
                              applications
                            </span>
                          </span>
                        </span>
                      </span>
                    </h1>
                  </div>
                  <div className='mt-2 flex items-center justify-center sm:mt-0'>
                    <span className='text-[14px] text-gray-700 md:text-[22px]'>
                      <h2>
                        Hello! I am computer science student, who is interested
                        in solving problems with possible app solutions.
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
              delay: 1.1
            }}
          >
            <div className='flex items-center justify-start'>
              <ProjectList />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectSection
