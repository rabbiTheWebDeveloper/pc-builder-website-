import { cn } from "@/utils/classNames";
import React from "react";

type IItem = {
	title: string;
	value: string;
};

type IList = {
	items: IItem[];
	titleStyles?: string;
	valueStyles?: string;
	listStyles?: string;
	listParentStyles?: string;
};

const List = ({
	items,
	titleStyles,
	valueStyles,
	listStyles,
	listParentStyles,
}: IList) => {
	return (
		<ul className={cn("flex flex-col", listParentStyles)}>
			{items?.map((item) => {
				return (
					<li
						key={item.title}
						className={cn(
							"flex items-center justify-start gap-0.5",
							listStyles
						)}
					>
						<p
							className={cn(
								"text-lg font-medium font-jakarta  text-white/80",
								titleStyles
							)}
						>
							{item?.title}
						</p>
						<p
							className={cn(
								"text-base font-jakarta  text-white/80",
								valueStyles
							)}
						>
							{item?.value}
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default List;

