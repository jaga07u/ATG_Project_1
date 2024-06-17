/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import Card from "./Card";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPen } from "react-icons/fa";

function Section() {
	const menu = ["All Posts", "Article", "Event", "Education", "Job"];
	const posts = [
		{
			title: "Article",
			content:
				"What if famous brands had regular fonts? Meet RegulaRands!",
			truncatedContent:
				"I've worked in UX for the better part of a decade. From now on, I plan to rel...",
			author: "Sarthak Kamra",
			views: "1.4k",
			imageUrl: "img1.png",
			avatarUrl: "p1.png",
		},
		{
			title: "",
			content:
				"Tax Benefits for Investment under National Pension Scheme launched for Government",
			truncatedContent:
				"I've worked in UX for the better part of a decade. From now on, I plan to rel...",
			author: "Sushil Misil",
			views: "1.5k",
			imageUrl: "img2.png",
			avatarUrl: "p2.png",
		},
		{
			title: "Twitter",
			content: "Finance & Investment Elite: Social MNer-@LinkedEd",
			truncatedContent:
				"#FinTwits #Fin #Trading #Stocks #Bonds #Investment #BusinessAnalytics #DataScience",
			author: "Wade Jones",
			views: "1.7k",
			imageUrl: "img3.png",
			avatarUrl: "p3.png",
		},
		{
			title: "",
			content: "Software Developer",
			truncatedContent: "@MicrosoftSupport/Helpdesk • 4 hrs",
			author: "Joseph Gray",
			views: "5.5k",
			imageUrl: "",
			avatarUrl: "p4.png",
		},
	];
	return (
		<>
			<div
				className="w-100 min-vh-100"
				style={{
					maxWidth: "80%",
					marginLeft: "auto",
					marginRight: "auto",
				}}>
				<div className="d-flex d-md-none p-4 align-items-center justify-content-between">
					<span className="fw-bold fs-4 text-black">Posts (32)</span>
					<select
						name="filter"
						id="filter-select"
						className="bg-light rounded-2 py-2.5 px-4 fw-medium">
						<option value="All Posts">All Posts</option>
						<option value="Article">Article</option>
						<option value="Event">Event</option>
						<option value="Education">Education</option>
						<option value="Job">Job</option>
					</select>
				</div>
				<div
					className="w-100 d-none d-md-flex flex-md-row justify-content-between align-items-center border-bottom border-gray-300 bg-white"
					style={{ height: "160px" }}>
					<div
						className="d-md-flex d-none justify-content-evenly align-items-center"
						style={{ width: "45%", height: "100%" }}>
						{menu.map((items) => (
							<>
								<div
									className="position-relative"
									style={{
										textAlign: "center",
										width: "100px",
										height: "42px",
										marginTop: "40px",
										cursor: "pointer",
										borderBottom: "2px solid #6B7280",
									}}>
									{items}
									{items == "All Posts" ? "(32)" : ""}
								</div>
							</>
						))}
					</div>
					<div
						className="d-none d-md-flex justify-content-center align-items-center gap-4"
						style={{ width: "35%", height: "100%" }}>
						<button
							className="bg-secondary"
							style={{ width: "160px", height: "40px" }}>
							Write a Post
							<IoMdArrowDropdown style={{ display: "inline" }} />
						</button>
						<button
							className="bg-primary d-flex justify-content-center align-items-center gap-2"
							style={{ width: "160px", height: "40px" }}>
							<BsFillPeopleFill />
							Join Group
						</button>
					</div>
				</div>
				<div
					className="d-flex md:flex-row flex-col"
					style={{ minHeight: "100vh", marginTop: "0.75rem" }}>
					<div
						className="d-flex flex-column gap-2 w-full md:w-[70%]"
						style={{ minHeight: "100vh"}}>
						{posts.map((items, index) => (
							<>
								<Card key={index} {...items} />
							</>
						))}
					</div>
					<div
						className="md:flex hidden justify-content-center align-items-center"
						style={{ width: "30%", height: "50px" }}>
						<div
							className="bg-white text-black d-md-flex align-items-center justify-content-center border-bottom border-gray-200"
							style={{
								width: "250px",
								height: "40px",
								gap: "0.5rem",
							}}>
							<MdOutlineLocationOn />
							<input
								type="text"
								className="d-inline-block"
								style={{
									width: "200px",
									height: "30px",
									outline: "none",
									backgroundColor: "transparent",
								}}
								placeholder="Enter your location"
							/>
							<FaPen />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Section;
