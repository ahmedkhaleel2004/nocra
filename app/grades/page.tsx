import React from "react";
import CourseCard from "../components/CourseCard";

const Grades = () => {
	interface CourseStructure {
		[key: string]: {
			[assignment: string]: number;
		};
	}

	interface GradesStructure {
		[key: string]: {
			[assignment: string]: number;
		};
	}
	const courses: CourseStructure = {
		"MATH 1ZA3": {
			Midterm1: 20,
			Midterm2: 20,
			Assignments: 20,
			Exam: 40,
		},
		"MATH 1ZB3": {
			Midterm1: 20,
			Midterm2: 20,
			Assignments: 20,
			Exam: 40,
		},
		"MATH 1ZC3": {
			Midterm1: 20,
			Midterm2: 20,
			Assignments: 20,
			Exam: 40,
		},
		"ENGINEER 1P13": {
			Projects: 30,
			Midterm: 20,
			Assessments: 10,
			Exam: 40,
		},
		"PHYSICS 1D03": {
			Midterm1: 15,
			Midterm2: 15,
			Loncapa: 20,
			Assignments: 10,
			Exam: 40,
		},
		"PHYSICS 1E03": {
			Midterm1: 15,
			Midterm2: 15,
			Loncapa: 20,
			Assignments: 10,
			Exam: 40,
		},
		"CHEM 1E03": {
			Midterm1: 20,
			Midterm2: 20,
			Exam: 45,
			Labs: 15,
		},
	};
	const currentGrades: GradesStructure = {
		"MATH 1ZA3": {
			Midterm1: 19,
			Midterm2: 0,
			Assignments: 5,
			Exam: 0,
		},
		"MATH 1ZB3": {
			Midterm1: 14,
			Midterm2: 0,
			Assignments: 8,
			Exam: 0,
		},
		"MATH 1ZC3": {
			Midterm1: 11,
			Midterm2: 0,
			Assignments: 11,
			Exam: 0,
		},
		"ENGINEER 1P13": {
			Projects: 15,
			Midterm: 15,
			Assessments: 5,
			Exam: 0,
		},
		"PHYSICS 1D03": {
			Midterm1: 4,
			Midterm2: 0,
			Loncapa: 4,
			Assignments: 3,
			Exam: 0,
		},
		"PHYSICS 1E03": {
			Midterm1: 10,
			Midterm2: 0,
			Loncapa: 11,
			Assignments: 4,
			Exam: 0,
		},
		"CHEM 1E03": {
			Midterm1: 18,
			Midterm2: 0,
			Exam: 0,
			Labs: 14,
		},
	};

	function calculateCurrentGrades(
		courses: CourseStructure,
		currentGrades: GradesStructure
	): Record<string, string | number> {
		const currentCourseGrades: Record<string, string | number> = {};

		for (const course in currentGrades) {
			let totalWeight = 0;
			let totalGrade = 0;

			for (const assignment in currentGrades[course]) {
				const grade = currentGrades[course][assignment];
				const weight = courses[course][assignment] || 0; // Handle cases where the assignment might not exist in the course structure

				if (grade > 0) {
					totalGrade += (grade / weight) * 100;
					totalWeight += 100;
				}
			}

			if (totalWeight > 0) {
				currentCourseGrades[course] = (totalGrade / totalWeight).toFixed(2);
			} else {
				currentCourseGrades[course] = "No grades available";
			}
		}

		return currentCourseGrades;
	}

	const currentCourseGrades = calculateCurrentGrades(courses, currentGrades);

	// Transform data for CourseCard
	const courseCardsData = Object.keys(courses).map((courseName) => ({
		courseName,
		assignments: Object.keys(courses[courseName]).map((assignment) => ({
			name: assignment,
			weight: courses[courseName][assignment],
			grade: currentGrades[courseName][assignment] || 0,
		})),
		currentGrade: currentCourseGrades[courseName],
	}));

	const name: string = "Ahmed Khaleel";
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
			<section className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4 pt-16 max-w-[65rem] mx-auto">
				{courseCardsData.map((course) => (
					<CourseCard key={course.courseName} {...course} />
				))}
			</section>
		</>
	);
};

export default Grades;
