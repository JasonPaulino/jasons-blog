import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { ProfilePic } from './components/ProfilePic'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "JSON Blog",
  description: "This is Jason Paulino's blog site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800 text-white'>
        <NavBar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
