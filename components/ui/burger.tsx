import { useRef, useEffect } from "react";
import { Link } from "./link";

export function Burger() {
	const ref = useRef(null);

	useEffect(() => {
		const anchors = document.querySelectorAll(".links a");
		anchors.forEach((anchor) => {
			anchor.addEventListener("click", () => {
				// @ts-ignore
				ref.current.checked = false;
			});
		});
	}, [ref]);

	return (
		<>
			<input type="checkbox" id="menu" className="hidden" ref={ref} />
			<label htmlFor="menu" id="menu-label" className="hidden max-md:block cursor-pointer">
				<div className="menu" />
			</label>
			<div className="ham-nav text-xl links">
				<Link href="/" text="Home" newTab className="border-b-2" />
				<Link href="/" text="Events" className="border-b-2" />
				<Link href="/" text="Team" className="border-b-2" />
				<Link href="/" text="Alumini" className="border-b-2" />
				<Link href="/" text="Contact" className="border-b-2" />
			</div>
		</>
	);
}
