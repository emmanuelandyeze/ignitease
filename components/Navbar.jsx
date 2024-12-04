import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WaitlistBtn from './WaitlistBtn';

const Navbar = () => {
    return (
			<div className="border-b-[1px] fixed w-full bg-[#fff] z-20 border-[#EDEEEF]">
				<div className="max-w-[85rem] mx-auto">
					<div className="h-[75px] justify-between md:h-[96px] px-5 md:px-0 items-center flex ">
						<Link href={'/'}>
							<Image
								src={'/images/logo.png'}
								alt="logo"
								className="md:w-[172px] md:h-[68px] w-[102px] h-[40px]"
								height={100}
								width={100}
							/>
						</Link>
						<div className="flex flex-row items-center gap-[16px] md:gap-[36px]">
							<Link href={'#contact'}>
								<p className="text-[12px] md:text-[16px] text-[#48505E]">
									Contact
								</p>
							</Link>
							<WaitlistBtn />
						</div>
					</div>
				</div>
			</div>
		);
};

export default Navbar;
