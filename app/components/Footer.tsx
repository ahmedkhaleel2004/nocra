import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="text-white bg-body-blue">
			<div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
				<p className="font-bold text-2xl text-white mb-2 sm:mb-0">Nocra</p>
				<p className="text-sm text-white mx-auto my-0">
					© {new Date().getFullYear()} Nocra. All rights reserved.
				</p>
				<div className="flex space-x-4">
					<Link href="/" className="text-white hover:text-black">
						Home
					</Link>
					<Link href="/projects" className="text-white hover:text-black">
						Projects
					</Link>
					<Link href="/grades" className="text-white hover:text-black">
						Grades
					</Link>
					<Link href="/leaderboard" className="text-white hover:text-black">
						Leaderboard
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
