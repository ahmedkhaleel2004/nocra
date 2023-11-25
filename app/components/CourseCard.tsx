// CourseCard.tsx

import React from "react";

interface Assignment {
	name: string;
	weight: number;
	grade: number;
}

interface CourseCardProps {
	courseName: string;
	assignments: Assignment[];
	currentGrade: string | number;
}

const CourseCard: React.FC<CourseCardProps> = ({
	courseName,
	assignments,
	currentGrade,
}) => {
	const roundedGrade = Math.round(Number(currentGrade) * 100);
	return (
		<div className="bg-white rounded-lg p-4 mb-4 min-h-[18rem] shadow-2xl">
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-semibold">{courseName}</h3>
				<div className="flex items-center">
					<span className="text-lg text-white bg-body-blue rounded px-2 font-semibold">
						{roundedGrade}
					</span>
					<span className="mx-2 text-lg font-semibold">→</span>
					<span className="text-lg text-white bg-green-600 rounded px-2 font-semibold">
						{/* Second score goes here */}
						+75
					</span>
				</div>
			</div>
			<div className="mt-4">
				{assignments.map((assignment) => (
					<div key={assignment.name} className="mb-2">
						<div className="flex justify-between">
							<span>{assignment.name}</span>
							<span>{`${assignment.grade}/${assignment.weight}`}</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div
								className="bg-green-600 h-2.5 rounded-full"
								style={{
									width: `${(assignment.grade / assignment.weight) * 100}%`,
								}}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseCard;
