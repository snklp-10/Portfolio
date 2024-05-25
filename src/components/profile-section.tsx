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
import { ArrowDownToLine } from 'lucide-react'
import { Tilt_Warp } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Tilt_Warp({ subsets: ['latin'] })

const ProfileSection = () => {
  return (
    <>
      <div>
        <div className='flex items-center justify-center '>
          <div className='flex h-[250px] w-[250px] items-center justify-center rounded-full object-contain'>
            <Image
              src={Profile}
              alt='profile'
              width={250}
              height={250}
              className='rounded-full'
            />
          </div>
        </div>
        <div className='mt-6 flex items-center justify-center '>
          <h1 className='text-4xl text-gray-800'>Sankalp Pujare</h1>
        </div>
        <div className='mt-3 flex items-center justify-center text-gray-600 '>
          <Image src={location} alt='Location' />
          <h2 className='text-xl'> Mumbai</h2>
        </div>
        <div className='flex items-center  justify-center text-gray-600 '>
          <h2 className='text-xl'>Full Stack Developer | Student</h2>
        </div>
        <div className='mt-6 flex items-center justify-center  gap-3 '>
          <Link href={'https://rb.gy/xfgxsz'}>
            <Image src={Linkedin} alt='LinkedIn' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/z7cz51'}>
            <Image src={Instagram} alt='Instagram' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/4goiry'}>
            <Image src={Twitter} alt='Twitter' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/6mqa63'}>
            <Image src={Mail} alt='Gmail' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/icz5jn'}>
            <Image src={Github} alt='Github' width={36} height={36} />
          </Link>
        </div>
        <div className='mt-6 flex items-center justify-center gap-2 '>
          <Button
            variant='default'
            className='flex items-center justify-center bg-gradient-to-r from-indigo-400 to-indigo-600 p-4 text-white shadow-xl hover:-rotate-2'
          >
            Contact me!
          </Button>
          <Button
            variant='secondary'
            className='flex items-center justify-center gap-1 p-4 shadow-xl hover:rotate-2'
          >
            <Link href='https://bit.ly/3KbpHtY'>Download Resume</Link>
            <ArrowDownToLine />
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProfileSection
