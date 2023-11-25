import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
	weight: ["400", "700"], // Regular and Bold weights
	subsets: ["latin"],
	variable: "--font-dm-sans", // Assign a CSS variable name
});

export const metadata: Metadata = {
	title: "Nocra",
	description: "Champion the classroom",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${dmSans.variable}`}>
			<body>
				<Header />
				<main className="pt-24">{children}</main>
			</body>
		</html>
	);
}
