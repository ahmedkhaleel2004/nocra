import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="text-black bg-white">
			<div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
				<p className="font-bold text-2xl text-black mb-2 sm:mb-0">Nocra</p>
				<p className="text-sm text-black mx-auto my-0">
					© {new Date().getFullYear()} Nocra. All rights reserved.
				</p>
				<div className="flex space-x-4">
					<Link href="/" className="text-black hover:text-body-dark-blue">
						Home
					</Link>
					<Link
						href="/projects"
						className="text-black hover:text-body-dark-blue"
					>
						Projects
					</Link>
					<Link href="/grades" className="text-black hover:text-body-dark-blue">
						Grades
					</Link>
					<Link
						href="/leaderboard"
						className="text-black hover:text-body-dark-blue"
					>
						Leaderboard
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
