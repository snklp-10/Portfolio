'use client'
import React, { useState } from 'react'
import Satoshi_Regular from 'next/font/local'
import Satoshi_Bold from 'next/font/local'
import CabinetGrotesk from 'next/font/local'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Download, Menu } from 'lucide-react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

const font_1 = Satoshi_Regular({
  src: '../../fonts/Satoshi-Regular.woff'
})
const font_2 = CabinetGrotesk({
  src: '../../fonts/CabinetGrotesk-Extrabold.woff'
})

const font_3 = Satoshi_Bold({
  src: '../../fonts/Satoshi-Bold.woff'
})

const Page = () => {
  const [showElement, setShowElement] = useState(false)
  const screenSize = useMediaQuery({ maxWidth: 750 })

  return (
    <>
      {showElement && (
        <div className='absolute z-50 h-full w-full bg-[#222222]/40 p-5 backdrop-blur md:p-8'>
          <div className='absolute right-6 top-20'>
            <ul className={cn('space-y-1 text-3xl ', font_3.className)}>
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
      <section>
        <div className='relative px-4'>
          <div className='absolute right-2 top-8 z-50 m-2'>
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
        </div>
        <div className=' flex h-[100vh] w-full items-center justify-center'>
          <div className='relative my-20 flex min-h-max w-full items-center justify-center px-8'>
            <div
              className={cn(
                'inline max-w-screen-lg px-6 py-20 text-[26px] leading-relaxed text-[#FF4242] md:p-8 md:px-6 lg:text-[36px]',
                font_1.className
              )}
            >
              Hi! myself
              <br />
              <span
                className={cn(
                  'text-5xl leading-none lg:text-7xl',
                  font_2.className
                )}
              >
                sankalp sandip pujare,{' '}
              </span>
              <br />
              <div className='mt-1 leading-snug'>
                a computer science student. <br />I love drawing{' '}
                <span className={cn(font_3.className)}>
                  illustrations, creating animations{' '}
                </span>
                and developing{' '}
                <span className={cn(font_3.className)}>
                  full stack applications.{' '}
                </span>
                I found creating{' '}
                <span className={cn(font_3.className)}>
                  innovative, efficient, and impactful{' '}
                </span>
                software solutions very interesting.
                <Button
                  className={cn(
                    'mt-8 flex items-center justify-center gap-1 bg-[#FF4242] p-4 text-xl hover:bg-transparent hover:text-[#FF4242] hover:ring-2 hover:ring-[#FF4242] ',
                    font_3.className
                  )}
                >
                  <Link href='https://rb.gy/7jrv2t'>Resume</Link>
                  <ArrowUpRight size={26} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
