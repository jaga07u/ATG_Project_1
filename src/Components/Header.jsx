/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function Header() {
	const companies = "142,765";
	return (
		<>
			<div
				className="position-relative w-100"
				style={{
					backgroundImage: "url('Rectangle 2.png')",
					height: "400px",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Overlay for reducing brightness */}
				<div
					className="position-absolute top-0 start-0 w-100 h-100 bg-black"
					style={{ opacity: "0.6" }}></div>

				{/* Content */}
				<div
					className="position-absolute d-flex justify-content-center align-items-center"
					style={{ top: "280px", left: "60px" }}>
					<div>
						<h1 className="display-6 fw-semibold text-white">
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
