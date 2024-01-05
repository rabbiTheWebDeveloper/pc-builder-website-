import { cn } from "@/utils/classNames";
import React from "react";

type IButton = {
	icon: React.ReactNode;
	button_styles?: string;
	onClick?: (e: any) => void;
};

const ButtonByIcon = ({ icon, onClick, button_styles }: IButton) => {
	return (
		<button
			className={cn(
				"bg-primary  border border-primary rounded-md p-1   text-white hover:bg-transparent transition duration-300 ",
				button_styles
			)}
			onClick={(e) => onClick && onClick(e)}
		>
			{icon}
		</button>
	);
};

export default ButtonByIcon;

