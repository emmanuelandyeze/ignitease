// components/ImageLayout.js
import Image from 'next/image';

const ImageLayout = () => {
	return (
		<div className="relative w-96 mt-10 md:mt-0 flex items-center h-96 md:h-[454.22px] mx-auto">
			{/* Central Image */}
			<div className="absolute inset-0 flex items-center justify-center">
				<Image
					src="/images/img3.png"
					alt="Center"
					width={200}
					height={200}
					className="shadow-lg md:h-[288px] md:w-[288px]"
				/>
			</div>

			{/* Top Left Image */}
			<div className="absolute top-5 left-14 md:top-0 md:left-0 transform -translate-x-8 -translate-y-8 rotate-[-20deg]">
				<Image
					src="/images/topleft.png"
					alt="Top Left"
					width={100}
					height={100}
					className="rounded-lg border-2 border-[#941A7E] shadow-md"
				/>
			</div>

			{/* Top Right Image */}
			<div className="absolute top-10 right-14 md:top-5 md:right-0 transform translate-x-8 -translate-y-8 rotate-[20deg]">
				<Image
					src="/images/topright.png"
					alt="Top Right"
					width={80}
					height={50}
					className="rounded-lg border-2 border-[#B56300] shadow-md"
				/>
			</div>

			{/* Bottom Left Image */}
			<div className="absolute bottom-5 left-14 md:bottom-0 md:left-0 transform -translate-x-8 translate-y-8 rotate-[15deg]">
				<Image
					src="/images/bottomleft.png"
					alt="Bottom Left"
					width={100}
					height={100}
					className="rounded-lg border-2 border-[#1E5185] shadow-md"
				/>
			</div>

			{/* Bottom Right Image */}
			<div className="absolute bottom-12 right-14 md:bottom-5 md:right-0 transform translate-x-8 translate-y-8 rotate-[-15deg]">
				<Image
					src="/images/4.jpeg"
					alt="Bottom Right"
					width={100}
					height={150}
					className="rounded-lg border-2 border-[#1A6617] shadow-md"
				/>
			</div>
		</div>
	);
};

export default ImageLayout;
