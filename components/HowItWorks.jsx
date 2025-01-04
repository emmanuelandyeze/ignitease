import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
	const steps = [
		'Buy IGNITEASE sensor from any of our suppliers',
		'Fix the IGNITEASE sensor on your gas cylinder',
		'Download and install IGNITEASE app on your phone',
		'Connect the IGNITEASE app to your sensor',
		'All set! Start getting real-time updates',
	];

	return (
		<div className="bg-[#FFFF] mt-1 md:mt-10 max-w-5xl mx-auto  py-1 md:py-5">
			<div>
				<div className="flex justify-center items-center mb-0 md:mb-3">
					<p className="border-2 border-[#48505E] bg-[#EDEEEF] text-[#000] px-[24px] py-[4px] rounded-full">
						How it works
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="max-w-5xl w-full flex flex-col md:items-start md:flex-row md:gap-40">
					{/* Left Section */}
					<div className="px-5 md:ml-20 md:mt-14">
						<div className="flex items-center justify-center">
							<div className="relative flex flex-col items-start space-y-10 w-full">
								{/* SVG Line Connector */}
								<svg
									className="absolute left-5 top-10"
									width="2"
									height="100%"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="1"
										y1="20"
										x2="1"
										y2="calc(100% - 40px)"
										stroke="#d1d5db"
										strokeWidth="1"
										strokeDasharray="4 2"
									/>
								</svg>

								{steps.map((step, index) => (
									<div
										key={index}
										className="flex items-center space-x-4 relative"
									>
										{/* Step Number Circle */}
										<div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-800 text-lg font-semibold z-10 bg-white">
											{index + 1}
										</div>

										{/* Step Description */}
										<p className="text-gray-600 text-[14px] md:text-[16px]">
											{step}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Section */}
					<div className="flex items-center justify-center mb-10 md:mb-0">
						<div className="relative h-[408px] w-[208px] md:w-[305px] md:h-[625px] flex justify-center items-center">
							{/* SVG Background */}
							<svg
								width="374"
								height="374"
								viewBox="0 0 354 354"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute hidden md:block top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2"
							>
								<circle
									cx="177"
									cy="177"
									r="176.5"
									stroke="#48505E"
									stroke-dasharray="8 8"
								/>
								<circle
									cx="176.5"
									cy="176.5"
									r="152"
									stroke="#48505E"
									stroke-dasharray="8 8"
								/>
							</svg>

							<svg
								width="274"
								height="274"
								viewBox="0 0 354 354"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute block md:hidden top-[59%] left-[50%] -translate-x-1/2 -translate-y-1/2"
							>
								<circle
									cx="177"
									cy="177"
									r="176.5"
									stroke="#48505E"
									stroke-dasharray="8 8"
								/>
								<circle
									cx="176.5"
									cy="176.5"
									r="152"
									stroke="#48505E"
									stroke-dasharray="8 8"
								/>
							</svg>

							{/* Foreground Image */}
							<Image
								src="/images/img2.png"
								alt="Auditme"
								width={500}
								height={500}
								className=" z-10 h-[110%] md:h-[100%] mt-28 md:mt-10 w-full object-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
