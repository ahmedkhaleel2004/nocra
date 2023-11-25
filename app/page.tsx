// /app/page.tsx
import { SiGoogle } from "@icons-pack/react-simple-icons";

export default function Home() {
	return (
		<>
			<main className="relative pt-[8rem] text-white">
				<div className="flex flex-col h-full justify-center items-center">
					<div className="text-center">
						<p className="text-6xl px-[10rem] font-bold">
							Let the results speak
						</p>
						<p className="text-2xl px-[10rem] pt-8">
							Compete to rank up in your career. Fuel your superiority complex.
						</p>
					</div>
					<div className="pt-4 flex justify-center items-center pb-[24rem]">
						<button className="text-xl bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4 shadow-xl transition duration-200 ease-in-out">
							<SiGoogle className="mr-3 h-[1.5rem]" /> Sign In
						</button>
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
				{/* Grid container */}
				<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					{/* Text content container */}
					<div className="pl-[16rem]">
						<h2 className="text-5xl font-bold mb-6">How it works</h2>
						<p className="text-xl mb-4">
							No motivation to study? Do you feel like everyone else is speeding
							past you? Imposter syndrome?
						</p>
						<p className="text-xl mb-4">
							If only there was a way to directly compete and compare your
							performance, just like in video games.
						</p>
						<p className="text-xl">This is the purpose of Nocra.</p>
						{/* ... more content ... */}
					</div>
					{/* Image container */}
					<div className="flex justify-center md:justify-center">
						<img src="/trophy.png" alt="Trophy" className="max-w-full h-auto" />
					</div>
				</div>
			</section>
		</>
	);
}
