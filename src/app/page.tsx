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
  src: '../../fonts/WEB/Gonzaga-Trial-Black.woff'
})

const font_3 = Satoshi_Bold({
  src: '../../fonts/Satoshi-Bold.woff'
})

const Page = () => {
  const [showElement, setShowElement] = useState(false)
  const screenSize = useMediaQuery({ maxWidth: 800 })

  return (
    <>
      {showElement && (
        <div className='absolute z-50 h-full w-full bg-[#222222]/40 p-8 backdrop-blur'>
          <div className='absolute right-10 top-20 m-4 text-[#FFF5EB] '>
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
      <section className='p-8'>
        <div className='relative flex h-full items-center justify-center'>
          <div className='absolute right-0 top-0 z-50 m-4 flex justify-end'>
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
          <div
            className={
              screenSize
                ? 'relative top-10 flex h-full flex-col items-center justify-center md:top-0 md:h-[90vh] md:w-[70%]'
                : 'relative top-10 flex h-full flex-col items-center justify-center md:top-0 md:w-[70%] lg:h-[90vh]'
            }
          >
            <div className='relative flex h-full w-full flex-col items-center justify-center  py-8'>
              <div
                className={cn(
                  'max-w-screen-lg p-8 text-xl leading-relaxed text-[#FF4242] lg:text-4xl ',
                  font_1.className
                )}
              >
                Hi! myself
                <br />
                <span className={cn('text-7xl leading-none', font_2.className)}>
                  sankalp sandip pujare,{' '}
                </span>
                <br />
                <div className='mt-3 leading-snug'>
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
                      'mt-5 flex items-center justify-center gap-1 bg-[#FF4242] p-4 text-xl hover:border hover:border-[#FF4242] hover:bg-transparent hover:text-[#FF4242]',
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
        </div>
      </section>
    </>
  )
}

export default Page
