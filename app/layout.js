import localFont from "next/font/local";
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const hanken = Hanken_Grotesk({
	weight: ['400', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Ignitease',
	description: 'Never run out of cooking gas.',
};

export default function RootLayout({ children }) {
	return (
		<html
			className="scroll-smooth"
			style={{ scrollBehavior: 'smooth' }}
			lang="en"
		>
			<body className={hanken.className}>
				<div>{children}</div>
			</body>
		</html>
	);
}
