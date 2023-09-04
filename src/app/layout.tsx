import {name,  description } from '@/typescript/constants'
import './globals.css'
import '../styles/globals.scss'
import { Raleway } from 'next/font/google'
import Script from 'next/script'

const rw = Raleway({ subsets: ['latin'], weight: "variable" })

export const metadata = {
  title: name,
  description: description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/vertical.jpg" type="image/x-icon" />
      <Script id="toggleTheme">
						{
							`if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
								document.body.setAttribute('data-bs-theme', 'dark')
							} else {
								document.body.setAttribute('data-bs-theme', 'light')
							}`
						}
					</Script>
      </head>
      <body className={rw.className}>
        {children}
      </body>
    </html>
  )
}
