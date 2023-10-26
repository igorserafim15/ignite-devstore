import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevStore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={clsx(
          inter.className,
          'bg-zinc-950 text-zinc-50 antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}
