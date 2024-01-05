import { cn } from "@/utils/classNames";
import Image from "next/image";
import React from "react";

type ICategory = {
	title: string;
	icon: React.ReactNode;
	text_styles?: string;
	card_styles?: string;
};
const Feature = ({ title, icon, text_styles, card_styles }: ICategory) => {
	return (
		<div
			className={cn(
				"  flex    items-center justify-stat gap-4 ",
				card_styles
			)}
		>
			{/* <div className="  text-primary  relative">{icon}</div> */}
			<p
				className={cn(
					" text-xl md:text-2xl font-medium font-libre text-[#111114]",
					text_styles
				)}
			>
				{title}
			</p>
		</div>
	);
};

export default Feature;

