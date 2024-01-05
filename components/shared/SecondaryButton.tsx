import React from "react";
import { motion } from "framer-motion";
import { type } from "os";
import { cn } from "@/utils/classNames";

type IButton = {
	title: string;
	button_styles?: string;
	onClick?: (e: any) => void;
};

const SecondaryButton = ({ title, onClick, button_styles }: IButton) => {
	return (
		<motion.button
			className={cn(
				" group relative font-jakarta text-base  ",
				button_styles
			)}
			whileHover="hover"
			initial={{ color: "white" }}
			variants={{
				hover: {
					color: "#FB8F2C",
				},
			}}
			onClick={(e) => onClick && onClick(e)}
		>
			{title}
			<motion.div
				className="absolute  -bottom-1  h-[1px]  bg-primary"
				initial={{
					width: "30%",
				}}
				variants={{
					hover: {
						width: "100%",
					},
				}}
			/>
		</motion.button>
	);
};

export default SecondaryButton;


