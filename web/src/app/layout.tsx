import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Video & Photos',
  description: 'Your page predilect of video and photos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-black text-gray-50`}>
        {children}
      </body>
    </html>
  )
}
