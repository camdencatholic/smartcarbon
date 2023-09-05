import {name,  description } from '@/typescript/constants'
import '../styles/globals.scss'
import { FontSerif } from '../typescript/fonts'
import Script from 'next/script'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'
import Navbar from '@/components/nav'



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
        <link rel="shortcut icon" href="/globe-americas.svg" type="image/x-icon" />
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
      <body className={FontSerif.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
