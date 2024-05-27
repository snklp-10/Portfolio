import Image from 'next/image'
import React from 'react'
import Profile from '../../public/ProfileImage.jpeg'
import { Button } from './ui/button'
import Linkedin from '../../public/LinkedIn.svg'
import Instagram from '../../public/Instagram.svg'
import Twitter from '../../public/X.svg'
import Mail from '../../public/Mail.svg'
import Github from '../../public/Github.svg'
import Link from 'next/link'
import location from '../../public/Location.png'
import { ArrowDownToLine, MapPinIcon } from 'lucide-react'
import { Tilt_Warp } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Tilt_Warp({ subsets: ['latin'] })

const ProfileSection = () => {
  return (
    <>
      <div className='p-7'>
        <div>
          <div className='flex items-center justify-center '>
            <div className='flex h-[150px] w-[150px] items-center justify-center rounded-full object-contain sm:h-[200px] sm:w-[200px]'>
              <Image src={Profile} alt='profile' className='rounded-full' />
            </div>
          </div>
          <div className='text-[20px] sm:text-[30px]'>
            <div className='mt-6 flex items-center justify-center'>
              <h1 className='text-gray-800'>Sankalp Pujare</h1>
            </div>
            <div className='m-1 flex items-center justify-center text-gray-600 '>
              <MapPinIcon size={20} />
              <h2 className='text-[12px] sm:text-[16px]'>Mumbai</h2>
            </div>
            <div className='flex items-center  justify-center text-gray-600 '>
              <h2 className='text-[12px] sm:text-[16px]'>
                Full Stack Developer | Student
              </h2>
            </div>
            <div>
              <div className='m-4 flex items-center justify-center gap-3'>
                <Link href={'https://rb.gy/xfgxsz'}>
                  <Image
                    src={Linkedin}
                    alt='LinkedIn'
                    className='h-[25px] w-[25px] sm:h-[36px] sm:w-[36px]'
                  />
                </Link>
                <Link href={'https://rb.gy/z7cz51'}>
                  <Image
                    src={Instagram}
                    alt='Instagram'
                    className='h-[25px] w-[25px] sm:h-[36px] sm:w-[36px]'
                  />
                </Link>
                <Link href={'https://rb.gy/4goiry'}>
                  <Image
                    src={Twitter}
                    alt='Twitter'
                    className='h-[25px] w-[25px] sm:h-[36px] sm:w-[36px]'
                  />
                </Link>
                <Link href={'https://rb.gy/6mqa63'}>
                  <Image
                    src={Mail}
                    alt='Gmail'
                    className='h-[25px] w-[25px] sm:h-[36px] sm:w-[36px]'
                  />
                </Link>
                <Link href={'https://rb.gy/icz5jn'}>
                  <Image
                    src={Github}
                    alt='Github'
                    className='h-[25px] w-[25px] sm:h-[36px] sm:w-[36px]'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
              <Button className='bg-indigo-600 text-[10px] shadow-lg sm:text-[16px]'>
                Contact me!
              </Button>
              <Button
                variant='secondary'
                className='flex items-center justify-center gap-1 text-[10px] shadow-lg sm:text-[16px]'
              >
                Download Resume
                <ArrowDownToLine size={15} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSection
