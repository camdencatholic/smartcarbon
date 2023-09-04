import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>sup</h1>
      <h2>and welcome to da homescreen</h2>
      <Link href={"/app"} className='btn btn-primary'>go to da app</Link>
    </>
  )
}
