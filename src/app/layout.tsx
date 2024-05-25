import type { Metadata } from 'next'
import { Tilt_Warp } from 'next/font/google'
import './globals.css'

const font = Tilt_Warp({ subsets: ['latin'] })

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
