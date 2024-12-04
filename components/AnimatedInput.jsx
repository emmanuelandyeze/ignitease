'use client';
import React, { useState } from 'react';

const AnimatedInput = ({
	label = 'Enter text', // Default label text
	placeholder = 'Enter text', // Default placeholder
	type = 'text', // Default input type
	value,
	onChange,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className="relative w-[100%]">
			{/* Label */}
			<label
				className={`absolute left-3 -top-2.5 text-gray-500 text-sm transition-all duration-300 
          ${
						isFocused || value
							? '-top-3 text-blue-600 bg-white px-1'
							: 'hidden'
					}`}
			>
				{label}
			</label>

			{/* Input */}
			<input
				type={type}
				className="w-full border-[1px] border-[#667085] rounded-md px-[16px] py-[9px] outline-none focus:ring-2 focus:ring-[#667085] focus:border-[#667085]"
				placeholder={isFocused ? '' : placeholder}
				value={value}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChange={onChange}
			/>
		</div>
	);
};

export default AnimatedInput;
