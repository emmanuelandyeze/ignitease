import Image from 'next/image';
import React from 'react'

const Partners = () => {
    return (
			<div className="bg-[#F7F7F7] mt-10 md:mt-20 flex justify-center items-center pt-5 pb-10 md:py-10">
				<div>
					<div className="flex justify-center items-center mb-0 md:mb-3">
						<p className="border-2 border-[#48505E] text-[#48505E] px-[24px] py-[4px] rounded-full">
							Partners
						</p>
					</div>
					<div className="flex flex-row gap-4 md:gap-[100px] max-w-5xl mx-auto mt-5 px-5 md:mt-10 justify-between items-center">
						<Image
							src="/images/logo1.png"
							alt="Auditme"
							width={100}
							height={100}
							className="md:w-[185px] md:h-[66px] w-[88px] h-[57px] object-cover"
						/>
						<Image
							src="/images/logo4.png"
							alt="norman"
							width={80}
							height={80}
							className="md:w-[185px] md:h-[66px] w-[88px] h-[47px] object-cover"
						/>
						<Image
							src="/images/logo2.png"
							alt="pep"
							width={100}
							height={100}
							className="md:w-[185px] md:h-[56px] w-[88px] h-[47px] object-cover"
						/>
						<Image
							src="/images/logo3.png"
							alt="havilah"
							width={100}
							height={100}
							className="md:w-[185px] md:h-[56px] w-[88px] h-[47px] object-cover"
						/>
					</div>
				</div>
			</div>
		);
}

export default Partners