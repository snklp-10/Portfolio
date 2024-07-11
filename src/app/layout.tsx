import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'Get to know me thorugh my portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-[#FFF5EB]')}>{children}</body>
    </html>
  )
}
