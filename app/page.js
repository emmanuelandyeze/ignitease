import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Info from '@/components/Info';
import Info2 from '@/components/Info2';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="pt-20 md:pt-40">
				<Landing />
				<Partners />
				<Info />
				<HowItWorks />
				<Info2 />
			</div>
			<Footer />
		</div>
	);
}
