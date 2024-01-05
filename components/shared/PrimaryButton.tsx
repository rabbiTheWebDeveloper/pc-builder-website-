import React from "react";
import { motion } from "framer-motion";
import { type } from "os";
import { cn } from "@/utils/classNames";
import { ICONS } from "@/constants/ICONS";

type IButton = {
	title: string;
	button_styles?: string;
	onClick?: (e: any) => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	isLoading?: boolean;
};

const PrimaryButton = ({
	title,
	onClick,
	button_styles,
	disabled = false,
	isLoading = false,
	type = "button",
}: IButton) => {
	return (
		<motion.button
			type={type}
			disabled={disabled}
			className={cn(
				`group relative font-jakarta text-base     border-2 px-4 py-2 flex items-center justify-center gap-4 ${
					disabled
						? " cursor-not-allowed !bg-gray-400"
						: "cursor-pointer"
				}`,
				button_styles
			)}
			whileHover="hover"
			initial={{
				color: "white",
				backgroundColor: "#FB8F2C",
				borderColor: "#fff",
			}}
			variants={{
				hover: {
					color: "#FB8F2C",
					borderColor: "#FB8F2C",
					backgroundColor: "#ffff",
				},
			}}
			onClick={(e) => onClick && onClick(e)}
		>
			{title}
			{isLoading && ICONS.button_loading_icon}
		</motion.button>
	);
};

export default PrimaryButton;

