import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { useMediaQuery } from 'react-responsive'
import { Ban } from 'lucide-react'

const ProjectList = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })
  return (
    <ul className='w-full space-y-3'>
      <li>
        <div className='flex items-center justify-between gap-4 sm:flex-row'>
          <div className='flex flex-col items-center justify-center sm:flex-row'>
            <span className='text-3xl font-normal text-gray-900'>AllSpace</span>
            <span className='text-xl font-light text-gray-600 sm:ml-2'>
              Clone Project
            </span>
          </div>
          <div>
            {!isSmallScreen ? (
              <div className=' justify-cenetr flex flex-col items-center gap-2 font-sans sm:flex-row'>
                <Badge variant='outline'>Recent</Badge>
                <Badge className='bg-indigo-700'>Implemented</Badge>
              </div>
            ) : (
              <div className='mt-2 flex w-[90px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                <Link href='https://all-space.vercel.app/'>Link</Link>
              </div>
            )}
          </div>
        </div>
        {!isSmallScreen ? (
          <>
            <div className='mt-2 flex w-full items-center justify-start sm:text-xl'>
              <span className='font-light text-gray-700'>
                It is a documentaion platform, curating the real-time cursor
                features of google docs and UI interaction of Notion.
              </span>
            </div>
            <div className='mt-2'>
              <span className='text-xl font-light text-gray-800/85'>
                TechStack:
              </span>
              <span className='px-4 text-xl font-light text-gray-800/85'>
                NextJs, React.js, Socket.io, Supabase
              </span>
              <div className='mt-2 flex w-[100px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                <Link href='https://all-space.vercel.app/'>Link</Link>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </li>
      <Separator />
      <li>
        <div className='flex items-center justify-between gap-4  sm:flex-row'>
          <div className='flex flex-col items-center justify-start sm:flex-row'>
            <span className='-ml-[82px] text-3xl font-normal text-gray-900 sm:ml-0'>
              TickTick
            </span>
            <span className='text-xl font-light text-gray-600 sm:ml-2'>
              Todo list application
            </span>
          </div>
          <div>
            {!isSmallScreen ? (
              <div className=' justify-cenetr flex flex-col items-center gap-2 font-sans sm:flex-row'>
                <Badge variant='outline'>Earlier</Badge>
                <Badge className='bg-indigo-700'>Implemented</Badge>
              </div>
            ) : (
              <div className='mt-2 flex w-[90px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                <Link href='https://all-space.vercel.app/'>Link</Link>
              </div>
            )}
          </div>
        </div>
        {!isSmallScreen ? (
          <>
            <div className='mt-2 flex w-full items-center justify-start sm:text-xl'>
              <span className='text-xl font-light text-gray-700'>
                It is a console level application made with C++ language.
                <span className='text-xl font-light text-gray-700'>
                  <br />
                  The app is a productivity platform that lets you add task,
                  delete them, mark the task as completed and also provides a
                  pomodoro timer.
                </span>
              </span>
            </div>
            <div className='mt-2'>
              <span className='text-xl font-light text-gray-800/85'>
                TechStack:
              </span>
              <span className='px-4 text-xl font-light text-gray-800/85'>
                C++
              </span>
              <div className='mt-2 flex w-[100px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                <Link href='https://rb.gy/udziwt'>Link</Link>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </li>
      <Separator />
      <li>
        <div className='flex items-center justify-between gap-4  sm:flex-row'>
          <div className='flex flex-col items-center justify-center sm:flex-row'>
            <span className='text-3xl font-normal text-gray-900'>
              Weather Application
            </span>
            <span className='-ml-[54px] text-xl font-light text-gray-600 sm:ml-2 '>
              Academic Project
            </span>
          </div>
          <div>
            <div>
              {!isSmallScreen ? (
                <div className=' justify-cenetr flex flex-col items-center gap-2 font-sans sm:flex-row'>
                  <Badge variant='outline'>Earlier</Badge>
                  <Badge className='bg-indigo-700'>Implemented</Badge>
                </div>
              ) : (
                <div className='mt-2 flex w-[90px] items-center justify-center rounded-sm bg-transparent p-1 text-white shadow-lg hover:-rotate-2 hover:underline'></div>
              )}
            </div>
          </div>
        </div>
        {!isSmallScreen ? (
          <>
            <div className='mt-2 flex w-full items-center justify-start sm:text-xl'>
              <span className='text-xl font-light text-gray-700'>
                It is a python application made to understand the working of
                API.
                <span className='text-xl font-light text-gray-700'>
                  <br />
                  OpenWeather API was used to generate a response and was
                  displayed over a UI made with Tkinter python module.
                </span>
              </span>
            </div>
            <div className='mt-2'>
              <span className='text-xl font-light text-gray-800/85'>
                TechStack:
              </span>
              <span className='px-4 text-xl font-light text-gray-800/85'>
                Python 3.1, Tkinter modules, OpenWeather API
              </span>
            </div>
          </>
        ) : (
          ''
        )}
      </li>
      <Separator />
    </ul>
  )
}

export default ProjectList
