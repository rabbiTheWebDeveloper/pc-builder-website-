import { cn } from "@/utils/classNames";
import React from "react";

const Description = ({
	description,
	className,
}: {
	description: string;
	className?: string;
}) => {
	const default_styles = " text-base font-jakarta  text-white/80";
	return <p className={cn(default_styles, className)}>{description}</p>;
};

export default Description;

