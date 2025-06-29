import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "CONRAD | JAMIR",
	description: "Bringing brands to life through animation, code, and design — from digital ads to interactive web experiences.",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
	return (
		<html lang="en" className="!scroll-smooth !duration-2000">
			<body className={`${roboto.className} antialiased font-roboto overflow-x-hidden bg-black`}>
				<Header />
				<main>{children}</main>
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
