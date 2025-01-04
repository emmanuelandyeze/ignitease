import React from 'react';
import WaitlistBtn from './WaitlistBtn';
import Link from 'next/link';
import ImageLayout from './ImageLayout';

const Landing = () => {
	return (
		<div className="pt-[20px] md:pt-[40px] md:pb-10 max-w-5xl mx-auto md:gap-28 flex flex-col md:flex-row items-start md:items-center ">
			<div className="flex flex-col px-[20px] gap-[16px]">
				<h1 className="text-[#0C111D] text-[36px] md:text-[60px] md:w-[483px] font-[600] leading-[44px] md:leading-[72px]">
					Never run out of cooking gas again
				</h1>
				<p className="text-[#48505E] font-[400] text-[16px] md:w-[483px] md:text-[18px] md:leading-[28px] leading-[24px]">
					Easily track your gas levels accurately and
					receive alerts when it's time for a refill
				</p>
				<Link
					href={'/waitlist'}
					className="bg-[#1E5185] md:mt-5 h-[40px] w-[177px] md:h-[48px] md:w-[185px] flex items-center justify-center rounded-[4px] md:py-[12px] md:px-[18px] md:text-[16px] py-[4px] px-[6px] text-[16px] text-[#fff]"
				>
					<p>Join our waitlist now</p>
				</Link>
			</div>
			<div>
				<ImageLayout />
			</div>
		</div>
	);
};

export default Landing;
