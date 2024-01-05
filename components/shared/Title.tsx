import { cn } from "@/utils/classNames";
import React from "react";

const Title = ({ title, className }: { title: string; className?: string }) => {
	const default_styles =
		"text-[#fff] text-center font-libre font-medium text-6xl capitalize";
	return <h1 className={cn(default_styles, className)}>{title}</h1>;
};

export default Title;

