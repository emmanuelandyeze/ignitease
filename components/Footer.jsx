import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
		<div id='contact' className="bg-[#1E2227] pt-14 pb-14 px-5 md:px-0">
			<div className="flex flex-row md:border-b-[.5px] border-b-none md:pb-20 md:border-[#ffffffa6] md:max-w-[85rem] mx-auto items-start gap-5">
				<Image
					src="/images/icon.png"
					alt="Icon"
					width={200}
					height={200}
					className="w-[63px] h-[63px] md:w-[86px] md:h-[86px]"
				/>
				<div className="text-[#FFFFFFCC] text-[14px] md:text-[16px] flex flex-col gap-[8px]">
					<p>41 CMD Rd, Magodo, Ikeja 105102, Lagos</p>
					<p>Ignitease@gmail.com</p>
					<div className="flex flex-row items-center gap-2 text-[14px]">
						<p>+2347035104346</p>
						<p>+2348024247865</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center md:hidden mt-7">
				<SocialIcons />
			</div>
			<div className="border-t-[.5px] border-[#FFFFFFCC] md:border-none mt-8 md:mt-1 pt-3">
				<div className="flex flex-row items-center md:max-w-3xl mx-auto md:justify-between justify-center">
					<p className="text-[#FFFFFFCC] text-[12px] md:text-[14px]">
						Copyright &copy; 2024 IgnitEase. All rights
						reserved.
					</p>
					<div className="hidden md:block">
						<SocialIcons />
					</div>
				</div>
			</div>
		</div>
	);
}

const SocialIcons = () => {
    return (
			<div className="flex flex-row items-center gap-5 text-[14px]">
				<a href="https://twitter.com/ignitease">
					<FaXTwitter className="text-[#FFFFFFB2] w-[29px] h-[29px]" />
				</a>
				<a href="https://facebook.com/ignitease">
					<FaFacebook className="text-[#FFFFFFB2] w-[29px] h-[29px]" />
				</a>
				<a href="https://instagram.com/ignitease">
					<FaInstagram className="text-[#FFFFFFB2] w-[29px] h-[29px]" />
				</a>
			</div>
		);
}

export default Footer