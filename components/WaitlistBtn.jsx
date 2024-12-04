import Link from 'next/link';
import React from 'react'

const WaitlistBtn = () => {
  return (
		<Link
			href={'/waitlist'}
			className="bg-[#1E5185] h-[36px] w-[99px] md:h-[48px] md:w-[185px] flex items-center justify-center rounded-[4px] md:py-[12px] md:px-[18px] md:text-[16px] py-[4px] px-[6px] text-[12px] text-[#fff]"
		>
			<p className="hidden md:flex">
				Join our waitlist now
			</p>
			<p className="flex md:hidden">Join our waitlist</p>
		</Link>
	);
}

export default WaitlistBtn