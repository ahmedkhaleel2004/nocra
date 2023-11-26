import React from "react";
import PlayerCard from "../components/PlayerCard";

const Leaderboard = () => {
	const genericNames = [
		"Ahmed",
		"Jordan",
		"Taylor",
		"Riley",
		"Casey",
		"Avery",
		"Morgan",
		"Quinn",
		"Reese",
		"Skyler",
	];

	const university: string = "McMaster";
	const program: string = "Computer Engineering";
	const year: string = "'26";

	// Function to generate normally distributed numbers
	function normallyDistributedRandom(mean: number, stddev: number) {
		// BOX MULLER TRANSFORM (open source)
		let u = 0,
			v = 0;
		while (u === 0) u = Math.random();
		while (v === 0) v = Math.random();
		return (
			mean +
			stddev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
		);
	}
	// thanks chatgpt
	let players = genericNames.map((name, index) => {
		let score;
		if (index === 0) {
			// Assign a high score to the first player
			score = 900 + Math.floor(Math.random() * 101); // Score between 900 and 1000
		} else {
			// Generate normally distributed scores for the rest
			// Adjust the mean and standard deviation as needed
			score = Math.floor(normallyDistributedRandom(450, 200));
			score = Math.max(0, Math.min(score, 899)); // Ensure score is between 0 and 899
		}

		return {
			pfp: "/pfp.png",
			name: name,
			score: score,
		};
	});

	// Sort players by score in descending order
	players.sort((a, b) => b.score - a.score);

	return (
		<>
			<main className="relative pt-[5rem] text-white">
				<div className="flex flex-col h-full justify-center items-center">
					<div className="text-center">
						<p
							className="text-6xl px-[10rem] font-bold opacity-0 translate-y-4 animate-slideDown"
							style={{ animationDelay: `50ms` }} // Delay for the title
						>
							Leaderboard
						</p>
						<p
							className="text-2xl px-[10rem] pb-64 pt-8 opacity-0 translate-y-4 animate-slideDown"
							style={{ animationDelay: `150ms` }} // Delay for the subtitle
						>
							The top students of {university}'s {program} {year}.
						</p>
					</div>
				</div>
				{/* Adjust the transform translate to position the SVG correctly */}
				<div className="absolute bottom-0 w-full translate-y-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#ffffff"
							fill-opacity="1"
							d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,197.3C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
						></path>
					</svg>
				</div>
			</main>
			<section className="bg-white pt-10">
				<div className="p-16 flex justify-center">
					<div className="bg-white flex-grow rounded-2xl p-4 mb-4 max-w-xl shadow-2xl">
						{players.map((player, index) => (
							<PlayerCard key={index} {...player} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Leaderboard;
