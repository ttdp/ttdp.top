import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stella Tian',
  description: 'Welcome to Stella Tian Living Blog.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="__next" className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
