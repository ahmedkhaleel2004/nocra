"use client";
import React, { useState } from "react";
import Image from "next/image";
import DialogBox from "./DialogBox"; // Assuming DialogBox is in the same directory

interface ProjectCardProps {
	title: string;
	score: string;
	learnings: string;
	date: string;
	imageUrl: string;
	// Add other props as needed
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	score,
	learnings,
	date,
	imageUrl,
	// Other props
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogOpen = () => setIsDialogOpen(true);
	const handleDialogClose = () => setIsDialogOpen(false);

	return (
		<div className="flex flex-col items-center min-w-[300px] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[700px] max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden my-4 mx-auto">
			<div className="w-full h-60 relative">
				{" "}
				{/* Image container with full width */}
				<Image
					src={imageUrl}
					alt={title}
					layout="fill"
					objectFit="cover" // Ensures image covers the area without resizing
				/>
			</div>
			<div className="w-full p-4">
				{" "}
				{/* Content container with full width */}
				<h2 className="text-xl font-bold">{title}</h2>
				<p className="text-gray-600">{learnings}</p>
				{/* Other project details */}
			</div>
			<div className="w-full p-4">
				{" "}
				{/* Button container with full width */}
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" // Full-width button
					onClick={handleDialogOpen}
				>
					View Feedback
				</button>
			</div>
			<DialogBox isOpen={isDialogOpen} onClose={handleDialogClose}>
				{/* Feedback content goes here */}
				<p>Project feedback will be displayed here.</p>
			</DialogBox>
		</div>
	);
};

export default ProjectCard;
