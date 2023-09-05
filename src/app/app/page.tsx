import Input from "@/components/input"
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
		</>
	)
}