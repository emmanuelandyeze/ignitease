import Image from 'next/image';
import React from 'react';

const Info = () => {
	return (
		<div>
			<div className="bg-[#FCEAEA] flex flex-col max-w-[85rem] md:mx-auto md:flex-row-reverse justify-center items-start md:items-center gap-[32px] rounded-[40px] py-10 md:py-20 px-5 md:px-20 mx-5 my-14">
				<div className="flex flex-col w-full md:w-[525px] items-start gap-[16px]">
					<h1 className="text-[#0C111D] leading-[44px] text-[36px] md:text-[50px] md:leading-[62px] font-[600]">
						Detect gas leaks before they become a problem
					</h1>
					<p className="text-[#48505E] leading-[24px] text-[16px] md:text-[18px] md:leading-[28px]">
						With real-time alerts and monitoring, our smart
						solution keeps your home safe and secure
					</p>
				</div>
				<div>
					<Image
						src="/images/gasleaks.png"
						alt="About"
						width={500}
						height={500}
						className="w-[310px] h-[239px] md:w-[370px] md:h-[475px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Info;
