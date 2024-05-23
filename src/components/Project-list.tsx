import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Badge } from './ui/badge'

const ProjectList = () => {
  return (
    <div>
      <ul className='w-full space-y-2'>
        <li>
          <div className='flex items-center justify-between py-2 pb-2'>
            <div className='flex items-center justify-start'>
              <span className='text-3xl font-normal text-gray-900'>
                AllSpace -
              </span>
              <span className='ml-2 text-xl font-light text-gray-600'>
                Clone Project
              </span>
            </div>
            <div className=' flex items-center justify-end gap-2 font-sans'>
              <Badge variant='outline'>Recent</Badge>
              <Badge className='bg-indigo-700'>Implemented</Badge>
            </div>
          </div>
          <div className='flex w-full items-center justify-start'>
            <span className='text-xl font-light text-neutral-800'>
              It is a documentaion platform, curating the real-time cursor
              features of google docs and UI interaction of Notion.
            </span>
          </div>
          <div className='py-2'>
            <span className='text-xl font-light text-gray-800/85'>
              TechStack:
            </span>
            <span className='px-4 text-xl font-light text-gray-800/85'>
              NextJs, React.js, Socket.io, Supabase
            </span>
            <div className='mt-2 flex w-[100px] items-center justify-center rounded-sm bg-gradient-to-r from-indigo-300 to-indigo-500 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
              <Link href='https://all-space.vercel.app/'>Link</Link>
            </div>
          </div>
        </li>
        <Separator />
        <li>
          <div className='flex items-center justify-between py-2 pb-2'>
            <div className='flex items-center justify-start'>
              <span className='text-3xl font-normal text-gray-900'>
                TickTick -
              </span>
              <span className='ml-2 text-xl font-light text-gray-600'>
                Todo list application
              </span>
            </div>
            <div className=' flex items-center justify-end gap-2 font-sans'>
              <Badge variant='outline'>Earlier</Badge>
              <Badge className='bg-indigo-700'>Implemented</Badge>
            </div>
          </div>
          <div className='flex w-full items-center justify-start'>
            <span className='text-xl font-light text-neutral-800'>
              It is a console level application made with C++ language.
              <span className='text-xl font-light text-neutral-800'>
                <br />
                The app is a productivity platform that lets you add task,
                delete them, mark the task as completed and also provides a
                pomodoro timer.
              </span>
            </span>
          </div>
          <div className='py-2'>
            <span className='text-xl font-light text-gray-800/85'>
              TechStack:
            </span>
            <span className='px-4 text-xl font-light text-gray-800/85'>
              C++
            </span>
            <div className='mt-2 flex w-[100px] items-center justify-center rounded-sm bg-gradient-to-r from-indigo-300 to-indigo-500 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
              <Link href='https://rb.gy/udziwt'>Link</Link>
            </div>
          </div>
        </li>
        <Separator />
        <li>
          <div className='flex items-center justify-between py-2 pb-2'>
            <div className='flex items-center justify-start'>
              <span className='text-3xl font-normal text-gray-900'>
                Weather Application -
              </span>
              <span className='ml-2 text-xl font-light text-gray-600'>
                Academic Project
              </span>
            </div>
            <div className=' flex items-center justify-end gap-2 font-sans'>
              <Badge variant='outline'>Earlier</Badge>
              <Badge className='bg-indigo-700'>Implemented</Badge>
            </div>
          </div>
          <div className='flex w-full items-center justify-start'>
            <span className='text-xl font-light text-neutral-800'>
              It is a python application made to understand the working of API.
              <span className='text-xl font-light text-neutral-800'>
                <br />
                OpenWeather API was used to generate a response and was
                displayed over a UI made with Tkinter python module.
              </span>
            </span>
          </div>
          <div className='py-2'>
            <span className='text-xl font-light text-gray-800/85'>
              TechStack:
            </span>
            <span className='px-4 text-xl font-light text-gray-800/85'>
              Python 3.1, Tkinter modules, OpenWeather API
            </span>
          </div>
        </li>
        <Separator />
      </ul>
    </div>
  )
}

export default ProjectList
