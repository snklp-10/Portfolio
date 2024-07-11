'use client'
import React, { useState } from 'react'
import Satoshi_Regular from 'next/font/local'
import Satoshi_Bold from 'next/font/local'
import CabinetGrotesk from 'next/font/local'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Download, Menu } from 'lucide-react'
import Link from 'next/link'

const font_2 = Satoshi_Regular({
  src: '../../fonts/Satoshi-Regular.woff'
})
const font_3 = CabinetGrotesk({
  src: '../../fonts/CabinetGrotesk-Extrabold.woff'
})

const font_5 = Satoshi_Bold({
  src: '../../fonts/Satoshi-Bold.woff'
})

const page = () => {
  const [showElement, setShowElement] = useState(false)

  return (
    <>
      {showElement && (
        <div className='absolute z-50 h-full w-full bg-[#222222]/40 p-8 backdrop-blur'>
          <div className='absolute right-10 top-20 m-4 text-[#FFF5EB] '>
            <ul className={cn('space-y-1 text-3xl ', font_5.className)}>
              <li className='text-[#FFF5EB] hover:cursor-default hover:text-white hover:underline'>
                <Link href={'/Project'}>Projects</Link>
              </li>
              <li className='text-[#FFF5EB] hover:cursor-default hover:text-white hover:underline'>
                <Link href={'/Contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <section className='h-[100vh] p-8'>
        <div className='relative flex h-full items-center justify-center'>
          <div className='absolute right-0 top-0 z-50 m-4 flex w-full justify-end'>
            <Button
              className='bg-transparent hover:bg-transparent'
              onClick={() => {
                setShowElement(!showElement)
              }}
            >
              <Menu
                size={30}
                className={showElement ? 'text-[#FFF5EB]' : 'text-[#222222]'}
              />
            </Button>
          </div>
          <div className='relative flex h-full flex-col items-center justify-center bg-[#FF4242] md:w-[70%]'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-6 py-8'>
              <p
                className={cn(
                  'max-w-screen-lg p-8 text-3xl leading-normal text-[#FFF5EB] ',
                  font_2.className
                )}
              >
                Hi! I'm <br />
                <span className={cn('text-7xl', font_3.className)}>
                  sankalp sandip pujare,{' '}
                </span>
                <br />a computer science student developing{' '}
                <span className={cn(font_5.className)}>
                  full stack applications,{' '}
                </span>
                and focused on creating{' '}
                <span className={cn(font_5.className)}>
                  innovative, efficient, and impactful{' '}
                </span>
                software solutions.
                <Button
                  className={cn(
                    'mt-5 flex items-center justify-center gap-1 bg-[#222222] p-4 text-xl',
                    font_2.className
                  )}
                >
                  <Link href='https://rb.gy/7jrv2t'>Resume</Link>
                  <ArrowUpRight size={25} />
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
