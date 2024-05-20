import Image from 'next/image'
import React from 'react'
import Profile from '../../public/IMG-20240504-WA0013.jpg'
import { MapPin } from 'lucide-react'
import { Button } from './ui/button'
import Linkedin from '../../public/LinkedIn.svg'
import Instagram from '../../public/Instagram.svg'
import Twitter from '../../public/X.svg'
import Mail from '../../public/Mail.svg'
import Link from 'next/link'
import location from '../../public/Location.png'

const ProfileSection = () => {
  return (
    <>
      <section className='px-10'>
        <div className='flex h-[250px] w-[250px] items-center justify-start rounded-full object-contain'>
          <Image
            src={Profile}
            alt='logo'
            width={200}
            height={200}
            className='rounded-full'
          />
        </div>
        <div className='mt-6 flex items-center justify-start'>
          <h1 className='text-4xl text-gray-800'>Sankalp Pujare</h1>
        </div>
        <div className='mt-3 flex items-center justify-start text-gray-600'>
          <Image src={location} alt='Location' />
          <h2 className='text-xl'> Mumbai</h2>
        </div>
        <div className='flex items-center justify-start text-gray-600'>
          <h2 className='text-xl'>Full Stack Developer | Student</h2>
        </div>
        <div className='mt-6 flex items-center justify-start gap-3'>
          <Link href={'https://rb.gy/xfgxsz'}>
            <Image src={Linkedin} alt='LinkedIn' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/z7cz51'}>
            <Image src={Instagram} alt='LinkedIn' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/4goiry'}>
            <Image src={Twitter} alt='LinkedIn' width={36} height={36} />
          </Link>
          <Link href={'https://rb.gy/6mqa63'}>
            <Image src={Mail} alt='LinkedIn' width={36} height={36} />
          </Link>
        </div>
        <div className='mt-6 flex items-center justify-start'>
          <Button variant='default' className='p-4 shadow-xl'>
            Contact me!
          </Button>
        </div>
      </section>
    </>
  )
}

export default ProfileSection
