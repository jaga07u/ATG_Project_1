/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function Header() {
	const companies = "142,765";
	return (
		<>
			<div
				className="relative w-full h-[400px] bg-cover bg-center"
				style={{ backgroundImage: "url('Rectangle 2.png')" }}>
				{/* Overlay for reducing brightness */}
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

				{/* Content */}
				<div className="absolute md:top-[260px] md:left-[150px] top-[300px] left-[60px] flex justify-center items-center ">
					<div>
						<h1 className="text-3xl font-semibold text-white">
							Computer Engineering
						</h1>
						<p className="text-white">
							{companies} Computer Engineers follow this
						</p>
					</div>
				</div>

				<div className="absolute flex w-full left-0 top-0 items-center justify-between p-4">
					<FaArrowLeft className="text-white text-2xl" />
					<button className="bg-transparent border border-white rounded-md px-3 py-1.5 text-white font-semibold text-lg">
						Join Group
					</button>
				</div>
			</div>
		</>
	);
}

export default Header;
