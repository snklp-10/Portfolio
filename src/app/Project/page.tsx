'use client'
import React, { useState } from 'react'
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

const font_1 = Satoshi_Regular({
  src: '../../../fonts/Satoshi-Regular.woff'
})
const font_2 = CabinetGrotesk({
  src: '../../../fonts/CabinetGrotesk-Extrabold.woff'
})

const font_3 = Satoshi_Bold({
  src: '../../../fonts/Satoshi-Bold.woff'
})
const cardContent = [
  {
    title: 'Simon Game',
    badge_1: 'Recent',
    badge_2: 'Implemented',
    imgSrc: simon,
    cardDescription:
      'The project is inspired by the real-world Simon game and tries to replicate all the game conditions with the help of jQuery.',
    link: 'https://rb.gy/vxr5kv'
  },
  {
    title: 'AllSpace',
    badge_1: 'Recent',
    badge_2: 'Implemented',
    imgSrc: allspace,
    cardDescription:
      'It is a documentaion platform, curating the real-time cursor features of google docs and UI interaction of Notion.',
    link: 'https://rb.gy/drdbtt'
  },
  {
    title: 'TickTick',
    badge_1: 'Earlier',
    badge_2: 'Implemented',
    imgSrc: ticktick,
    cardDescription:
      'It is a console level productivity platform that lets you add task, delete them, mark the task as completed and also provides a pomodoro timer.',
    link: 'https://rb.gy/1w8oko'
  },
  {
    title: 'Weather Application',
    badge_1: 'Recent',
    badge_2: 'Implemented',
    cardDescription:
      'It is a python application made to understand the working of API. OpenWeather API was used to generate a response and was displayed over a UI made with Tkinter python module.'
  }
]

const Page = () => {
  return (
    <section className='m-8'>
      <div className='flex h-full w-full items-center justify-center py-8'>
        <div className='grid h-full place-items-center gap-6 sm:w-[80%] xl:grid-cols-2 2xl:grid-cols-3'>
          {cardContent.map(items => (
            <>
              {items.title === 'Weather Application' ? (
                <div className='min-h-min w-full rounded-3xl bg-[#FF4242] py-14 xl:h-[80vh] xl:py-0'>
                  <div className='mt-10 flex h-full w-full flex-col items-center justify-center p-6 text-[#FFF5EB]'>
                    <div className='flex w-full items-center justify-start'>
                      <h1 className={cn('text-5xl ', font_2.className)}>
                        {items.title}
                      </h1>
                    </div>

                    <span
                      className={cn(
                        'mt-3 flex w-full items-center justify-start gap-1',
                        font_3.className
                      )}
                    >
                      <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>
                        {items.badge_1}
                      </Badge>
                      <Badge className='border border-[#FFF5EB] bg-transparent'>
                        {items.badge_2}
                      </Badge>
                    </span>
                    <p
                      className={cn(
                        'mt-2 text-xl md:text-2xl',
                        font_1.className
                      )}
                    >
                      {items.cardDescription}
                    </p>
                  </div>
                </div>
              ) : (
                <div className='min-h-max w-full rounded-3xl bg-[#FF4242] pb-4 xl:h-[80vh]'>
                  {items.imgSrc ? (
                    <Image
                      src={items.imgSrc}
                      alt='image'
                      className='h-1/3 rounded-t-2xl object-cover md:h-1/2'
                    />
                  ) : (
                    ''
                  )}
                  <div className='relative h-1/2 px-6 text-[#FFF5EB]'>
                    <h1 className={cn('mt-10 text-5xl', font_2.className)}>
                      {items.title}
                    </h1>
                    <span
                      className={cn(
                        'my-2 flex items-center justify-start gap-1',
                        font_3.className
                      )}
                    >
                      <Badge className=' bg-[#FFF5EB] text-[#FF4242]'>
                        {items.badge_1}
                      </Badge>
                      <Badge className='border border-[#FFF5EB] bg-transparent'>
                        {items.badge_2}
                      </Badge>
                    </span>
                    <p
                      className={cn(
                        'mt-2 text-xl md:text-2xl ',
                        font_1.className
                      )}
                    >
                      {items.cardDescription}
                    </p>
                    {items.link ? (
                      <div className='mt-3 flex items-center justify-start xl:absolute xl:bottom-14'>
                        <Button
                          className={cn(
                            'flex items-center justify-center gap-1 rounded-xl bg-[#FFF5EB] p-3 text-xl text-[#FF4242] hover:border hover:border-[#FFF5EB] hover:bg-transparent hover:text-[#FFF5EB]',
                            font_3.className
                          )}
                        >
                          <Link href={items.link}>Link</Link>
                          <ArrowUpRight size={25} />
                        </Button>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
