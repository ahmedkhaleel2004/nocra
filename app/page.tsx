// /app/page.tsx

export default function Home() {
	return (
		<>
			<main className="relative pt-[14rem] text-white">
				<div className="flex">
					<div>
						<p className="text-6xl px-[10rem] font-bold ">Fuel your ego.</p>
						<p className="text-2xl px-[10rem] pt-8 pb-[24rem]">
							Compete to rank up in your career.
						</p>
					</div>
					<div className="">
						<img
							src="/trophy.png" // White logo path
							alt="Nocra Logo"
							className="h-[24rem]"
						/>
					</div>
				</div>
				{/* Adjust the transform translate to position the SVG correctly */}
				<div className="absolute bottom-0 w-full translate-y-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#ffffff"
							fill-opacity="1"
							d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,245.3C672,224,768,192,864,165.3C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>
			</main>
			<section className="bg-white pt-16">
				{/* Adjust padding-top to push content below the SVG path */}
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-4">How it Works</h2>
					{/* ... more content ... */}
				</div>
			</section>
		</>
	);
}
