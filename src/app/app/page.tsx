import Input from "@/components/input"
import Link from "next/link"
export default ({
	searchParams,
  }: {
	searchParams: { [key: string]: string | string[] | undefined }
  }) => {
	return (
		<>
			<div className="flex content-center justify-center">
				<h1 className="text-4xl pt-4">
					{searchParams.name ? "Hello, " + searchParams.name + "!" : "Hello!"}
				</h1>
			</div>
			<div className="px-8">
				<hr />
			</div>
			<Input />
			<div className="px-8 pt-10">
				<hr />
				<div className="form-text">
					<Link href="/about-our-calculations" className="link link-info">* See how we came to these calculations</Link>
				</div>
			</div>
		</>
	)
}