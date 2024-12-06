import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Info2 = () => {
	return (
		<div>
			<div className="bg-[#FFF4E6] flex flex-col max-w-[85rem] md:mx-auto md:flex-row-reverse justify-center items-start md:items-center gap-[32px] rounded-[40px] py-10 md:py-20 px-5 md:px-20 mx-5 my-10">
				<div className="flex flex-col w-full md:w-[525px] items-start gap-[16px]">
					<h1 className="text-[#0C111D] leading-[44px] text-[36px] md:text-[50px] md:leading-[62px] font-[600]">
						Order cooking gas anytime, anywhere
					</h1>
					<p className="text-[#48505E] leading-[24px] text-[16px] md:text-[18px] md:leading-[28px]">
						Connect with trusted suppliers through our app
						and get gas delivered straight to your door
					</p>
					<Link
						href={'/waitlist'}
						className="bg-[#E87F00] md:mt-5 h-[40px] w-[177px] md:h-[48px] md:w-[185px] flex items-center justify-center rounded-[4px] md:py-[12px] md:px-[18px] md:text-[16px] py-[4px] px-[6px] text-[16px] text-[#fff]"
					>
						<p>Join our waitlist now</p>
					</Link>
				</div>
				<div className='w-[100%] md:w-[30%]'>
					<Image
						src="/images/bike.png"
						alt="Bike"
						width={200}
						height={200}
						className="w-full h-[239px] md:w-[385px] md:h-[475px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Info2;
