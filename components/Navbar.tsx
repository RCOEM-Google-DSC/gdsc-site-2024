"use client";
import { Link } from "./ui/link";
import { Burger } from "./ui/burger";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useEffect } from "react";

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => (theme === "light" ? setTheme("dark") : setTheme("light"));

	useEffect(() => {
		const toggle = (e: KeyboardEvent) => {
			if (e.altKey && e.code === "KeyD") {
				e.preventDefault();
				toggleTheme();
			}
		};
		document.addEventListener("keydown", toggle);
		return () => document.removeEventListener("keydown", toggle);
	}, [toggleTheme]);

	useEffect(() => {
		const button = document.querySelector(".switch")!;
		const thumb = document.querySelector(".switch_thumb")!;
		button.setAttribute("data-state", theme === "dark" ? "checked" : "unchecked");
		thumb.setAttribute("data-state", theme === "dark" ? "checked" : "unchecked");
	}, [theme]);

	return (
		<nav className="sticky top-0 z-20 flex w-[100vw] select-none items-center justify-between gap-16 overflow-visible bg-background p-4 max-md:gap-0">
			<div className="flex items-center justify-center gap-4 md:hidden max-md:scale-90">
				<Burger />
			</div>
			<div className="flex px-12 justify-start gap-11 text-lg max-md:justify-end max-md:px-4">
				<Link href="/" text="Home" newTab className="max-md:hidden" />
				<Link href="/" text="Events" className="max-md:hidden" />
				<Link href="/" text="Team" className="max-md:hidden" />
				<Link href="/" text="Alumini" className="max-md:hidden" />
				<Link href="/" text="Contact" className="max-md:hidden" />
				<Switch onClick={toggleTheme} />
			</div>
		</nav>
	);
}
