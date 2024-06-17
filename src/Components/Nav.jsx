/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import LoginModal from "./LoginModal";

function Nav() {

	const [showLogin, setShowLogin] = useState(false);

	const handleClose = () => {
		setShowLogin(false);
	}

	return (
		<>
			<nav
				className="w-100 bg-white d-flex justify-content-end justify-content-md-around align-items-center px-4 relative"
				style={{ height: "10px", minHeight: "70px" }}>
					<LoginModal show={showLogin} handleClose={handleClose} />
				<div
					className="d-none d-md-flex justify-content-center align-items-center"
					style={{ width: "162px", height: "50px" }}>
					<img src="whole.png" alt="" />
				</div>
				<div
					className="d-none d-md-flex justify-content-center align-items-center"
					style={{
						width: "380px",
						height: "50px",
						backgroundColor: "#f5f5f5",
						gap: "1rem",
						borderRadius: "50px",
						border: "none",
					}}>
					<CiSearch
						style={{ marginLeft: "30px", fontSize: "24px" }}
					/>
					<input
						type="text"
						className="form-control"
						style={{
							width: "350px",
							height: "50px",
							borderRadius: "50px",
							outline: "none",
							backgroundColor: "transparent",
							color: "black",
						}}
						placeholder="Search for your favorite groups in ATG"
					/>
				</div>
				<div
					className="d-none d-md-flex justify-content-center align-items-center"
					style={{
						width: "200px",
						height: "50px",
					}}>
					<p style={{ fontSize: '1rem',cursor:"pointer"  }} onClick={() => setShowLogin(true)}>
						Create account.{" "}
						<span style={{ color: '#3b82f6', fontWeight: 'bold' }}>
							It's free!
						</span>
						<IoMdArrowDropdown style={{ display: "inline" }} />
					</p>
				</div>
				<div className="d-flex d-md-none align-items-center gap-3 text-gray-600">
					<FaSquareFull />
					<FaCircle />
					<IoTriangle />
				</div>
			</nav>
		</>
	);
}

export default Nav;
