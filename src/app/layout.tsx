import {name,  description } from '@/typescript/constants'
import '../styles/globals.scss'
import { FontSerif } from '../typescript/fonts'
import Script from 'next/script'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'
import Navbar from '@/components/nav'
import { Metadata } from 'next'
import Footer from '@/components/footer'
import { version as reactVersion } from 'react'
import pkg from '../../package.json'
const url = new URL("https://camdencatholic.github.io/smartcarbon/")




export const metadata: Metadata = {
  title: name,
  description: description,
  generator: `Next.js v${pkg.dependencies.next} & React v${reactVersion}`,
  metadataBase: url,
  openGraph: {
    type: "website",
    title: name,
    description: description,
    images: {
      url: "https://camdencatholic.github.io/smartcarbon/favi-text.png"
    }
  }
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
        <link rel="shortcut icon" href="https://camdencatholic.github.io/smartcarbon/favi.svg" type="image/x-icon" />
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
        <div className="pt-4">
          <Footer />
        </div>
      </body>
    </html>
  )
}
