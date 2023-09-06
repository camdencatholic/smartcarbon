import Image from "next/image"
import cchs from '../../public/CCHSwithSealMaskedWhite.png'
import sjp from '../../public/masterlogo-white.png'
import { FontDisplay, FontOrnate } from "@/typescript/fonts"
import {name} from "@/typescript/constants"
import Link from "next/link"
import Icon from "./icon"
export default () => (
	<footer className="bg-neutral-800 text-white py-4 pt-10">
		<div className="flex content-center justify-center">
			<Link href={'/'} className={`font-bold no-underline text-center bg-transparent text-white text-5xl p-10 ${FontDisplay.className}`}>
				<Icon name="globe-americas" /> {name.toLocaleLowerCase()}
			</Link>
		</div>
		<hr />
		<div className="flex content-center justify-center pb-4">
			<h4>
				A project by
			</h4>
		</div>
	{/* <div className="container mx-auto flex justify-center items-center">
	  <div className="w-1/2 flex justify-between">
		<Link href={"https://camdencatholic.org"}>
		  <Image
			src={cchs}
			alt="Camden Catholic Seal"
			width={250}
		  />
		</Link>
		<span className={`text-xl ${FontOrnate.className}`}>&</span>
		<Link href={"https://sjprep.org"}>
		  <Image
			src={sjp}
			alt="St Joes Prep Seal"
			width={250}
		  />
		</Link>
	  </div>
	</div> */}
	<div className="flex content-center justify-center">
		<h4>
			<Link href={"https://github.com/hiteacheryouare"}>Ryan Mullin</Link> <span className={`text-xl ${FontOrnate.className}`}>&amp; &nbsp;</span> <Link href={"https://github.com/HedgehogDubz"}>Tristan Winata</Link>
		</h4>
	</div>
  </footer>
)