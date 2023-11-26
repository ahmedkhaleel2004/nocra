"use client";
import React, { useState } from "react";
import Image from "next/image";
import DialogBox from "./DialogBox";

interface ProjectCardProps {
	title: string;
	score: string;
	description: string;
	tags: string;
	date: string;
	imageUrl: string;
	// Add other props as needed
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	score,
	description,
	tags,
	date,
	imageUrl,
	// Other props
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogOpen = () => setIsDialogOpen(true);
	const handleDialogClose = () => setIsDialogOpen(false);

	const tagList = tags.split(",").map((tag) => tag.trim());

	return (
		<div className="flex flex-col items-center w-[350px] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white shadow-2xl rounded-2xl overflow-hidden my-8 mx-auto">
			<div className="w-full h-60 relative">
				<Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
			</div>
			<div className="w-full p-4 flex justify-between items-baseline">
				<span>
					<h2 className="text-2xl font-bold inline mr-2">{title}</h2>
					<span className="text-gray-600 text-md">| {date}</span>
				</span>
				<span className="text-white rounded-lg bg-green-600 p-1 font-semibold">
					+{score} score!
				</span>
			</div>
			<div className="w-full px-4">
				<p className="text-gray-600">{description}</p>
				<div className="flex flex-wrap gap-1 mt-6">
					{tagList.map((tag, index) => (
						<span
							key={index}
							className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
						>
							{tag}
						</span>
					))}
				</div>
				{/* Other project details */}
			</div>
			<div className="w-full p-4 pt-6 flex justify-center">
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded w-full shadow-lg hover:bg-blue-600 transition duration-300"
					onClick={handleDialogOpen}
				>
					View Feedback
				</button>
			</div>
			<DialogBox isOpen={isDialogOpen} onClose={handleDialogClose}>
				<div>
					{/* Peer Analysis Section */}
					<span className="font-bold text-white bg-green-600 rounded-xl shadow-xl px-2 py-1">
						Peer Analysis:
					</span>
					<ul className="list-disc mt-3 ml-4">
						<li>
							<strong>Strength:</strong> The project's user interface is
							intuitive and user-friendly, enhancing the overall user
							experience.
						</li>
						<li>
							<strong>Improvement Needed:</strong> The response time for
							database queries can be optimized to improve performance.
						</li>
					</ul>

					{/* AI Analysis Section */}
					<div className="mt-4 p-2">
						<span className="font-bold text-white bg-blue-600 rounded-xl shadow-xl px-2 py-1">
							AI Analysis:
						</span>
						<ul className="list-disc mt-3 ml-4">
							<li>
								<strong>Positive Insight:</strong> The application’s
								architecture is well-structured, making it scalable and
								maintainable.
							</li>
							<li>
								<strong>Suggestion:</strong> Implementing additional security
								measures, such as input validation and encryption, could enhance
								data security.
							</li>
						</ul>
					</div>
				</div>
			</DialogBox>
		</div>
	);
};

export default ProjectCard;
