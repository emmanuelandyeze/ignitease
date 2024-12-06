import Image from 'next/image';
import React from 'react'

const Partners = () => {
    return (
			<div className="bg-[#F7F7F7] mt-10 md:mt-20 flex justify-center items-center pt-5 pb-0 md:pt-10">
				<div>
					<div className="flex justify-center items-center mb-0 md:mb-3">
						<p className="border-2 border-[#48505E] text-[#48505E] px-[24px] py-[4px] rounded-full">
							Partners
						</p>
					</div>
					<div className="flex flex-row gap-4 md:gap-[40px] max-w-5xl mx-auto mt-5 px-5 md:mt-10 justify-between items-center">
						<Image
							src="/images/ploutos.png"
							alt="Ploutos"
							width={100}
							height={100}
							className="md:w-[185px] md:h-full w-[100px] h-[87px] object-contain md:object-cover"
						/>
						<Image
							src="/images/auditme.png"
							alt="Auditme"
							width={100}
							height={100}
							className="md:w-[185px] md:h-full w-[100px] h-[47px] object-contain"
						/>
					</div>
				</div>
			</div>
		);
}

export default Partners