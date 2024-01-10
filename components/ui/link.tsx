import { cn } from "@/lib/utils";
import NextLink from "next/link";

export function Link(props: LinkProps) {
	return (
		<NextLink
			className={cn("group text-primary transition duration-300 uppercase", props.className)}
			href={props.href}
			target={props.newTab ? "_blank" : "_self"}
		>
			{props.text}
			<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
		</NextLink>
	);
}

interface LinkProps {
	href: string;
	text: string;
	className?: string;
	newTab?: boolean;
}
