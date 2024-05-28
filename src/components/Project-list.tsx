import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { useMediaQuery } from 'react-responsive'
import { Ban } from 'lucide-react'

const ProjectList = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })
  return (
    <>
      <div className='mt-6 flex w-full items-center justify-center'>
        <ul className='w-full space-y-2 py-3'>
          <li>
            <div className='flex w-full items-center justify-center gap-1 pt-1'>
              <div className='flex w-full flex-col items-center justify-start py-1 sm:flex-row'>
                <div className='w-full sm:flex sm:items-center'>
                  <div className='text-[24px] text-gray-800 sm:text-[28px]'>
                    <span>AllSpace</span>
                  </div>
                  <div className='text-[14px] text-gray-600 sm:ml-2 sm:mt-2 sm:text-[17px]'>
                    <span>Clone Project</span>
                  </div>
                </div>
              </div>
              <div className='flex w-full items-center justify-end '>
                <div>
                  {!isSmallScreen ? (
                    <div className=' flex flex-col items-center justify-center gap-2 font-sans sm:flex-row'>
                      <Badge variant='outline'>Recent</Badge>
                      <Badge className='bg-indigo-700'>Implemented</Badge>
                    </div>
                  ) : (
                    <div className='flex w-[60px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                      <Link href='https://all-space.vercel.app/'>Link</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className='mb-2 flex items-center justify-start'>
                {!isSmallScreen ? (
                  <>
                    <div>
                      <span className='text-[17px] text-gray-700'>
                        It is a documentaion platform, curating the real-time
                        cursor features of google docs and UI interaction of
                        Notion.
                      </span>
                      <div className='mt-2 text-[17px]'>
                        <span>
                          <span className=' text-gray-800/85'>TechStack:</span>
                          <span className='ml-2 font-light text-gray-800/85'>
                            NextJs, React.js, Socket.io, Supabase
                          </span>
                        </span>
                        <div className='mt-2 flex w-[80px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                          <Link href='https://all-space.vercel.app/'>Link</Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <Separator />
            </div>
          </li>
          <li>
            <div className='flex w-full items-center justify-center gap-1 pt-1'>
              <div className='flex w-full flex-col items-center justify-start py-1 sm:flex-row'>
                <div className='w-full sm:flex sm:items-center'>
                  <div className='text-[24px] text-gray-800 sm:text-[28px]'>
                    <span>TickTick</span>
                  </div>
                  <div className='text-[14px] text-gray-600 sm:ml-2 sm:mt-2 sm:text-[17px]'>
                    <span>Todo application</span>
                  </div>
                </div>
              </div>
              <div className='flex w-full items-center justify-end '>
                <div>
                  {!isSmallScreen ? (
                    <div className=' flex flex-col items-center justify-center gap-2 font-sans sm:flex-row'>
                      <Badge variant='outline'>Earlier</Badge>
                      <Badge className='bg-indigo-700'>Implemented</Badge>
                    </div>
                  ) : (
                    <div className='flex w-[60px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                      <Link href='https://rb.gy/udziwt'>Link</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className='mb-2 flex items-center justify-start'>
                {!isSmallScreen ? (
                  <>
                    <div>
                      <span className='text-[17px] text-gray-700'>
                        It is a console level application made with C++
                        language.
                        <br />
                        The app is a productivity platform that lets you add
                        task, delete them, mark the task as completed and also
                        provides a pomodoro timer.
                      </span>
                      <div className='mt-2 text-[17px]'>
                        <span>
                          <span className=' text-gray-800/85'>TechStack:</span>
                          <span className='ml-2 font-light text-gray-800/85'>
                            NextJs, React.js, Socket.io, Supabase
                          </span>
                        </span>
                        <div className='mt-2 flex w-[80px] items-center justify-center rounded-sm bg-indigo-600 p-1 text-white shadow-lg hover:-rotate-2 hover:underline'>
                          <Link href='https://rb.gy/udziwt'>Link</Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <Separator />
            </div>
          </li>
          <li>
            <div className='flex w-full items-center justify-center gap-1  pt-1'>
              <div className='flex w-full flex-col items-center justify-start py-1 sm:flex-row'>
                <div className='w-full sm:flex sm:items-center'>
                  <div className='text-[22px] text-gray-800 sm:text-[24px]'>
                    <span>Weather Application</span>
                  </div>
                  <div className='text-[14px] text-gray-600 sm:ml-2 sm:mt-1 sm:text-[17px]'>
                    <span>Academic Project</span>
                  </div>
                </div>
              </div>
              <div className='flex w-[30%] items-center justify-end '>
                <div>
                  {!isSmallScreen ? (
                    <div className=' flex flex-col items-center justify-center gap-2 font-sans sm:flex-row'>
                      <Badge variant='outline'>Earlier</Badge>
                      <Badge className='bg-indigo-700'>Implemented</Badge>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className='mb-2 flex items-center justify-start'>
                {!isSmallScreen ? (
                  <>
                    <div>
                      <span className='text-[17px] text-gray-700'>
                        It is a python application made to understand the
                        working of API.
                        <br />
                        OpenWeather API was used to generate a response and was
                        displayed over a UI made with Tkinter python module.
                      </span>
                      <div className='mt-2 text-[17px]'>
                        <span>
                          <span className=' text-gray-800/85'>TechStack:</span>
                          <span className='ml-2 font-light text-gray-800/85'>
                            Python 3.1, Tkinter modules, OpenWeather API
                          </span>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <Separator />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProjectList
