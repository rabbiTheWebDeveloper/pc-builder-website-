/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "@/utils/Context";
import React from "react";

const BuildSuccess = ({ generatePDF }: { generatePDF?: () => void }) => {
	const { builder_items } = useAppContext();
	// total_price
	let total_price =
		Object.keys(builder_items)?.length > 0
			? Object.entries(builder_items).reduce(
					(acc, [key, value]) => {
						return acc + Number(value.price);
					},
					0
			  )
			: 0;

	return (
		<div className="bg-blue-100 text-blue-900 p-6 rounded-lg">
			<h2 className="text-2xl font-bold mb-4">
				🎉 Congratulations! Your PC Build Is Complete! 🎉
			</h2>
			<p className="mb-4">
				You've successfully assembled your dream PC
				configuration. We're excited to see the incredible
				machine you've built! 🚀
			</p>

			<p className="mb-2">
				Here are the details of your PC build:
			</p>

			<ul className="list-disc ml-6 mb-4">
				{Object.keys(builder_items).map((key) => {
					return (
						<li key={key}>
							<strong>{key}:</strong>
							{builder_items[key].name}
						</li>
					);
				})}
			</ul>

			<p className="mb-4">
				Additionally, your total build cost is: ${" "}
				{total_price}
			</p>

			{/* <p className="mb-4">
				📥 Click the button below to download your build
				details as a handy PDF file. 📥
			</p>

			<button
				onClick={() => generatePDF()}
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				Download Build Details
			</button> */}

			<p className="mt-4">
				Thank you for using our PC Builder Website. If you
				have any questions or need further assistance, don't
				hesitate to reach out to our support team at{" "}
				<a
					className="text-blue-500"
					href="mailto:support@pc-builder-website.com"
				>
					ahsanullahsunsbd@gamil.com
				</a>
				.
			</p>

			<p>Happy building! 💻🛠️</p>
		</div>
	);
};

export default BuildSuccess;

