import HeroText from '@/components/heroText'
import Icon from '@/components/icon'
import { name } from '@/typescript/constants'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <section className="py-[13rem]">
      <div className="container mx-auto text-center">
        <HeroText />
        <p className="text-lg mb-8">
          {name} is a carbon calculator that helps you make concious decisions regarding the carbon footprint of your travel plans
        </p>
        <div className="flex justify-center">
          <div className="px-2">
            <Link href={"/app"} className="btn btn-primary">
            <Icon name="arrow-right-circle"  /> Get Started 
            </Link>
          </div>
          <div className="px-2">
            <Link href={"/reduce/how-to-reduce"} className="btn btn-secondary">
            <Icon name="recycle" /> Learn how to reduce 
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
