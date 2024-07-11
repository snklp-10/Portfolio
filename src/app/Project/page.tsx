import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Satoshi_Regular from 'next/font/local'
import Satoshi_Bold from 'next/font/local'
import CabinetGrotesk from 'next/font/local'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import allspace from '../../../public/Allspace logo.png'
import ticktick from '../../../public/TickTick.png'
import simon from '../../../public/simon game.png'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const font_2 = Satoshi_Regular({
  src: '../../../fonts/Satoshi-Regular.woff'
})
const font_3 = CabinetGrotesk({
  src: '../../../fonts/CabinetGrotesk-Extrabold.woff'
})

const font_5 = Satoshi_Bold({
  src: '../../../fonts/Satoshi-Bold.woff'
})

const page = () => {
  return (
    <section className='m-8'>
      <div className='flex h-full w-full items-center justify-center py-10'>
        <div className='grid h-full place-items-center gap-6 lg:w-[80%] xl:grid-cols-2 2xl:grid-cols-3'>
          <div className='h-[80vh] w-full rounded-3xl bg-[#FF4242]'>
            <Image
              src={simon}
              alt='image'
              className='h-1/2 rounded-t-2xl object-cover'
            />
            <div className='relative h-1/2 px-6 text-[#FFF5EB]'>
              <h1 className={cn('mt-10 text-5xl ', font_3.className)}>
                Simon Game
              </h1>
              <span
                className={cn(
                  'my-2 flex items-center justify-start gap-1',
                  font_5.className
                )}
              >
                <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>Recent</Badge>
                <Badge className='border border-[#FFF5EB] bg-transparent'>
                  Implemented
                </Badge>
              </span>
              <p className={cn('mt-2 text-2xl', font_2.className)}>
                The project is inspired by the real-world Simon game and tries
                to replicate all the game conditions with the help of jQuery.
              </p>
              <div className='absolute bottom-16 flex items-center justify-start'>
                <Button
                  className={cn(
                    'flex items-center justify-center gap-1 bg-[#222222] p-4 text-xl',
                    font_2.className
                  )}
                >
                  <Link href='https://rb.gy/vxr5kv'>Link</Link>
                  <ArrowUpRight size={25} />
                </Button>
              </div>
            </div>
          </div>
          <div className='h-[80vh] w-full rounded-3xl bg-[#FF4242]'>
            <Image
              src={allspace}
              alt='image'
              className='h-1/2 rounded-t-3xl object-cover'
            />
            <div className='relative h-1/2 px-6 text-[#FFF5EB]'>
              <h1 className={cn('mt-10 text-5xl', font_3.className)}>
                AllSpace
              </h1>
              <span
                className={cn(
                  'my-2 flex items-center justify-start gap-1',
                  font_5.className
                )}
              >
                <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>Recent</Badge>
                <Badge className='border border-[#FFF5EB] bg-transparent'>
                  Implemented
                </Badge>
              </span>
              <p className={cn('mt-2 text-2xl ', font_2.className)}>
                It is a documentaion platform, curating the real-time cursor
                features of google docs and UI interaction of Notion.
              </p>
              <div className='absolute bottom-16 flex items-center justify-start'>
                <Button
                  className={cn(
                    'flex items-center justify-center gap-1 bg-[#222222] p-4 text-xl',
                    font_2.className
                  )}
                >
                  <Link href='https://rb.gy/drdbtt'>Link</Link>
                  <ArrowUpRight size={25} />
                </Button>
              </div>
            </div>
          </div>
          <div className='h-[80vh] w-full rounded-3xl bg-[#FF4242]'>
            <Image
              src={ticktick}
              alt='image'
              className='h-1/2 rounded-t-3xl object-cover'
            />
            <div className='relative h-1/2 px-6 text-[#FFF5EB]'>
              <h1 className={cn('mt-10 text-5xl ', font_3.className)}>
                TickTick
              </h1>
              <span
                className={cn(
                  'my-2 flex items-center justify-start gap-1',
                  font_5.className
                )}
              >
                <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>Earlier</Badge>
                <Badge className='border border-[#FFF5EB] bg-transparent'>
                  Implemented
                </Badge>
              </span>
              <p className={cn('mt-2 text-2xl ', font_2.className)}>
                It is a console level productivity platform that lets you add
                task, delete them, mark the task as completed and also provides
                a pomodoro timer.
              </p>
              <div className='absolute bottom-16 flex items-center justify-start'>
                <Button
                  className={cn(
                    'flex items-center justify-center gap-1 bg-[#222222] p-4 text-xl',
                    font_2.className
                  )}
                >
                  <Link href='https://rb.gy/1w8oko'>Link</Link>
                  <ArrowUpRight size={25} />
                </Button>
              </div>
            </div>
          </div>
          <div className='h-[80vh] w-full rounded-3xl bg-[#FF4242]'>
            <div className='mt-10 flex h-full w-full flex-col items-center justify-center p-6 text-[#FFF5EB]'>
              <div className='flex w-full items-center justify-start'>
                <h1 className={cn('text-5xl ', font_3.className)}>
                  Weather Application
                </h1>
              </div>

              <span
                className={cn(
                  'mt-3 flex w-full items-center justify-start gap-1',
                  font_5.className
                )}
              >
                <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>Earlier</Badge>
                <Badge className='border border-[#FFF5EB] bg-transparent'>
                  Implemented
                </Badge>
              </span>
              <p className={cn('mt-2 text-2xl ', font_2.className)}>
                It is a python application made to understand the working of
                API. OpenWeather API was used to generate a response and was
                displayed over a UI made with Tkinter python module.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
