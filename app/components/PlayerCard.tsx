import React from "react";

interface PlayerCardProps {
	pfp: string;
	name: string;
	score: number;
	className: string;
	className2: string;
	dailyChange: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
	pfp,
	name,
	score,
	className,
	className2,
	dailyChange,
}) => {
	const rank = determineRank(score);
	const rankColor = getRankColor(rank);
	const dailyChangeIndicator =
		dailyChange >= 0 ? (
			<span className="text-green-500 flex items-center pl-2 font-semibold">
				<span className="material-icons">arrow_up</span>
				<span className="ml-1">{Math.abs(dailyChange)}</span>
			</span>
		) : (
			<span className="text-red-500 flex items-center pl-2 font-semibold">
				<span className="material-icons">arrow_down</span>
				<span className="ml-1">{Math.abs(dailyChange)}</span>
			</span>
		);
	return (
		<div className={className}>
			<div className="flex items-center">
				<img
					src={pfp}
					alt="Profile"
					width={40}
					height={40}
					className="rounded-full"
				/>
				<span className="ml-2 font-bold">{name}</span>
				{dailyChangeIndicator}
			</div>
			<div className={className2}>
				<span className={`${rankColor} text-lg font-semibold mr-2`}>
					{rank}
				</span>
				<img src={`/${rank}_1_Rank.png`} alt={rank} width={40} height={40} />
			</div>
		</div>
	);
};

// Function to determine rank based on score
const determineRank = (score: number) => {
	if (score >= 900) return "Radiant";
	if (score >= 800) return "Immortal";
	if (score >= 700) return "Ascendant";
	if (score >= 600) return "Diamond";
	if (score >= 500) return "Platinum";
	if (score >= 400) return "Gold";
	if (score >= 300) return "Silver";
	if (score >= 200) return "Bronze";
	return "Iron";
};

const getRankColor = (rank: string) => {
	switch (rank) {
		case "Radiant":
			return "text-white";
		case "Immortal":
			return "text-red-600";
		case "Ascendant":
			return "text-green-600";
		case "Diamond":
			return "text-purple-500";
		case "Platinum":
			return "text-cyan-600";
		case "Gold":
			return "text-yellow-500";
		case "Silver":
			return "text-gray-500";
		case "Bronze":
			return "text-brown-600";
		case "Iron":
			return "text-gray-700";
		default:
			return "";
	}
};

export default PlayerCard;
