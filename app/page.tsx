import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
	return (
		<main className="flex flex-col items-start justify-between p-28 max-md:p-8 overflow-hidden relative">
			<Image src="/images/logo.svg" alt="Logo" height={50} width={120} className="w-auto max-md:w-16" />
			<h1 className="text-5xl tracking-normal my-2 w-1/3 leading-tight text-primary">Google Developer Student Clubs</h1>
			<p className="text-2xl py-4 text-muted-foreground max-md:text-lg">RCOEM CHAPTER</p>
			<p className="text-2xl tracking-normal my-2 w-2/4 leading-tight text-muted-foreground max-md:w-3/4 max-md:text-sm">
				Developer Student Clubs are university based community groups for students interested in Google developer
				technologies.
			</p>
			<Button className="uppercase my-6 px-4 rounded-none text-sm border-primary max-md:my-2" variant="outline">
				Join Us!
			</Button>
			<Image
				src="/images/sidebar.svg"
				alt="Sidebar"
				height={200}
				width={200}
				className="absolute md:w-1/5 right-0 top-0 z-20 max-md:-right-16 overflow-x-hidden max-md:top-0 max-md:h-80 max-md:-z-10"
			/>
		</main>
	);
}
