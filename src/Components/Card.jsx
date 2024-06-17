/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function Card({
	title,
	content,
	truncatedContent,
	author,
	views,
	imageUrl,
	avatarUrl,
}) {
	return (
		<div
      className="w-100"
			style={{
				backgroundColor: "#ffffff",
				borderRadius: "0.5rem",
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				overflow: "hidden",
			}}>
			{imageUrl && (
				<img src={imageUrl} alt="Forest in Fog" className="w-100" />
			)}
			<div className="p-4">
				<h2
					style={{
						fontSize: "1.25rem",
						fontWeight: "bold",
						marginBottom: "0.5rem",
					}}>
					{title}
				</h2>
				<p style={{ color: "#4b5563" }}>{content}</p>
				<p
					style={{
						color: "#6b7280",
						fontSize: "0.875rem",
						marginBottom: "1rem",
					}}>
					{truncatedContent}
				</p>
				<div className="d-flex align-items-center">
					<img
						src={avatarUrl}
						alt="Avatar"
						className="rounded-circle d-inline-block w-8 h-8 me-2"
					/>
					<span className="text-gray-700">{author}</span>
					<span className="text-gray-500 ms-2">
						{views ? `• ${views} views` : ""}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
