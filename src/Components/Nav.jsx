/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

function Nav() {
	return (
		<>
			<nav className="w-full md:h-[70px] h-10 bg-white flex md:justify-around justify-end items-center px-4">
				<div className="w-[162px] h-[50px] md:flex hidden justify-center items-center">
					<img src="whole.png" alt="" />
				</div>
				<div className="w-[380px] h-[50px] bg-gray-100 md:flex hidden justify-center items-center gap-4 rounded-full border-none">
					<CiSearch
						style={{ marginLeft: "30px", fontSize: "24px" }}
					/>
					<input
						type="text"
						className="w-[350px] h-[50px] rounded-full outline-none bg-transparent text-black placeholder:text-black"
						placeholder="Search for your favorite groups in ATG"
					/>
				</div>
				<div className="w-[200px] h-[50px] md:flex hidden justify-center items-center ">
					<p className="font-medium">
						Create account.{" "}
						<span className="text-blue-500 font-bold">
							It's free!
						</span>
						<IoMdArrowDropdown style={{ display: "inline" }} />
					</p>
				</div>
				<div className="flex md:hidden items-center gap-3 text-gray-600">
					<FaSquareFull />
                    <FaCircle />
                    <IoTriangle />
				</div>
			</nav>
		</>
	);
}

export default Nav;
