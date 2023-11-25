// components/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll event
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Register the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the scroll event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Define a base class for the links
	const linkBaseClass = "rounded-full py-2 px-4 transition-all duration-300";

	// Define the hover classes based on the scroll state
	const linkHoverClass = isScrolled
		? "hover:text-white hover:bg-black" // White text, black background on hover when scrolled
		: "hover:text-black hover:bg-white"; // Black text, white background on hover when not scrolled

	return (
		<header
			className={`p-4 fixed w-full z-10 transition-colors duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<nav
				className={`items-center container mx-auto flex justify-between ${
					isScrolled ? "text-black" : "text-white"
				}`}
			>
				<div>
					<Link
						href="/"
						className="text-6xl font-bold flex space-x-4 items-center"
					>
						{/* Conditional rendering of logo based on the isScrolled state */}
						{isScrolled ? (
							<img
								src="/nocralogoblack.png" // Black logo path
								alt="Nocra Logo"
								className="h-20"
							/>
						) : (
							<img
								src="/nocralogowhite.png" // White logo path
								alt="Nocra Logo"
								className="h-20"
							/>
						)}
						<span className="px-1">Nocra</span>
					</Link>
				</div>
				<div className="text-3xl flex space-x-14 pr-4">
					<Link href="/" className={`${linkBaseClass} ${linkHoverClass}`}>
						Home
					</Link>
					<Link
						href="/projects"
						className={`${linkBaseClass} ${linkHoverClass}`}
					>
						Projects
					</Link>
					<Link href="/grades" className={`${linkBaseClass} ${linkHoverClass}`}>
						Grades
					</Link>
					<Link
						href="/leaderboard"
						className={`${linkBaseClass} ${linkHoverClass}`}
					>
						Leaderboard
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
