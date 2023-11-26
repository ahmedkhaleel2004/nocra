import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
	const name: string = "Ahmed Khaleel";
	const projects = [
		{
			title: "Dexterity Dash",
			score: "253",
			description:
				"A custom physical therapy solution for MS patients to improve hand mobility and remain active.",
			tags: "Inventor, RPi, Code",
			date: "2028-10-10",
			imageUrl: "/dummyImage.png",
		},
		{
			title: "Code!",
			score: "129",
			description: "Today I coded a discord bot.",
			tags: "Python, Requests, Async/Await",
			date: "2023-08-29",
			imageUrl: "/code.jpg",
		},
	];

	return (
		<>
			<main className="relative pt-[16px] text-white">
				<div className="absolute bottom-0 w-full translate-y-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#ffffff"
							fill-opacity="1"
							d="0,256L0,160L1440,160L1440,320L0,320L0,320Z"
						></path>
					</svg>
				</div>
			</main>
			<section className=" flex flex-col justify-center items-center mb-16">
				<div className="flex flex-col h-full justify-center items-center">
					<div className="text-center">
						<p
							className="text-4xl text-shadow text-white font-bold pt-[4rem] pb-[3rem] opacity-0 animate-slideDown"
							style={{ animationDelay: `0ms` }}
						>
							{name}'s Projects
						</p>
					</div>
				</div>
				{projects.map((project, index) => (
					<div
						key={index}
						className="opacity-0 translate-y-4 animate-slideDown"
						style={{ animationDelay: `${index * 50 + 100}ms` }}
					>
						<ProjectCard
							key={index}
							title={project.title}
							score={project.score}
							description={project.description}
							tags={project.tags}
							date={project.date}
							imageUrl={project.imageUrl}
						/>
					</div>
				))}
			</section>
		</>
	);
};

export default Projects;
